import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: #222733;
  background: linear-gradient(to bottom, #0b1c2c, #2c3245, #1a1f33);

  @media screen and (max-width: 1364px) {
    height: 180vh;
  }

  @media screen and (max-width: 1024px) {
    height: 180vh;
  }

  @media screen and (max-width: 900px) and (min-width: 600px),
    (min-width: 1100px) {
    height: 160vh;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
  @media screen and (max-width: 480px) {
    height: 150vh;
  }
  @media screen and (min-width: 320px) {
    height: 190vh;
  }
`;

export const ProjectContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ProjectWrapper = styled.div`
  width: 22.25rem;
  height: 24.188rem;
  border-radius: 1.563rem;
  background: #2e3445;
  margin: 0.25rem 0.25rem 1.25rem 0.25rem;

  @media screen and (max-width: 768px) {
    width: 18.25rem;
    height: 18.188rem;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: #2998ec;
  font-size: 1.5rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 200;
    margin-top: 1rem;
  }
`;

export const ProjectDescription = styled.div`
  font-size: 1rem;
  line-height: 1.75rem;
  text-align: center;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.17rem;
    margin: 0.75rem;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

export const StackWrapper = styled.div`
  border: 1px solid #2998ec;
  background-color: #2e3445;
  border-radius: 0.5rem;
  color: #ffff;
  padding: 0.15rem 0.75rem;
  font-size: 16px;
  margin: 0.75rem;

  @media screen and (max-width: 768px) {
    padding: 0.15rem 0.75rem;
    font-size: 14px;
    margin: 0.25rem;
  }
`;

export const Tech = styled.small``;
