import { IPathRoutes, IRoutePath } from "../interfaces/routes.interface";




export const routesGenerator = (items: IRoutePath[]) => {
  const routes = items.reduce((acc: IPathRoutes[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc?.push({
          path: child.path,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
