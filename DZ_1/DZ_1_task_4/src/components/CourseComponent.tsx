import type { TArray } from "../type/TypeArray";

interface CourseProps {
  course: TArray;
}

function CourseComponent({ course }: CourseProps) {
  return (
    <div className="course">
      <h2>{course.title}</h2>
      <p>Month duration: {course.monthDuration}</p>
      <p>Hour duration: {course.hourDuration}</p>
      <ul>
        {course.modules.map((mod, i) => (
          <li key={i}>{mod}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseComponent;