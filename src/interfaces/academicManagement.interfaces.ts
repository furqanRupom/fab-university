import React from "react";

export interface IAcademicManagementData {
  code: string;
  createdAt: string;
  endMonth: string;
  name: string;
  startsMonth: string;
  updatedAt: string;
  year: string;
  __v: number;
  _id: string;
}

export interface ITableData {
  _id?:string
  name: string;
  year: string;
  startsMonth: string;
  endMonth: string;
}


export interface IQueryParams {
  name: string;
  value: boolean | React.Key;
}