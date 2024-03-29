import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { AdminSidebarPaths } from "../../routes/admin.routes";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../hooks/hooks";
import {
  IUser,
  useCurrentUserToken,
} from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const Sidebar = () => {
    const UserRole = {
      ADMIN: "admin",
      FACULTY: "faculty",
      STUDENT: "student",
    };

  let user;
  const token = useAppSelector(useCurrentUserToken);
  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as IUser)?.role) {
    case UserRole.ADMIN:
      sidebarItems = sidebarGenerator(AdminSidebarPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sidebarItems = sidebarGenerator(FacultyPaths, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      sidebarItems = sidebarGenerator(StudentPaths, UserRole.STUDENT);
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ position: "sticky", top: "0", left: "0" }}
    >
      <div>
        <h1 style={{ color: "white", padding: "1.1rem", fontSize: "1.5rem" }}>
          <span style={{ color: "orange" }}>Fab</span> University
        </h1>
      </div>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        items={sidebarItems as any}
      />
    </Sider>
  );
};

export default Sidebar;
