
import MyEnrolledCourses from "../pages/student/MyEnrolledCourses";
import OfferedCourses from "../pages/student/OfferedCourses";
import StudentDashboard from "../pages/student/StudentDashboard";

export const StudentPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "offered course",
    path: "offered-course",
    element: <OfferedCourses />,
  },
  {
    name: "My Enrolled Courses",
    path: "enrolled-course",
    element: <MyEnrolledCourses />,
  },
];
