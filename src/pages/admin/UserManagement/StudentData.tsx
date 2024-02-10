import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";

import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagementApi";
import { IQueryParams, IStudent } from "../../../interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentData = () => {
  const [params, setParams] = useState<IQueryParams[]>([]);
  const [page, setPage] = useState<number>(0);

  const { data: allStudents, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 2 },
    { name: "sort", value: "id" },
    {name:"page",value:page},
    ...params,
  ]);

  const metaData = allStudents?.meta;

  type IStudentData = Pick<
    IStudent,
    "_id" | "id" | "gender" | "fullName" | "email">;
  console.log(allStudents);
  const tableData = allStudents?.data?.map(
    ({ _id, id, gender, email, fullName }: IStudentData) => ({
      fullName,
      key: _id,
      id,
      gender,
      email,
  
    })
  );

  const columns: TableColumnsType<IStudentData> = [
    {
      title: "Name",
      key: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Student Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
    },
    
    {
      title: "Student Email",
      key: "email",
      dataIndex: "email",
    },

    {
      title: "Action",
      key: "Action",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/student-data/${item.key}`}>
            <Button>Details</Button>
            </Link>
            <Button>Block</Button>
            <Button danger>Delete</Button>
          </Space>
        );
      },
    },
  ];

  const onChange: TableProps<IStudentData>["onChange"] = (
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
      <Table
        loading={isFetching}
        dataSource={tableData}
        columns={columns}
        onChange={onChange}
        pagination={false}
      />
      <Pagination current={page} onChange={(value) =>  setPage(value)} pageSize={metaData?.limit} total={metaData?.total} />
    </div>
  );
};

export default StudentData;
