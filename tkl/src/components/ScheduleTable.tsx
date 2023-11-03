import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getSlotsForCurrentWeek } from '../utils/date';
import { useState } from 'react';
import { Button } from './Button';
import { Row } from './Layout';
import styled from 'styled-components';

dayjs.extend(utc);
dayjs.extend(timezone);

const Heading = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const TodayHeading = styled(Heading)`
  color: blue;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;

const ScheduleTable = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const [isEST, setIsEST] = useState(false);

  const slots = getSlotsForCurrentWeek(weekOffset);

  const toggleTimezone = () => {
    setIsEST(!isEST);
  };

  const formatTime = (time: Date) => {
    const date = isEST ? dayjs(time).tz('America/New_York') : dayjs(time);
    return date.format('h A');
  };

  return (
    <div>
      <Row justifyContent="center" gap="10px" mb="10px">
        <Button onClick={() => setWeekOffset(weekOffset - 1)}>
          Previous Week
        </Button>
        <Button onClick={() => setWeekOffset(0)}>Current Week</Button>
        <Button onClick={() => setWeekOffset(weekOffset + 1)}>Next Week</Button>
      </Row>

      {/* table */}
      <Grid>
        <Heading onClick={toggleTimezone}>Time{isEST && ' (EST)'}</Heading>
        {slots.map((day) => {
          const isToday = dayjs(day[0]).isSame(dayjs(), 'day');
          const DayHeading = isToday ? TodayHeading : Heading;
          return <DayHeading>{dayjs(day[0]).format('dd (D/MMM)')}</DayHeading>;
        })}
        {slots[0].map((time, index) => {
          return (
            <>
              <div>{formatTime(time)}</div>
              {slots.map((day) => (
                <div>{/* Your data here */}</div>
              ))}
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default ScheduleTable;
