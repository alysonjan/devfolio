import styled from "styled-components";

export const SkillsContainer = styled.div`
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


  @media screen and (max-width: 480px) {
    height: 115vh;
  }

`;

export const SkillsWrapper = styled.div`
  width: 50%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SkillImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    margin: 0.80rem;
  }
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ layout }) => layout};

  @media screen and (max-width: 768px) {
    width: 7rem;
    height: 7rem;
    object-fit:fill ;
  }

  @media screen and (max-width: 480px) {
    width: 5rem;
    height: 5rem;
    object-fit:fill ;
  }
`;

export const SkillbarContainer = styled.div`
  width: 7.5rem;
  height: 0.563rem;
  background: #c4c4c4;

  @media screen and (max-width: 480px) {
    width: 5.2rem;
    height: 0.363rem;
  }
`;

export const Bar = styled.div`
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ color }) => color};
`;
