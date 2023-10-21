import dayjs from 'dayjs';
import { getSlotsForCurrentWeek } from '../utils/date';

const ScheduleTable = () => {
  const slots = getSlotsForCurrentWeek(0);

  return (
    <div>
      {slots.map((day) => {
        return <div>{dayjs(day[0]).format('dd (D/MMM)')}</div>;
      })}
    </div>
  );
};

export default ScheduleTable;
