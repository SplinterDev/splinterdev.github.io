import dayjs from 'dayjs';
import styled from 'styled-components';
import { TKLPost } from '../types/tkl';

const Cell = styled.div<{ isToday?: boolean }>`
  background-color: ${(props) => (props.isToday ? '#d0d0d0' : '#f0f0f0')};
  padding: 5px;
`;

type Props = {
  day: Date[];
  index: number;
  scheduledPosts: TKLPost[];
};

const DayCell = ({ day, index, scheduledPosts }: Props) => {
  const isToday = dayjs(day[0]).isSame(dayjs(), 'day');
  return (
    <Cell isToday={isToday}>
      {
        scheduledPosts.find((p) => p.scheduledAt === day[index].getTime())
          ?.title
      }
    </Cell>
  );
};

export default DayCell;
