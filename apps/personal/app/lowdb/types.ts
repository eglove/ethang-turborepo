export type PersonalDatabase = {
  calorieRecord?: Record<string, CalorieRecord>;
  habit?: Record<string, HabitRecord>;
  healthRecord?: HealthRecord;
};

export type CalorieRecord = {
  consumed: number;
  date: Date;
};

export type HealthRecord = {
  age: number;
  bmr: number;
  date: Date;
  heightIn: number;
  weightLb: number;
};

export type HabitRecord = {
  due: Date;
  recurs: number;
};

export type HabitRecordWithName = HabitRecord & { name: string };
