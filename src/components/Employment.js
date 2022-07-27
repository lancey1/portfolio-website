import styles from "./Employment.module.css";

function Employment(props) {
  const experienceList = props.experience.map((experience) => (
    <div className={`${styles.container}`}>
      <h6>
        <b>{experience.name}</b>
      </h6>
      {experience.isCurrentRole && (
        <p>
          {experience.position} from {experience.startDate} to Current
        </p>
      )}
      {(!experience.isCurrentRole) && (
        <p>
          {experience.position} from {experience.startDate} to {experience.endDate}
        </p>
      )}
      {/* {experience.highlights.map((highlight) => (
        <li>{highlight}</li>
      ))} */}
    </div>
  ));

  return <div>{experienceList}</div>;
}

export default Employment;
