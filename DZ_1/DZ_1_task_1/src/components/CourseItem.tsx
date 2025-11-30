
import React from "react";
import {type Course} from "../models/Course";
import "./CourseItem.css";

interface Props {
  course: Course;
}

const CourseItem: React.FC<Props> = ({ course }) => {
  return <li className="course-item">{course.title}</li>;
};

export default CourseItem;