import styled from 'styled-components';
import theme from '../../../../providers/Theme/Theme';

export const MainVideoContent = styled.div`
  padding-bottom: 20px;
  width: 100%;
`;

export const VideoIframe = styled.iframe`
    width: 100%;
    height: 400px;
    #movie_player{
      background-color: ${(props) => theme[props.theme].color};
    }
`;

export const MainVideoTitle = styled.div`
    margin-bottom: 0.35em;
    font-size: 1.25rem;
    font-family: 'Roboto','Helvetica','Arial',sans-serif;
    font-weight: 500;
    line-height: 1.6;
    color: ${(props) => theme[props.theme].txtColor};
`;

export const MainVideoDescription = styled.div`
  margin-top: 10px;
  color: ${(props) => theme[props.theme].VideoCard.color};
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
`;

export const FooterText = styled.div`
  margin-top: 10px;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
    color: ${(props) => theme[props.theme].txtColor};
`;