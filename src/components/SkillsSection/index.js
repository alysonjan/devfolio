import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import {
  Image,
  SkillImageContainer,
  SkillsContainer,
  SkillsWrapper,
  SkillWrapper,
} from "./skillsStyles";

const SkillsSection = ({ id, title, frontend, api, backend }) => {
  return (
    <SkillsContainer id={id}>
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <SkillsWrapper>
        {frontend.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer width="8rem" height="8rem">
                <Image src={item.img} alt={item.alt} />
              </SkillImageContainer>
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
      <SkillsWrapper>
        {api.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer width="19.5rem" height="5.5rem" isApi>
                <img
                  src={item.img}
                  alt={item.alt}
                  style={{ pointerEvents: "none" }}
                />
              </SkillImageContainer>
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
      <SkillsWrapper>
        {backend.map((item, index) => {
          return (
            <SkillWrapper key={index}>
              <SkillImageContainer width="8rem" height="7.8rem" isBackend>
                <Image src={item.img} alt={item.alt} />
              </SkillImageContainer>
              {/* <SkillbarContainer>
                  <Bar width={item.percentage} color={item.background} />
                </SkillbarContainer> */}
            </SkillWrapper>
          );
        })}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
