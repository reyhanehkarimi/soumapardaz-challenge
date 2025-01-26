import React, { useState } from "react";
import styled, { Styled } from "styled-components";
import moment from "moment-jalaali";

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
    padding-top: 15px
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
  margin : 25px 20px
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
    content: '';
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

interface CardData {
  id: number;
  image: string;
  title: string;
  text:string;
  views: number;
  date: string;
}

function HeroSection() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = moment().add(i, "days").format("jDD jMMMM");
    return date;
  });

  

  const cardData: CardData[] = [
    {
      id: 1,
      image:
        "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg",
      title: "پیش بینی معاملات بورس",
      text: "انتظار می‌رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود. انتظار می‌رود در ابتدای معاملات...",
      views: 326,
      date: "1402/05/01 - 10:26:09",
    },
    {
      id: 2,
      image:
        "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg",
      title: "پیش بینی معاملات بورس",
      text: "انتظار می‌رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود. انتظار می‌رود در ابتدای معاملات",
      views: 150,
      date: "1402/05/02",
    },
    {
      id: 3,
      image:
        "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg",
      title: "پیش بینی معاملات بورس",
      text: "انتظار می‌رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود. انتظار می‌رود در ابتدای معاملات",
      views: 450,
      date: "1402/05/03",
    },
    {
      id: 4,
      image:
        "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg",
      title: "پیش بینی معاملات بورس",
      text: "انتظار می‌رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود. انتظار می‌رود در ابتدای معاملات",
      views: 210,
      date: "1402/05/04",
    },
    {
      id: 5,
      image:
        "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg",
      title: "پیش بینی معاملات بورس",
      text: "انتظار می‌رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود. انتظار می‌رود در ابتدای معاملات",
      views: 180,
      date: "1402/05/05",
    },
    {
      id: 6,
      image:
        "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg",
      title: "پیش بینی معاملات بورس",
      text: "انتظار می‌رود در ابتدای معاملات روز شنبه بازار سرمایه با یک عرضه سنگین مواجه شود. انتظار می‌رود در ابتدای معاملات",
      views: 360,
      date: "1402/05/06",
    },
  ];

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "93%" }}
      >
        <h3 className="">خبرنامه</h3>
      </div>
      <InputDat>
        {days.map((day) => (
          <DayButton
            key={day}
            isSelected={selectedDay === day}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </DayButton>
        ))}
      </InputDat>

      <CardGrid>
        {cardData.map((card) => (
          <CardContainer key={card.id}>
            <CardImage src={card.image} alt="Card Image" />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </CardContent>
            <CardFooter>
              <FooterItem>
                <FooterIcon>👁️</FooterIcon> {card.views}
              </FooterItem>
              <DateText>{card.date}</DateText>
            </CardFooter>
          </CardContainer>
        ))}
      </CardGrid>

       <ParentButtonMore>
      <ButtonMoreArticle>مشاهده بیشتر </ButtonMoreArticle>
       </ParentButtonMore>

    </>
  );
}

export default HeroSection;
