import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import courseData from "../../courseData.json";
import "./style.scss";

function Course(props) {
  const poly = (
    <div class={props.shape}>
      <div></div>
      <div></div>
      <div></div>
      {props.shape === "octa" ? (
        <div></div>
      ) : props.shape === "deca" ? (
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
        (props.status === "active"
          ? " active"
          : props.status === "done"
          ? " done"
          : props.status === "upcoming"
          ? " upcoming"
          : "") +
        (props.shape === "hexa"
          ? " Hexagon"
          : props.shape === "octa"
          ? " Octagon"
          : props.shape === "deca"
          ? " Decagon"
          : "")
      }
      style={props.style}
    >
      {polys}
      <span>{props.inner}</span>
      <div class="glow"></div>
    </div>
  );
}

function StartingPoint(props) {
  const startingPoint = <div style={props.style} id="starting_point_hex" />;

  return startingPoint;
}

function Courses() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  let courses = [];

  let i = 0;
  for (const [k, v] of Object.entries(courseData)) {
    courses.push(
      k.includes("Starting_Point") ? (
        <StartingPoint shape={v.shape} style={{ top: "50%", left: "50px" }} />
      ) : (
        <Course
          shape={v.shape}
          status={v.status}
          tier={v.tier}
          inner={
            v.fontAwesomeString ? (
              <FontAwesomeIcon icon={v.fontAwesomeString} />
            ) : (
              v.altSymbol
            )
          }
          style={{ top: "50%", left: i + 0 + "0%" }}
        />
      )
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
