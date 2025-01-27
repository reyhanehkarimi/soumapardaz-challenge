import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  height: 330px;
  margin-left: 1.4rem;
  margin-top: 0.5rem;
  cursor: pointer;
  transition: border 0.3s ease;
  &:hover {
    border: 2px solid #224d36;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h5`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  margin-top: 2px;
  padding-top: 2px;
  padding-bottom: 2px;
  text-align: right;
  transition: transform 0.8s ease-in-out;

  ${CardContainer}:hover & {
    transform: translateY(5px);
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 2px;
  text-align: right;
  transition: transform 0.6s ease-in-out;

  ${CardContainer}:hover & {
    transform: translateY(10px);
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 10px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #888;
  padding-top: 15px;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
`;

const FooterIcon = styled.span`
  margin-right: 5px;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #666;
`;

const ParentButtonMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 20px;
`;

const ButtonMoreArticle = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: transparent;
  border: 1px solid rgb(5, 62, 14);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: rgb(5, 62, 14);
  font-weight: bold;
  transition: color 0.5s ease, font-weight 0.5s ease;
  z-index: 1;

  &:hover {
    color: white;
    font-weight: bold;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #224d36;
    transition: right 0.5s ease;
    z-index: -1;
  }

  &:hover::before {
    right: 0;
  }
`;
export {
  CardContainer,
  CardGrid,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  CardFooter,
  FooterItem,
  FooterIcon,
  DateText,
  ParentButtonMore,
  ButtonMoreArticle,
};
