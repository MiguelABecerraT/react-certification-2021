import styled from 'styled-components';

export const RelatedSection = styled.div`
  background-image: url('https://i.pinimg.com/originals/74/43/a3/7443a31b6a19e5630b94a6538ff9bdd1.gif');
  padding-right: 10px;
`;

export const RelatedBar = styled.div`
  height: 30px;
  justify-content: center;
  margin-left: 5px;
  color: #fff;
  background-color: #b32b2b;
  position: static;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

export const RelatedBarTxt = styled.div`
  margin: auto;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
`;

export const ScrollDiv = styled.div`
  @media (min-width: 850px) {
    overflow-y: scroll;
    height: 600px;
  }
`;

export const RelatedDiv = styled.div`
  color: black;
`;

export const RelatedBg = styled.div`
  display: flex;
  width: 90%;
  margin: 5px 20px 0 20px;
  padding-left: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

export const IndvReltDiv = styled.div`
  display: flex;
  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

export const RelatedImg = styled.img`
  width: 50%;
  height: fit-content;
  margin: 20px 5px 10px 5px;
  @media (max-width: 1045px) {
    width: 100%;
    margin: 20px 20px 0 5px;
    padding-right: 20px;
  }
`;

export const RelatedTitle = styled.div`
  margin: 20px 20px 10px 20px;
  margin-bottom: 0.35em;
  font-size: 0.75rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.6;
`;

export const RelatedExtInfo = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
`;