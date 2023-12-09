import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getSlotsForCurrentWeek } from '../utils/date';
import { useState } from 'react';
import styled from 'styled-components';
import usePostsStore from '../stores/posts';
import DayCell from './DayCell';
import WeekControl from './WeekControl';

dayjs.extend(utc);
dayjs.extend(timezone);

const Heading = styled.div`
  font-weight: bold;
  cursor: pointer;
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

  return (
    <div>
      <WeekControl weekOffset={weekOffset} setWeekOffset={setWeekOffset} />

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
                <DayCell
                  day={day}
                  index={index}
                  scheduledPosts={scheduledPosts}
                />
              ))}
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default ScheduleTable;
