import React from "react";
import type { Icourse } from "../module/Course";
import { coursesAndDurationArray } from "./TitleCourses";
import "./CoursesComponent.css";

const CourseList: React.FC = () => {
  return (
    <div className="course-list">
      {coursesAndDurationArray.map((course: Icourse, index: number) => (
        <div key={index}>
          <h2>{course.title}</h2>
          <p>Duration: {course.monthDuration} months</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;





