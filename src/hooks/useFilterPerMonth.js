import { useEffect, useState } from 'react';
import { CURRENT_YEAR } from '../constants';

export const useFilterPerMonth = (transactions) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    function generateMonthDataSum(from, to) {
      const total = transactions.filter(
        (transaction) =>
          transaction.date >= CURRENT_YEAR + from &&
          transaction.date <= CURRENT_YEAR + to
      );

      return total;
    }

    const sumByCategoryByMonth = (month, monthData) => {
      const hteProducts = [0];
      const hteServices = [0];
      const comissions = [0];
      const devWorld = [0];
      const youtube = [0];

      monthData.forEach((e) => {
        switch (e.category) {
          case 'hteProducts':
            hteProducts.push(e.chfAmount);
            break;
          case 'hteServices':
            hteServices.push(e.chfAmount);
            break;
          case 'comissions':
            comissions.push(e.chfAmount);
            break;
          case 'devWorld':
            devWorld.push(e.chfAmount);
            break;
          case 'youtube':
            youtube.push(e.chfAmount);
            break;

          default:
            alert('error in generating chart');
          //error can be deleted in production
        }
      });

      return {
        month: month,
        hteProducts: hteProducts.reduce((acc, item) => (acc += item), 0),
        hteServices: hteServices.reduce((acc, item) => (acc += item), 0),
        comissions: comissions.reduce((acc, item) => (acc += item), 0),
        devWorld: devWorld.reduce((acc, item) => (acc += item), 0),
        youtube: youtube.reduce((acc, item) => (acc += item), 0),
      };
    };

    const janTotal = sumByCategoryByMonth(
      'Jan',
      generateMonthDataSum('-01-01', '-01-31')
    );
    const febTotal = sumByCategoryByMonth(
      'Feb',
      generateMonthDataSum('-02-01', '-02-31')
    );
    const marTotal = sumByCategoryByMonth(
      'Mar',
      generateMonthDataSum('-03-01', '-03-31')
    );
    const aprTotal = sumByCategoryByMonth(
      'Apr',
      generateMonthDataSum('-04-01', '-04-31')
    );
    const mayTotal = sumByCategoryByMonth(
      'May',
      generateMonthDataSum('-05-01', '-05-31')
    );
    const junTotal = sumByCategoryByMonth(
      'Jun',
      generateMonthDataSum('-06-01', '-06-31')
    );
    const julTotal = sumByCategoryByMonth(
      'Jul',
      generateMonthDataSum('-07-01', '-07-31')
    );
    const augTotal = sumByCategoryByMonth(
      'Aug',
      generateMonthDataSum('-08-01', '-08-31')
    );
    const sepTotal = sumByCategoryByMonth(
      'Sep',
      generateMonthDataSum('-09-01', '-09-31')
    );
    const octTotal = sumByCategoryByMonth(
      'Oct',
      generateMonthDataSum('-10-01', '-10-31')
    );
    const novTotal = sumByCategoryByMonth(
      'Nov',
      generateMonthDataSum('-11-01', '-11-31')
    );
    const decTotal = sumByCategoryByMonth(
      'Dec',
      generateMonthDataSum('-12-01', '-12-31')
    );

    const data = [
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
      decTotal,
    ];

    setChartData(data);
  }, [transactions]);

  return chartData;
};
