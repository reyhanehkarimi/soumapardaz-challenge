import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { query } from "express";

interface DropdownMenuProps {
  isOpen: boolean;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2.8rem;
    margin: 0;
    padding: 0;
  }

  li {
    cursor: pointer;
    font-size: 16px;
    font-weight: 550;
    color: black;
    transition: color 0.1s ease, transform 0.3s ease;

    &:hover {
      transform: translate(3px, -3px);
      color: #224d36;
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      gap: 1.5rem;
    }

    li {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    ul {
      gap: 1rem;
    }

    li {
      font-size: 14px;
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 0.5rem 3.9rem;
  font-size: 1rem;
  background-color: rgb(34, 77, 54);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(5, 62, 14);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.8rem;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    visibility: hidden;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const DropdownMenu = styled.ul<DropdownMenuProps>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 10;
  min-width: 150px;

  animation: ${(props) => (props.isOpen ? slideDown : "none")} 0.5s ease;

  li {
    display: block;
    width: 74%;
    padding: 1rem 1.2rem;
    cursor: pointer;
    color: black;
    text-align: left;

    &:hover {
      background-color: #f4f4f4;
    }
  }

  @media (max-width: 768px) {
    min-width: 120px;
    width: 100%;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    font-size: 0.8rem;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: black;

  @media (max-width: 768px) {
    gap: 0.3rem; 
    font-size: 0.8rem; 
  }

  @media (max-width: 480px) {
    gap: 0.2rem; 
    font-size: 0.75rem; 
  }
`;

const Logo = styled.img`
  width: 90px;
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

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

