export const SLOTS = [9, 11, 13, 15, 17];

// Function to get all days of current week
function getCurrentWeek(weekOffset = 0) {
  let curr = new Date(); // get current date
  curr.setTime(curr.getTime() + weekOffset * 7 * 24 * 60 * 60 * 1000); // add weekOffset number of weeks
  let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  let last = first + 6; // last day is the first day + 6

  let firstday = new Date();
  firstday.setFullYear(curr.getFullYear(), curr.getMonth(), first);

  let lastday = new Date();
  lastday.setFullYear(curr.getFullYear(), curr.getMonth(), last);

  return [firstday, lastday];
}

// Function to set time in UTC for a date object
function getUTCTime(date: Date, hour: number) {
  let utcDate = new Date(date);
  utcDate.setUTCHours(hour);
  utcDate.setUTCMinutes(0);
  utcDate.setUTCSeconds(0);
  utcDate.setUTCMilliseconds(0);
  return utcDate;
}

type Week = Date[][];

export function getSlotsForCurrentWeek(weekOffset = 0): Week {
  const week: Week = [];
  const [firstDay, lastDay] = getCurrentWeek(weekOffset);

  const diffDays = Math.ceil(
    (lastDay.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24)
  );

  for (let i = 0; i <= diffDays; i++) {
    const date = new Date(
      firstDay.getFullYear(),
      firstDay.getMonth(),
      firstDay.getDate() + i
    );

    const daySlots = SLOTS.map((slot) => {
      const utcTime = getUTCTime(date, slot);
      return utcTime;
    });

    week.push(daySlots);
  }

  return week;
}
