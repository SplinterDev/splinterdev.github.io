import { Button } from './Button';
import { Row } from './Layout';

type Props = {
  weekOffset: number;
  setWeekOffset: (weekOffset: number) => void;
};

const WeekControl = ({ weekOffset, setWeekOffset }: Props) => {
  return (
    <Row justifyContent="center" gap="10px" mb="10px">
      <Button onClick={() => setWeekOffset(weekOffset - 1)}>
        Previous Week
      </Button>
      <Button onClick={() => setWeekOffset(0)}>Current Week</Button>
      <Button onClick={() => setWeekOffset(weekOffset + 1)}>Next Week</Button>
    </Row>
  );
};

export default WeekControl;
