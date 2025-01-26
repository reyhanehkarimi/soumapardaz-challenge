import React from "react";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FooterIconProps {
  href: string;
  ariaLabel: string;
}

const FooterContainer = styled.div`
  width: 100%;
  height: 20rem;
  background-color: rgb(235, 236, 237);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: black;
  margin-bottom: 3rem @media (max-width: 768px) {
    gap: 0.8rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 0.75rem;
  }
`;

const LogoAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.img`
  width: 70px;
  height: auto;

  @media (max-width: 768px) {
    width: 75px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;

const BrandText = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
  text-align: right;
  font-weight: 600;
  color: black;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const RightLinksOnFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 0.5rem;
  text-align: right;
`;

const CenterLinksOnFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-top: 0.5rem;
  text-align: right;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const LeftLinksOnFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2.4rem;
  text-align: right;
  margin-left: 2rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: 550;
  transition: color 0.3s ease;

  &:hover {
    color: #224d36;
  }
`;

const FooterIcon = styled.a<FooterIconProps>`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #224d36;
  }
`;

const ParentIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;

function Footer() {
  return (
    <>
      <FooterContainer>
        <LeftLinksOnFooter>
          <strong style={{ opacity: 0.5, alignSelf: "center" }}>
            با ما باشید
          </strong>
          <ParentIcons>
            <FooterIcon href="https://linkedin.com" ariaLabel="LinkedIn">
              <FaLinkedin />
            </FooterIcon>
            <FooterIcon href="https://instagram.com" ariaLabel="Instagram">
              <FaInstagram />
            </FooterIcon>
            <FooterIcon href="https://twitter.com" ariaLabel="Twitter">
              <FaTwitter />
            </FooterIcon>
            <FooterIcon href="https://telegram.com" ariaLabel="Telegram">
              <FaTelegram />
            </FooterIcon>
          </ParentIcons>
          <strong style={{ opacity: 0.5, color: "rgb(34, 77, 54)" }}>
            دقیق و امن،با مهر همراه شما هستیم
          </strong>
          <img
            style={{
              width: "90px",
              height: "90px",
              marginTop: "1rem",
              alignSelf: "center",
            }}
            src="https://www.p30web.org/wp-content/uploads/2016/12/enamad_icon__text_color_blue_1024.png"
            alt="e-namad"
          />
        </LeftLinksOnFooter>

        <CenterLinksOnFooter>
          <strong style={{ opacity: 0.5 }}>تماس با ما</strong>
          <FooterLink href="#">
            تهران،خیابان استاد مطهری خیابان میرزای شیرازی
            <FaMapMarkerAlt style={{ marginLeft: "5px", marginTop: "2px" }} />
            <br />
            ،کوچه هفدهم،پلاک 17
          </FooterLink>
          <FooterLink href="tel:021-42919000">
            021-42919000
            <FaPhone style={{ marginLeft: "5px", marginTop: "2px" }} />
          </FooterLink>
          <FooterLink href="mailto:info@meibours.ir">
            info@meibours.ir
            <FaEnvelope style={{ marginLeft: "5px", marginTop: "2px" }} />
          </FooterLink>
        </CenterLinksOnFooter>

        <RightLinksOnFooter>
          <strong style={{ opacity: 0.5 }}>لینک مفید</strong>
          <FooterLink href="#">سازمان بورس و اوراق بهادار</FooterLink>
          <FooterLink href="#"> دنیای اقتصاد</FooterLink>
          <FooterLink href="#">شبکه کدال</FooterLink>
          <FooterLink href="#">شرکت مدیریت فناوری بورس</FooterLink>
        </RightLinksOnFooter>

        <RightContainer>
          <BrandContainer>
            <LogoAndText>
              <BrandText>
                کارگزاری مهر اقتصاد ایران
                <br />
                Mehr Eghtesad Iranian
              </BrandText>
              <Logo
                src="https://static.meiclub.ir/mehr-eghtesad/img/brand/logo.png"
                alt="logo"
              />
            </LogoAndText>
          </BrandContainer>
          <RightLinksOnFooter>
            <strong style={{ opacity: 0.5 }}>دسترسی سریع</strong>
            <FooterLink href="#">راهنمایی سرمایه گذاری در بورس کالا</FooterLink>
            <FooterLink href="#">شعب و دفاتر مهر اقتصاد</FooterLink>
            <FooterLink href="#">شعب و دفاتر مهر اقتصاد</FooterLink>
          </RightLinksOnFooter>
        </RightContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;
