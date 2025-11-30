import React from "react";
import CourseList from "./components/CoursesComponent";

const App: React.FC = () => {
  return (
    <div className="list-container">
      <h1>My Homework Project</h1>
      <CourseList />
    </div>
  );
};

export default App;

