import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import {
  Bar,
  Image,
  SkillbarContainer,
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
                <SkillImageContainer>
                  <Image src={item.img} alt={item.alt} layout="cover" width="7.375rem" height="7.938rem" />
                </SkillImageContainer>
                <SkillbarContainer>
                  <Bar width={item.percentage} color={item.background} />
                </SkillbarContainer>
              </SkillWrapper>
          );
        })}
      </SkillsWrapper>
      <SkillsWrapper>
        {api.map((item, index) => {
          return (
              <SkillWrapper key={index}>
                <SkillImageContainer>
                  <Image src={item.img} alt={item.alt} layout="fill" width="17.5rem" height="5.5rem" />
                </SkillImageContainer>
              </SkillWrapper>
          );
        })}
      </SkillsWrapper>
      <SkillsWrapper>
        {backend.map((item, index) => {
          return (
              <SkillWrapper key={index}>
                <SkillImageContainer>
                  <Image src={item.img} alt={item.alt} layout="fill" width="7.375rem" height="7.938rem" />
                </SkillImageContainer>
                <SkillbarContainer>
                  <Bar width={item.percentage} color={item.background} />
                </SkillbarContainer>
              </SkillWrapper>
          );
        })}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default SkillsSection;
