// import { ReactNode } from "react";

import AcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment/AcademicDepartment";
import CreateAcademicDepartment from "../pages/admin/AcademicManagement/AcademicDepartment/CreateAcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty/AcademicFaculty";
import CreateAcademicFaculty from "../pages/admin/AcademicManagement/AcademicFaculty/CreateAcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/AcademicManagement/AcademicSemester/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/UserManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "../pages/admin/UserManagement/CreateStudent";
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
        name: "Offered Course",
        path: "offered-course",
        element: <CreateStudent />,
      },
    ],
  },
];

//  const adminPaths = [

//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
// ];


// export const navLinkPaths = adminSidebarPaths.reduce((acc:IAdminSidebarRoutes[], item) => {

//    if(item.path && item.element){
//          acc.push({
//            key: item.name,
//            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,

//          })
//    }
//    if(item.children){
//     acc.push({
//       key:item.name,
//       label:item.name,
//       children:item.children.map((child) => ({
//          key:child.name,
//          label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//       }))
//     })
//    }

//    return acc
// },[])


// export const adminPaths = adminSidebarPaths.reduce((acc:IAdminRoutes[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc?.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

