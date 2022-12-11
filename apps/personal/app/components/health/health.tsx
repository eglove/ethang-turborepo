import { getTodaysRecord } from './data';
import { HealthForm } from './health-form';

export async function Health(): Promise<JSX.Element> {
  const todaysRecord = await getTodaysRecord();

  return (
    <div>
      <h2>Health</h2>
      <HealthForm todaysRecord={todaysRecord} />
    </div>
  );
}
