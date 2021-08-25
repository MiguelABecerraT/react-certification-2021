import styled from 'styled-components';
import theme from '../../Providers/Theme/Theme';

export const MainContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
@media (max-width: 850px) {
  flex-direction: column;
  align-items: center;
}
background-color: ${(props) => theme[props.theme].color};
`;

export const VideoColumn = styled.div`
width: 60%;
margin: 20px 20px 20px 20px;
`;

export const RelatedCol = styled.div`
width: 40%;
margin: 20px 20px 20px 20px;
box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
  0px 1px 10px 0px rgb(0 0 0 / 12%);
`;
