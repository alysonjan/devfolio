import React from "react";
import { Line, Title, TitleContainer } from "../shared/SharedStyles";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectsContainer,
  ProjectTitle,
  ProjectWrapper,
  StackContainer,
  StackWrapper,
  Tech,
} from "./projectStyles";

const ProjectSection = ({ id, title, projects }) => {
  return (
    <ProjectsContainer id={id}>
      <TitleContainer>
        <Title>{title}</Title>
        <Line />
      </TitleContainer>
      <ProjectContainer>
        {projects.map((item, index) => {
          return (
            <ProjectWrapper key={index}>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDescription>{item.description}</ProjectDescription>
              <StackContainer>
                {item.stack.map((tech, index) => (
                  <StackWrapper key={index}>
                    <Tech>{tech}</Tech>
                  </StackWrapper>
                ))}
              </StackContainer>
            </ProjectWrapper>
          );
        })}
      </ProjectContainer>
    </ProjectsContainer>
  );
};

export default ProjectSection;
