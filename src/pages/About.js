import { Fragment } from "react";
import ProfileCard from "../components/ProfileCard";
function About(props) {
  const {user} = props
  return (
    <Fragment>
    <ProfileCard user={user}/>
    </Fragment>
  );
}

export default About;
