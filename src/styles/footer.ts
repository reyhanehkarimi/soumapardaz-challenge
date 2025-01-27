import styled from "styled-components";
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

export {
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
  };
  