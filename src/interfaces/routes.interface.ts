/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";


export interface IRoutePath {
  name: string;
  path?: string;
  element?: JSX.Element;
  children?: IPathRoutes[];
}

export interface IAdminRoutes {
  path: string;
  element: ReactNode;
}

export interface IPathRoutes {
  name?: string;
  path: string;
  element: JSX.Element;
}


export interface IAdminRoutes {
  path: string;
  element: ReactNode;
}


type ISidebarItem =
 {
  key?: string;
  label?: ReactNode;
 } | undefined



export interface IAdminSidebarRoutes{
  key?: string;
  label?: ReactNode;
  children?: ISidebarItem[] ;
}


