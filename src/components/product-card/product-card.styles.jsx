import styled from "styled-components";

export const ProductsCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
        width: 80%;
        opacity: 0;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        top: 255px;
      }
    
      &:hover {
        img {
          transition: opacity 0.3s;
          opacity: 0.8;
        }
    
        button {
          opacity: 0.85;
          transition: all 0.3s;
        }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
