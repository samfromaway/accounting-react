import { useEffect, useState } from 'react';
import { CURRENT_YEAR } from '../constants';

export const useFilterPerMonth = (transactions, categories) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    function filterByMonth(from, to) {
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

      /////////////////////////////////////////
      var data = [
        {
          id: 1,
          term_id: 5,
          type: 'car',
        },
        {
          id: 2,
          term_id: 3,
          type: 'bike',
        },
        {
          id: 3,
          term_id: 6,
          type: 'car',
        },
      ];

      var result = data.filter(function (v, i) {
        return (v['term_id'] == 5 || v['term_id'] == 6) && v.type == 'car';
      });

      console.log(result);

      //  https://medium.com/better-programming/creating-a-multi-filter-function-to-filter-out-multiple-attributes-javascript-react-rails-5aad8e272142

      ///////////////////////////////////////////

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
      filterByMonth('-01-01', '-01-31')
    );
    const febTotal = sumByCategoryByMonth(
      'Feb',
      filterByMonth('-02-01', '-02-31')
    );

    const marTotal = sumByCategoryByMonth(
      'Mar',
      filterByMonth('-03-01', '-03-31')
    );
    const aprTotal = sumByCategoryByMonth(
      'Apr',
      filterByMonth('-04-01', '-04-31')
    );
    const mayTotal = sumByCategoryByMonth(
      'May',
      filterByMonth('-05-01', '-05-31')
    );
    const junTotal = sumByCategoryByMonth(
      'Jun',
      filterByMonth('-06-01', '-06-31')
    );
    const julTotal = sumByCategoryByMonth(
      'Jul',
      filterByMonth('-07-01', '-07-31')
    );
    const augTotal = sumByCategoryByMonth(
      'Aug',
      filterByMonth('-08-01', '-08-31')
    );
    const sepTotal = sumByCategoryByMonth(
      'Sep',
      filterByMonth('-09-01', '-09-31')
    );
    const octTotal = sumByCategoryByMonth(
      'Oct',
      filterByMonth('-10-01', '-10-31')
    );
    const novTotal = sumByCategoryByMonth(
      'Nov',
      filterByMonth('-11-01', '-11-31')
    );
    const decTotal = sumByCategoryByMonth(
      'Dec',
      filterByMonth('-12-01', '-12-31')
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
