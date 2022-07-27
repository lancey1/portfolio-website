import React, {useState,useRef,useEffect} from "react";
import styles from "./ProfileCard.module.css";
import Education from "./Education";
import Employment from "./Employment";
import Skills from "./Skills"

function ProfileCard(props) {
  const { user } = props;
	const [displaySkills, setDisplaySkills] = useState(true)
	const [displayEducation, setDisplayEducation] = useState(false)
	const [displayEmployment, setDisplayEmployment] = useState(false)
  
	const bottomRef = useRef(null);

	useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [displaySkills,displayEmployment,displayEducation]);

	const clickSkillsHandler = () => {
		setDisplaySkills(prev => !prev)
		setDisplayEducation(false)
		setDisplayEmployment(false)

	}
	const clickEducationHandler = () => {
		setDisplaySkills(false)
		setDisplayEducation(prev => !prev)
		setDisplayEmployment(false)
	}
	const clickEmploymentHandler = () => {
		setDisplaySkills(false)
		setDisplayEducation(false)
		setDisplayEmployment(prev => !prev)

	}
 
  return (
    <div className={`${styles.container}`}>
			<div>
      <img className={`${styles.img}`} src={user.basics.image} alt="avatar"></img>
			</div>
      <div className={`${styles.basics}`}>
        <h2>{user.basics.name}</h2>
        <h4 className= {`${styles.handle}`}>
          <a
            href={`https://gitconnected.com/${user.basics.username}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            @{user.basics.username}
          </a>
        </h4>
        <p>{user.basics.label} from {user.basics.region}</p>
        {/* <p>{user.basics.yearsOfExperience} year of experience as a developer</p> */}
        <p>{user.basics.headline}</p>
        <p>{user.basics.summary}</p>
      </div>
      <div className={`${styles.resume}`}>
			<ul>
				<li onClick={clickSkillsHandler}>Skills</li>
	
				{displaySkills && (<Skills skills={user.skills}/>)}

				<li onClick= {clickEmploymentHandler}>Employment</li>
	
				{displayEmployment && <Employment experience={user.work}/>}

				<li onClick= {clickEducationHandler}>Education</li>
		
				{displayEducation && <Education education = {user.education}/>}

			</ul>
			<div ref={bottomRef} />
			</div>
    </div>
  );
}

export default ProfileCard;
