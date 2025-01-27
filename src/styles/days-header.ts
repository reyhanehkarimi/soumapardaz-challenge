import styled from "styled-components";


interface DayButtonProps {
    isSelected: boolean;
  }
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

  export {
    InputDat,
    DayButton
  }
  