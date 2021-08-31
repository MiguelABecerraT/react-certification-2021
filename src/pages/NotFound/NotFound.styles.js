import styled from "styled-components";
import theme from "../../providers/Theme/Theme";

export const HomeLink = styled.section`
background-color: ${(props) => theme[props.theme].color};
height: 900px;
.home-link {
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  text-align: right;
  padding: 0.2rem 0.3rem;
  color: ${(props) => theme[props.theme].txtColor};
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home-link::before {
  content: '←';
  padding-right: 0.2rem;
  display: inline-block;
}
`;
