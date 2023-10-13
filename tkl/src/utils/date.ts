export const SLOTS = [8, 10, 12, 14, 16]; // 8AM, 10AM, 12PM, 2PM, 4PM

// Function to get all days of current week
function getCurrentWeek(weekOffset = 0) {
  let curr = new Date(); // get current date
  curr.setTime(curr.getTime() + weekOffset * 7 * 24 * 60 * 60 * 1000); // add weekOffset number of weeks
  let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  let last = first + 6; // last day is the first day + 6
  let firstday = new Date(curr.setDate(first));
  let lastday = new Date(curr.setDate(last));
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

  for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
    const date = new Date(firstDay.getFullYear(), firstDay.getMonth(), i);

    const daySlots = SLOTS.map((slot) => {
      const utcTime = getUTCTime(date, slot);
      return utcTime;
    });

    week.push(daySlots);
  }

  return week;
}
