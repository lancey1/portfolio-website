import ControlledCarousel from "../components/Project-Carousel";
import styles from "./Projects.module.css";

function Projects(props) {
  console.log(props.user.projects)
  return (
    <div className={`${styles.projects}`}>
      <h1>My Projects</h1>
      <ControlledCarousel projects={props.user.projects} />
    </div>
  );
}

export default Projects;
