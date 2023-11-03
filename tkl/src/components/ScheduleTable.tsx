import dayjs from 'dayjs';
import { getSlotsForCurrentWeek } from '../utils/date';
import { useState } from 'react';
import { Button } from './Button';
import { Column, Row } from './Layout';
import styled from 'styled-components';

const Heading = styled.div`
  font-weight: bold;
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

      {/* table */}

      <Grid>
        <Heading>Time</Heading>
        {slots.map((day) => {
          const isToday = dayjs(day[0]).isSame(dayjs(), 'day');
          const DayHeading = isToday ? TodayHeading : Heading;
          return <DayHeading>{dayjs(day[0]).format('dd (D/MMM)')}</DayHeading>;
        })}
        {slots[0].map((time, index) => {
          return (
            <>
              <div>{dayjs(time).format('h A')}</div>
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
