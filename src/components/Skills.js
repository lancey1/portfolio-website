import styles from "./Skills.module.css";


function Skills(props) {
  const skillsList = props.skills.map((skill) => <p>{skill.name}</p>)
  return (
    <div className={`${styles.container}`}>
      {skillsList}
    </div>
  );
}

export default Skills;
