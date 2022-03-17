import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222733;

  @media screen and (max-width: 1364px) {
    height: 150vh;
  }

  @media screen and (max-width: 1024px) {
    height: 140vh;
  }

  @media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px)  {
    height: 160vh;
  }


  @media screen and (max-width: 768px) {
    height: 140vh;
    padding-top:3rem ;
  }
`;

export const AboutWrapper = styled.div`
    width:70% ;
    margin:auto ;
    display: flex;
    justify-content: space-around ;
    align-items: center ;

    @media screen and (max-width: 768px) {
    flex-direction:column ;
  }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem;
`;

export const Image = styled.img`
  width: 13.5rem;
  max-height: 30.5rem;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 9.5rem;
    max-height: 16.5rem;
    object-fit: fill;
  }
`;


export const DescriptionContainer = styled.div`
    width:40% ;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const Description = styled.div`
    font-size:1.25rem;
    text-align:center;
    line-height:2.25rem ;

  @media screen and (max-width: 768px) {
    font-size:1rem;
  }

  @media screen and (max-width: 480px) {
    line-height:2rem ;
  }

  @media screen and (max-width: 360px) {
    line-height:1.45rem ;
  }
`;
