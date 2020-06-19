import { useEffect, useState } from 'react';

export const useFilterPerMonth = (transactions, categories) => {
  const [chartData, setChartData] = useState([]);
  const categoryValues = categories.map((category) => category.value);

  useEffect(() => {
    setChartData(data);
    // eslint-disable-next-line
  }, [transactions, categories]);

  const categoriesInMonth = (array, filterCategory, filterMonth) => {
    return array.filter(
      (item) =>
        item.category === filterCategory &&
        new Date(item.date).getMonth() === filterMonth
    );
  };

  const categorySum = (array) => {
    const sum = array
      .map((e) => e.chfAmount)
      .reduce((acc, item) => (acc += item), 0);
    return sum.toFixed(0);
  };

  const categoryByMonth = (monthString, monthNr) => {
    const total = { month: monthString };

    categoryValues
      .map((e) => categoriesInMonth(transactions, e, monthNr))
      .forEach((e) => {
        if (e.length) {
          total[e[0].category] = categorySum(e);
        }
      });
    return total;
  };

  const data = [
    categoryByMonth('Jan', 0),
    categoryByMonth('Feb', 1),
    categoryByMonth('Mar', 2),
    categoryByMonth('Apr', 3),
    categoryByMonth('May', 4),
    categoryByMonth('Jun', 5),
    categoryByMonth('Jul', 6),
    categoryByMonth('Aug', 7),
    categoryByMonth('Sep', 8),
    categoryByMonth('Oct', 9),
    categoryByMonth('Nov', 10),
    categoryByMonth('Dec', 11),
  ];

  return chartData;
};
