import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../utils/api';
import MainWeek from '../components/MainWeek';
import AddNextWeekBudget from '../components/AddNextWeekBudget';
import AddSpending from '../components/AddSpending';
import BudgetHistory from '../components/BudgetHistory';

function DashboardPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };
    fetchData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <MainWeek current={userData.currentWeek} weekData={userData.weekData} />
      <AddNextWeekBudget currentID={userData.id} nextWeekDate={userData.nextWeekDate} />
      <AddSpending currentID={userData.id} current={userData.currentWeek} />
      <BudgetHistory userHistory={userData.history} />
    </div>
  );
}

export default DashboardPage;
