import styled from "styled-components";

const NavTabStyled = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 0.5em;
  margin: 0;
  padding: 1rem 0 0 8rem;
`;

export const Count = styled.div`
    background: #2AAA8A;
    border-radius: 4px;
    color: #ffffff;
    min-width: 25px;
    text-align: center;
    min-height: 20px;
`;

export const TabName = styled.p`
    display: flex;
    flex-direction: row;
    gap: 5px;
}
`;

export const NavTabItem = styled.li`
  font-weight: 500;
  color: rgb(21, 24, 27);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  cursor: pointer;
  gap: 0.2em;
  ::after {
    content: "";
    height: 0.25em;
    width: 100%;
    background: ${(props) => (props.active ? `#2AAA8A` : ``)};
  }
  :hover,
  :focus {
    background-color: rgb(244, 246, 248);
  }
  p {
    font-size: clamp(0.75rem, 4vw, 0.875rem);
    padding: 0.5em 0.5em 0 0.5em;
    margin: 1em 0 0.5rem 0;
  }
`;

export default NavTabStyled;

export const TabContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  padding: 1.5rem 0 0 8rem;
`;

export const CardStyled = styled.div`
  border: 2px solid #e4dddd;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-basis: 25%;
  background: #ffffff;
`;

export const FlexRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  font-family: Graphik;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CircleStyled = styled.div`
    height: 45px;
    width: 45px;
    background-color: ${(props) => props.bgColor };
    border-radius: 50%;
    display: inline-block;
`;

export const NameTextStyled = styled.span`
    font-size: 16px;
    font-weight: 500;
`;
export const TitleTextStyled = styled.span`
    font-size: 14px;
    font-weight: 500;
`;
export const LocationTextStyled = styled.span`
    font-size: 14px;
    color: #988f8f;
`;

export const HorizontalLine = styled.hr`
    margin: 0;
`;


