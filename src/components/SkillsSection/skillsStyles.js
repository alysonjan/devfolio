import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  // background: linear-gradient(to bottom, #0b1c2c, #2c3245, #1a1f33);
  background: linear-gradient(to bottom, #03071e, #0b132b, #1c2541);
  padding: 5rem 0;
`;

export const SkillsWrapper = styled.div`
  width: 50%;
  margin: auto;
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
  padding-top: 2rem;
`;

export const SkillImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  overflow: visible !important;

  @media screen and (max-width: 768px) {
    margin: 0.8rem;
  }

  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 7rem;
      height: 7rem;
      width: ${({ isApi }) => isApi && `calc(7rem * 3.6)`};
      height: ${({ isBackend }) => isBackend && `calc(7rem - 0.2rem)`};
    }

    @media screen and (max-width: 480px) {
      width: 5rem;
      height: 5rem;
      width: ${({ isApi }) => isApi && `calc(5rem * 3.6)`};
      height: ${({ isBackend }) => isBackend && `calc(7rem - 0.2rem)`};
    }
  }
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ layout }) => layout};
  pointer-events: none;

  @media screen and (max-width: 768px) {
    width: 7rem;
    height: 7rem;
  }

  @media screen and (max-width: 480px) {
    width: 5rem;
    height: 5rem;
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
