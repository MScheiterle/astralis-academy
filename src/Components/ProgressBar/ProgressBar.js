import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./../../firebase";
import "./style.scss";

function ProgressBar() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);

  return (
    <div class="ProgressBar">
      <div class="bar">
        <div class="bar-view active">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view active">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view active">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view active">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
        <div class="bar-view">
          <label class="bar-button"></label>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
