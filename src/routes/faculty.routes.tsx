import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import MyStudents from "../pages/faculty/MyStudents";

export const FacultyPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "My Courses",
    path: "my-courses",
    element: <MyCourses />,
  },
  {
    path: "course/:registrationId/:courseId",
    element: <MyStudents />,
  },
];