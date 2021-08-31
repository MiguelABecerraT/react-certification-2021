import styled from 'styled-components';

export const BtnDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
`;
export const Button = styled.button`
display: flex;
flex-direction: row;
   background: none;
   border: none;
   align-items: center;
`;

export const Item = styled.img`
width: 40px;
height: auto;
cursor: pointer;
filter: invert(22%) sepia(98%) saturate(6557%) hue-rotate(357deg) brightness(98%) contrast(120%);;
`;

export const Text = styled.span`
width: 60px;
 display: inline-flex;
 position: relative;
 font-size: 0.8rem;
 box-sizing: border-box;
 align-items: center;
 font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
 font-weight: 400;
 line-height: 1.1876em;
 letter-spacing: 0.00938em;
 cursor: pointer;
`;
