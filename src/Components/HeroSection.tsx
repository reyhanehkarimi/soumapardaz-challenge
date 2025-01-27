import React, { useState, useEffect } from "react";
import moment from "moment-jalaali";
import { getNews } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import DaysHeader from "./DaysHeader";
import { RootState } from "../store";
import { setLoading } from "../Redux/newsSlice";
import {
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
} from "../styles/hero-section"
const queryParams = new URLSearchParams();

moment.loadPersian();



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
