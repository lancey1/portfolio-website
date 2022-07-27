import styles from "./Education.module.css";

function Education(props) {
  const educationList = props.education.map((school) => (
    <div className={`${styles.container}`}>
      <h6><b>{school.institution}</b></h6>
      <p>
        {school.studyType} in {school.area} received on {school.endDate}
      </p>
    </div>
  ));
  return <div>{educationList}</div>;
}

export default Education;
