import React, { useState, useContext, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';

export const AccountingSummaryDiagram = () => {
  const { transactions } = useContext(GlobalContext);

  const [diagramData, setDiagramData] = useState({ data: 0 });

  const updateMonthDataSum = () => {
    function generateMonthDataSum(from, to) {
      const monthChf = transactions.filter(
        transaction =>
          transaction.date >= 2020 + from && transaction.date <= 2020 + to
      );

      const amounts = monthChf.map(transaction => transaction.chf);
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

      return total;
    }

    const janTotal = +generateMonthDataSum('-01-01', '-01-31');
    const febTotal = +generateMonthDataSum('-02-01', '-02-31');
    const marTotal = +generateMonthDataSum('-03-01', '-03-31');
    const aprTotal = +generateMonthDataSum('-04-01', '-04-31');
    const mayTotal = +generateMonthDataSum('-05-01', '-05-31');
    const junTotal = +generateMonthDataSum('-06-01', '-06-31');
    const julTotal = +generateMonthDataSum('-07-01', '-07-31');
    const augTotal = +generateMonthDataSum('-08-01', '-08-31');
    const sepTotal = +generateMonthDataSum('-09-01', '-09-31');
    const octTotal = +generateMonthDataSum('-10-01', '-10-31');
    const novTotal = +generateMonthDataSum('-11-01', '-11-31');
    const decTotal = +generateMonthDataSum('-12-01', '-12-31');

    const chartData = [
      janTotal,
      febTotal,
      marTotal,
      aprTotal,
      mayTotal,
      junTotal,
      julTotal,
      augTotal,
      sepTotal,
      octTotal,
      novTotal,
      decTotal
    ];

    return chartData;
  };

  useEffect(() => {
    setDiagramData({
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      datasets: [
        {
          label: 'Label',
          data: updateMonthDataSum(),
          backgroundColor: [
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)',
            'rgb(22, 0, 145,0.4)'
          ],
          borderColor: [
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)',
            'rgb(22, 0, 145,0.7)'
          ],
          borderWidth: 3
        }
      ]
    });
  }, [transactions]);

  return (
    <div className='diagram'>
      <Bar
        data={diagramData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};
