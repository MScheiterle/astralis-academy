import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import "./style.scss";

function Course(props) {
  const poly = (
    <div class={props.shape}>
      <div></div>
      <div></div>
      <div></div>
      {props.shape == "octa" ? <div></div> : ""}
      {props.shape == "deca" ? (
        <>
          <div></div>
          <div></div>
        </>
      ) : (
        ""
      )}
    </div>
  );

  let polys = [];

  for (let i = 0; i < props.tier; i++) {
    polys.push(poly);
  }

  return (
    <div
      class={
        "button" +
        (props.status == "active" ? " active" : ((props.status == "done" ? " done" : (props.status == "upcoming" ? " upcoming" : "")))) +
        (props.shape == "hexa" ? " Hexagon" : "") +
        (props.shape == "octa" ? " Octagon" : "") +
        (props.shape == "deca" ? " Decagon" : "")
      }
      style={props.style}
    >
      {polys}
      <span>{props.inner}</span>
      <div class="glow"></div>
    </div>
  );
}

function Courses() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const courseData = {
    0: {
      shape: "hexa",
      subject: "Addition",
      tier: 1,
      fontAwesomeString: "fa-solid fa-plus",
      status: "active",
    },
    1: {
      shape: "hexa",
      subject: "Subtraction",
      tier: 2,
      fontAwesomeString: "fa-solid fa-minus",
      status: "active",
    },
    2: {
      shape: "hexa",
      subject: "Multiplication",
      tier: 3,
      fontAwesomeString: "fa-solid fa-multiply",
      status: "active",
    },
    3: {
      shape: "hexa",
      subject: "Division",
      tier: 4,
      fontAwesomeString: "fa-solid fa-divide",
      status: "active",
    },
  };

  let courses = [<div id="starting_point" />];

  let i = 0;

  for (const [k, v] of Object.entries(courseData)) {
    courses.push(
      <Course
        shape={v.shape}
        status={v.status}
        tier={v.tier}
        inner={<FontAwesomeIcon icon={v.fontAwesomeString} />}
        style={{ top: "100px", left: (i + 0.5) * 2 + "0%" }}
      />
    );
    i++;
  }

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [navigate, user, loading]);

  return <div className="courses">{courses}</div>;
}

export default Courses;
