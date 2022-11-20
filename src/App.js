import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

function App() {
  return (
    //

    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/homepage" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
