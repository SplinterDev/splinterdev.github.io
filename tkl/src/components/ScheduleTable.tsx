import dayjs from 'dayjs';
import { getSlotsForCurrentWeek } from '../utils/date';
import { useState } from 'react';
import { Button } from './Button';
import { Row } from './Layout';

const ScheduleTable = () => {
  const [weekOffset, setWeekOffset] = useState(0);

  const slots = getSlotsForCurrentWeek(weekOffset);
  console.log(slots);

  return (
    <div>
      <Row justifyContent="center" gap="10px" mb="10px">
        <Button onClick={() => setWeekOffset(weekOffset - 1)}>
          Previous Week
        </Button>
        <Button onClick={() => setWeekOffset(0)}>Current Week</Button>
        <Button onClick={() => setWeekOffset(weekOffset + 1)}>Next Week</Button>
      </Row>
      <Row justifyContent="space-between" gap="10px">
        <div>
          <div>Time</div>
          {slots[0].map((time) => {
            return <div>{dayjs(time).format('HH A')}</div>;
          })}
        </div>
        {slots.map((day) => {
          return <div>{dayjs(day[0]).format('dd (D/MMM)')}</div>;
        })}
      </Row>
    </div>
  );
};

export default ScheduleTable;
