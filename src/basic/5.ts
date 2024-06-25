enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: string) => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};
console.log(DayOfWeek.Friday);
