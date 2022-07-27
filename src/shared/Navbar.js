import { NavLink, useNavigate } from "react-router-dom";
import styles from './Navbar.module.css'
import logo from '../images/logo2.png'
function Navbar() {
  let navigate = useNavigate();
  const resume= 'https://resume.creddle.io/resume/cfbzubtuc3r?fbclid=IwAR3mn-8000nlPetFSaIK0rWo4NC0IF4aKZYjlga6cOpTVRNADLwqQlU_AqY'
  return (
  <div className={`${styles.navbar}`}>
    <div className={`${styles.container}`}>
      <div>
        <img onClick= {()=>navigate('/')} className= {`${styles.logo}`} src={logo} alt="logo"/>
      </div>
      <ul className={`${styles.links}`}>
        <li><NavLink to="projects">Projects</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
        <li><a title="Lance's Résumé" href={resume} target="_blank" rel ="noreferrer"> Résumé</a> </li>
        <li className ={`${styles.github}`}><a title="Lance's GitHub" href='https://github.com/lancey1' target="_blank" rel ="noreferrer"> <i className="fa-brands fa-github fa-xl"></i> </a> </li>
        <li className ={`${styles.linkedin}`}><a title="Lance's Linkedin" href='https://www.linkedin.com/in/lanceyu1010' target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin-in fa-xl"></i> </a> </li>
      </ul>
    </div>
  </div>
  );
}
export default Navbar;
