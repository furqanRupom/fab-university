import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import { routesGenerator } from "../utils/routesGenerator";
import { AdminSidebarPaths } from "./admin.routes";
import { FacultyPaths } from "./faculty.routes";
import { StudentPaths } from "./student.routes";
import Login from "../pages/Login";
import {ProtectedRoute} from "../private/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(AdminSidebarPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(FacultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App />
      </ProtectedRoute>
    ),
    children: routesGenerator(StudentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/need-password-change",
    element: <ChangePassword />,
  },
  {
    path: "/register",
    element: <About />,
  },
]);

export default router;
