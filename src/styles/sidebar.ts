import styled from "styled-components";


const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  right: 0;
  width: 300px;
  height: auto;
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
  margin: 2rem;
  border: 2px solid #224d36;
  border-radius: 8px;
  z-index: 10;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #224d36;
  text-align: right;
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #224d36;
  color: #224d36;
  font-weight: 700;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: white;
    font-weight: bold;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background: #224d36;
    transition: width 0.5s ease, font-weight 0.5s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
    right: 0;
  }
`; 
 const SelectContainer = styled.div `
 margin-bottom: 15px;
 `

 export {
    SideBarContainer,
    Input,
    Button,
    SelectContainer
  };
  