import { CaloriesForm } from './calories-form';
import { getCalorieData } from './data';

export async function Calories(): Promise<JSX.Element> {
  const { totalConsumedToday, totalAllowedToday } = await getCalorieData();

  return (
    <div>
      <h2>Calories</h2>
      <div>Total Consumed Today: {totalConsumedToday}</div>
      <div>Total Allowed Today: {totalAllowedToday}</div>
      <div>Total Left: {totalAllowedToday - totalConsumedToday}</div>
      <CaloriesForm />
    </div>
  );
}
