import { Fragment } from "react";
import ControlledCarousel from "../components/Project-Carousel";

function Projects(props) {
  return (
    <Fragment>
      <ControlledCarousel projects={props.user.projects} />
    </Fragment>
  );
}

export default Projects;
