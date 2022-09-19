import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Project-Carousel.module.css";
import { useMediaQuery } from "react-responsive";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const projectList = props.projects.map((project) => {
    return (
      <Carousel.Item className={`${styles.carouselItem}`}>
        {isDesktop && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <img
              className={`${styles.carouselImage}`}
              src={project.images[0].resolutions.desktop.url}
              alt={project.displayName}
            />
          </a>
        )}
        {isTablet && (
          <img
            className={`${styles.carouselImage}`}
            src={project.images[0].resolutions.desktop.url}
            alt={project.displayName}
          />
        )}
        <div className={`${styles.carouselCaption}`}>
          <a
            href={project.githubUrl}
            title={`to ${project.displayName} repo`}
            target="_blank"
            rel="noreferrer"
          >
            <b>{project.displayName}</b>
          </a>
          <p>{project.summary}</p>
          <div>
            <b>Tech Stack</b>
          </div>
          <div className={`${styles.carouselLi}`}>
            {project.languages.map((language) => (
              <p className={`${styles.carouselLis}`}>{language}</p>
            ))}
          </div>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <div className={`${styles.container}`}>
      <Carousel
        variant="dark"
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
      >
        {projectList}
      </Carousel>
    </div>
  );
}
