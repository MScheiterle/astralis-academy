import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import "./style.scss";

function Course(props) {

  let hex = (
    <div class="hex">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  let hexs = [];

  for (let i = 0; i < props.tier; i++) {
    hexs.push(hex);
  }

  return (
    <div
      class={
        "button" +
        (props.active ? " active" : "") +
        (props.done ? " done" : "") +
        (props.upcoming ? " upcoming" : "")
      }

      style={props.style}
    >
      {hexs}
      <span>{props.inner}</span>
      <div class="glow"></div>
    </div>
  );
}

function Courses() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const courseList = [];

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="courses">
      <Course
        active={true}
        tier={4}
        inner={<FontAwesomeIcon icon="fa-solid fa-divide" />}
        style={{ top: "50%", left: "50%" }}
      />
      <Course
        upcoming={true}
        tier={1}
        inner={<FontAwesomeIcon icon="fa-solid fa-divide" />}
        style={{ top: "50%", left: "40%" }}
      />
      <Course
        upcoming={true}
        tier={1}
        inner={<FontAwesomeIcon icon="fa-solid fa-multiply" />}
        style={{ top: "50%", left: "30%" }}
      />
      <Course
        upcoming={true}
        tier={1}
        inner={<FontAwesomeIcon icon="fa-solid fa-minus" />}
        style={{ top: "50%", left: "20%" }}
      />
      <Course
        active={true}
        tier={1}
        inner={<FontAwesomeIcon icon="fa-solid fa-plus" />}
        style={{ top: "50%", left: "10%" }}
      />
    </div>
  );
}

export default Courses;
