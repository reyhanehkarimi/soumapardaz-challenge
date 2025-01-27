import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FooterContainer,
  BrandContainer,
  LogoAndText,
  Logo,
  BrandText,
  RightLinksOnFooter,
  CenterLinksOnFooter,
  RightContainer,
  LeftLinksOnFooter,
  FooterLink,
  FooterIcon,
  ParentIcons
} from "../styles/footer"

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
