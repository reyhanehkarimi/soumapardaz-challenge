import moment from "moment-jalaali";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSelectedDay } from "../Redux/newsSlice";
import { useEffect } from "react";

moment.loadPersian();

const InputDat = styled.div`
  width: 89.5%;
  height: 1.5rem;
  background-color: rgb(235, 236, 237);
  border-radius: 4px;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  direction: rtl;
`;

interface DayButtonProps {
  isSelected: boolean;
}
const DayButton = styled.button<DayButtonProps>`
  background-color: ${(props) => (props.isSelected ? "#224D36" : "#eaeaea")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-weight: 700;
  font-size: 15px;
  margin: 0;
  flex-grow: 1;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#224D36" : "#d1d1d1")};
  }

  ${(props) =>
    props.isSelected &&
    `
      transform: scale(1.1); 
  `}
`;

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
