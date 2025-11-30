
import React from "react";
import { coursesTitleArray } from "../titleArray";
import CourseItem from "./CourseItem";
import { type Course } from "../models/Course";
import "./CourseList.css";

const CourseList: React.FC = () => {
  const courses: Course[] = coursesTitleArray.map((title) => ({ title }));

  return (
    <div className="list-container">
      <h2>Courses</h2>
      <ul className="course-list">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </ul>
    </div>
  );
};

export default CourseList;