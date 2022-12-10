import { addDays } from './util-time';

describe('addDays', () => {
  it('should add the specified number of days to the date', () => {
    const date = new Date('2022-12-10');
    const days = 5;

    const newDate = addDays(date, days);

    expect(newDate).toEqual(new Date('2022-12-15'));
  });
});
