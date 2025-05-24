import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  // background: linear-gradient(to bottom, #0b1c2c, #2c3245, #1a1f33);
  background: linear-gradient(to bottom, #03071e, #0b132b, #1c2541);
  padding: 5rem 0;
`;

export const ProjectContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 2rem;
`;

// export const ProjectWrapper = styled.div`
//   width: 22.25rem;
//   height: 24.188rem;
//   border-radius: 1.563rem;
//   background: #2e3445;
//   margin: 0.25rem 0.25rem 1.25rem 0.25rem;

//   @media screen and (max-width: 768px) {
//     width: 18.25rem;
//     height: 18.188rem;
//   }
// `;

export const ProjectWrapper = styled.div`
  width: 22.25rem;
  /* Consider using min-height or height: auto for dynamic content */
  height: 24.188rem;
  border-radius: 1.563rem; /* 25px */
  margin: 0.25rem 0.25rem 1.25rem 0.25rem;

  /* --- Modern Glassmorphism Styles for the Card --- */
  background: rgba(46, 52, 69, 0.4); /* Original #2e3445 with 40% opacity */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Light, subtle border for the glass edge */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); /* Soft shadow to lift the card */
  /* --- End Glassmorphism Styles --- */

  /* Ensure content inside is positioned correctly if needed */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; // Example if you want to push stack to bottom */

  @media screen and (max-width: 768px) {
    width: 18.25rem;
    height: 18.188rem; /* Adjust height for smaller screens */
    backdrop-filter: blur(8px); /* Slightly less blur on mobile if needed */
    -webkit-backdrop-filter: blur(8px);
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  color: #2998ec;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;

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
  background-color: #16223a;
  border-radius: 0.5rem;
  color: #ffff;
  padding: 0.15rem 0.75rem;
  font-size: 16px;
  margin: 0.75rem;
  opacity: 50%;

  @media screen and (max-width: 768px) {
    padding: 0.15rem 0.75rem;
    font-size: 14px;
    margin: 0.25rem;
  }
`;

export const Tech = styled.small``;
