import { NavLink } from "react-router-dom";
import {
  IAdminSidebarRoutes,
  IRoutePath,
} from "../interfaces/routes.interface";

export const sidebarGenerator = (items: IRoutePath[], role: string) => {
  const navLinkPaths = items.reduce((acc: IAdminSidebarRoutes[], item) => {
    if (item.path && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => {

          if(child.name){
            return {
              key: child.name, // Use an empty string or provide a default value
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };

          }
        }),
      });
    }

    return acc;
  }, []);

  return navLinkPaths;
};
