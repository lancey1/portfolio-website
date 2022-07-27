import React from "react";
import styles from "./Home.module.css";

function Home(props) {
  const { user } = props;

  return (
    <div className={`${styles.container}`}>
      <div>
        <img
          className={`${styles.img}`}
          src={user.basics.image}
          alt="avatar"
        ></img>
      </div>
      <div className={`${styles.basics}`}>
        <h2>{user.basics.name}</h2>
        <h4 className={`${styles.handle}`}>
          <a
            href={`https://gitconnected.com/${user.basics.username}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            @{user.basics.username}
          </a>
        </h4>
        <p>
          {user.basics.label} from {user.basics.region}
        </p>
        {/* <p>{user.basics.yearsOfExperience} year of experience as a developer</p> */}
        <p>{user.basics.headline}</p>
        <p>{user.basics.summary}</p>
      </div>
    </div>
  );
}

export default Home;
