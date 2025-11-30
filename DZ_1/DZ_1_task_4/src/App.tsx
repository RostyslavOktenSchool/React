import  coursesArray  from "./CoursesArray";
import CoursesComponent from "./components/CoursesComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Courses</h1>
      <CoursesComponent courses={coursesArray} />
    </div>
  );
}

export default App;

