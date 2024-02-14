// import { ReactNode } from "react";

import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment/AcademicDepartment";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment/CreateAcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty/AcademicFaculty";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty/CreateAcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/CourseManagement/Courses/Courses";
import CreateCourse from "../pages/admin/CourseManagement/Courses/CreateCourse";
import CreateOfferedCourse from "../pages/admin/CourseManagement/Courses/CreateOfferedCourses";
import CreateSemesterRegistration from "../pages/admin/CourseManagement/SemesterRegistrations/CreateSemesterRegistration";
import RegisteredSemesters from "../pages/admin/CourseManagement/SemesterRegistrations/RegisteredSemesters";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
import StudentData from "../pages/admin/UserManagement/StudentData";
import StudentDetails from "../pages/admin/UserManagement/StudentDetails";
// import { NavLink } from "react-router-dom";

/* admin paths 2 */
// interface IAdminRoutes {
//   path:string;
//   element:ReactNode;
// }

// interface ISidebarItem {
//   key:string,
//   label:ReactNode
// }

// interface IAdminSidebarRoutes {
//   key:string;
//   label:ReactNode;
//   children?:ISidebarItem[]

// }

export const AdminSidebarPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "academic faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "academic department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
      {
        name: "Create A. department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "All Students",
        path: "all-students",
        element: <StudentData />,
      },
      {
        path: "student-data/:id",
        element: <StudentDetails />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemesters />,
      },
      {
        name: "Create  Semester Registration",
        path: "create-semester-registration",
        element: <CreateSemesterRegistration />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Create Offered Course",
        path: "create-offered-course",
        element: <CreateOfferedCourse />,
      }
    
    ],
  },
];
