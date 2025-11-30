import type { TArray } from "../type/TypeArray";
import CourseComponent from "./CourseComponent";

interface CoursesProps {
  courses: TArray[];
}

function CoursesComponent({ courses }: CoursesProps) {
  return (
    <div className="courses">
      {courses.map((course, index) => (
        <CourseComponent key={index} course={course} />
      ))}
    </div>
  );
}

export default CoursesComponent;