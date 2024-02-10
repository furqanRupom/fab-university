/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Table, type TableColumnsType } from "antd";
import { useGetAllAcademicDepartmentQuery } from "../../../../redux/features/admin/academicManagementApi";

export interface IIAcademicTableData {
  title: string;
}

const AcademicDepartment = () => {
  const { data: allAcademicFaculties, isFetching } =
    useGetAllAcademicDepartmentQuery(undefined);
  console.log(allAcademicFaculties);
  const tableData = allAcademicFaculties?.data?.map(
    ({ _id, name }: { _id: string; name: string }) => ({
      key: _id,
      name,
    })
  );

  const columns: TableColumnsType<IIAcademicTableData> = [
    {
      title: "Department Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "Action",
      render: () => {
        return <Button danger>Delete</Button>;
      },
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "1.1rem" }}>
        Academic Faculty{" "}
      </h1>
      <Table loading={isFetching} dataSource={tableData} columns={columns} />
    </div>
  );
};

export default AcademicDepartment;
