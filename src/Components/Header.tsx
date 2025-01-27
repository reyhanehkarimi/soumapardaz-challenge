import React from "react";
import { useState } from "react";
import {
  HeaderContainer,
    Nav,
    DropdownContainer,
    DropdownButton,
    DropdownMenu,
    BrandContainer,
    Logo,
    BrandText
} from "../styles/header"

const Header :React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderContainer>
      <DropdownContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownButton>ورود</DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        <a style={{ textDecoration: "none" }} href="#">
          <li>سامانه معاملاتی</li>
        </a>
        <a style={{ textDecoration: "none" }} href="#">
          <li>بورس کالا</li>
        </a>
        <a style={{ textDecoration: "none" }} href="#">
          <li>ثبتنام غیر حضوری</li>
        </a>
        <a style={{ textDecoration: "none" }} href="#">
          <li>باشگاه مشتریان</li>
        </a>
      </DropdownMenu>
    </DropdownContainer>
        <Nav>
          <ul>
            <a style={{ textDecoration: "none" }} href="#">
              <li>ارتباط با ما</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              <li>درباره ما</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              <li>خبرنامه</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              <li>سامانه های معاملاتی</li>
            </a>
            <a style={{ textDecoration: "none" }} href="#">
              <li>خدمات</li>
            </a>
          </ul>
        </Nav>
        <BrandContainer>
          <BrandText>
            کارگزاری مهر اقتصاد ایران
            <br />
            Mehr Eghtesad Iranian
          </BrandText>
          <Logo
            src="https://static.meiclub.ir/mehr-eghtesad/img/brand/logo.png"
            alt="logo"
          />
        </BrandContainer>
      </HeaderContainer>
    </>
  );
}
export default Header;

