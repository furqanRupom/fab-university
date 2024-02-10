/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Button, Table, type TableColumnsType, type TableProps } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../../redux/features/admin/academicManagementApi";
import {
  IAcademicManagementData,
  IQueryParams,
} from "../../../../interfaces/academicManagement.interfaces";

type IITableData = Pick<
  IAcademicManagementData,
  "name" | "startsMonth" | "endMonth" | "year"
>;
const AcademicSemester = () => {
  const [params, setParams] = useState<IQueryParams[]>([]);
  const { data: allSemesters, isFetching } =
    useGetAllAcademicSemestersQuery(params);
  console.log(allSemesters);
  const tableData = allSemesters?.data?.map(
    ({ _id, name, startsMonth, endMonth, year }) => ({
      key: _id,
      name,
      startsMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<IITableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "autumn",
        },
        {
          text: "Summer",
          value: "summer",
        },
        {
          text: "Fall",
          value: "fall",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },

    {
      title: "Start Month",
      key: "startsMonth",
      dataIndex: "startsMonth",
      filters: [
        {
          text: "January",
          value: "january",
        },
        {
          text: "February",
          value: "february",
        },
        {
          text: "March",
          value: "march",
        },
        {
          text: "April",
          value: "april",
        },
        {
          text: "May",
          value: "may",
        },
        {
          text: "June",
          value: "june",
        },
        {
          text: "July",
          value: "july",
        },
        {
          text: "August",
          value: "august",
        },

        {
          text: "September",
          value: "september",
        },
      ],
      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      title: "Action",
      key: "Action",
      render: () => {
        return <Button danger>Delete</Button>;
      },
    },
  ];

  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //   },
  //   {
  //     key: "4",
  //     name: "Jim Red",
  //     age: 32,
  //     address: "London No. 2 Lake Park",
  //   },
  // ];
  const onChange: TableProps<IITableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: IQueryParams[] = [];

      filters.name?.forEach((item) =>
        /* Use parentheses to implicitly return the object */
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        /* Use parentheses to implicitly return the object */
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "1.2rem" }}>
        Academic Semester
      </h1>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
    </div>
  );
};

export default AcademicSemester;
