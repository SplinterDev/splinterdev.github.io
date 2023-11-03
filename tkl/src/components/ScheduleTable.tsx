import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getSlotsForCurrentWeek } from '../utils/date';
import { useState } from 'react';
import { Button } from './Button';
import { Row } from './Layout';
import styled from 'styled-components';
import usePostsStore from '../stores/posts';

dayjs.extend(utc);
dayjs.extend(timezone);

const Heading = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const Cell = styled.div<{ isToday?: boolean }>`
  background-color: ${(props) => (props.isToday ? '#d0d0d0' : '#f0f0f0')};
  padding: 5px;
`;

const TodayHeading = styled(Heading)`
  color: #666666;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;

const ScheduleTable = () => {
  const { scheduledPosts } = usePostsStore();
  const [weekOffset, setWeekOffset] = useState(0);
  const [isEST, setIsEST] = useState(true);

  const slots = getSlotsForCurrentWeek(weekOffset);

  const toggleTimezone = () => {
    setIsEST(!isEST);
  };

  const formatTime = (time: Date) => {
    const date = isEST ? dayjs(time).tz('America/New_York') : dayjs(time);
    return date.format('h A');
  };

  // slots.map((day) => {
  //   day.map((time) => {
  //     console.log(dayjs(time).format('D/MMM hh:mm A'));
  //   });
  // });
  // scheduledPosts.map((p) =>
  //   console.log(dayjs(p.scheduledAt).format('D/MMM hh:mm A'), p.title)
  // );

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
              {slots.map((day) => {
                const isToday = dayjs(day[0]).isSame(dayjs(), 'day');
                return (
                  <Cell isToday={isToday}>
                    {
                      scheduledPosts.find(
                        (p) => p.scheduledAt === day[index].getTime()
                      )?.title
                    }
                  </Cell>
                );
              })}
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default ScheduleTable;
