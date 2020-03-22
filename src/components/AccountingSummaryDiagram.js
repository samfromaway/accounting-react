import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AccountingSummaryDiagram = () => {
  const { transactions } = useContext(GlobalContext);

  return <div>CHART</div>;
};
