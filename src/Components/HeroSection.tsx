import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment-jalaali";
import { getNews } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import DaysHeader from "./DaysHeader";
import { RootState } from "../store";
import { setLoading } from "../Redux/newsSlice";
const queryParams = new URLSearchParams();

moment.loadPersian();


interface DayButtonProps {
  isSelected: boolean;
}

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

const HeroSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([]);

  const isLoading = useSelector((state: RootState) => state.news.loading);
  const selectedTags = useSelector((state: RootState) => state.news.selectedTags);
  const sourceTypeId = useSelector(
    (state: RootState) => state.news.sourceTypeId
  );
  const searchKeyword = useSelector((state: RootState) => state.news.searchKeyword);
  const selectedDay = useSelector((state: RootState) => state.news.selectedDay);

  const setIsLoading = (l: boolean) => {
    dispatch(setLoading(l))
  }

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const data = await getNews({
          searchKeyword,
          selectedDay,
          sourceTypeId,
          selectedTags
        });
        setData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchNews();
  }, [selectedTags, sourceTypeId, searchKeyword, selectedDay]); 
    
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "93%" }}
      >
        <h3>خبرنامه</h3>
      </div>
      <DaysHeader />

      {isLoading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <CardGrid>
          {data.length > 0 ? (
            data.map((card) => (
              <CardContainer key={card.id}>
                <CardImage
                  src={
                    card.image ||
                    "https://toshan.net/wp-content/uploads/2021/08/%D8%B4%D8%A7%D8%AE%D8%B5-%D8%A8%D9%88%D8%B1%D8%B3-%DA%86%DB%8C%D8%B3%D8%AA-%D9%88-%DA%86%D9%87-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF%DB%8C-%D8%AF%D8%A7%D8%B1%D8%AF%D8%9F_20210831_djh.jpg"
                  }
                  alt="Card Image"
                />
                <CardContent>
                  <CardTitle>{card.title}</CardTitle>
                  <CardText>{card.brief}</CardText>
                </CardContent>
                <CardFooter>
                  <FooterItem>
                    <FooterIcon>👁️</FooterIcon> {card.views}
                  </FooterItem>
                  <DateText>
                    {moment(card.publishDate).format("jYYYY/jMM/jDD")}
                  </DateText>
                </CardFooter>
              </CardContainer>
            ))
          ) : (
            <p>هیچ خبری یافت نشد.</p>
          )}
        </CardGrid>
      )}

      <ParentButtonMore>
        <ButtonMoreArticle>مشاهده بیشتر</ButtonMoreArticle>
      </ParentButtonMore>
    </>
  );
};

export default HeroSection;
