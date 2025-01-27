import moment from "moment-jalaali";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay } from "../Redux/newsSlice";
import { useEffect } from "react";
import {
  InputDat,
  DayButton
} from "../styles/days-header"
moment.loadPersian();


const DaysHeader = () => {
  const dispatch = useDispatch();

  const selectedDay = useSelector((state: any) => state.news.selectedDay);

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = moment().subtract(i, "days").startOf('day')
    return {
      label: i === 0 ? 'امروز' : date.format("jDD jMMMM"),
      from: date.toJSON(),
      to: date.endOf('day').toJSON(),
    };
  });

  const handleDayClick = (day: { from: string; to: string }) => {
    dispatch(setSelectedDay(day));
  };
  
  useEffect(() => {
    dispatch(setSelectedDay(days[0]));
  }, []);
    
  return (
    <InputDat>
      {days.map((day) => (
        <DayButton
          key={day.from}
          isSelected={selectedDay?.from === day.from}
          onClick={() => handleDayClick(day)}
        >
          {day.label}
        </DayButton>
      ))}
    </InputDat>
  );
};

export default DaysHeader;
