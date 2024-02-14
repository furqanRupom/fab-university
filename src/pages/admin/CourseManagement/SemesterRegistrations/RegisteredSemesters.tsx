/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import  React, { useState } from "react";
import { useGetAllSemesterRegistrationQuery, useUpdateRegisteredSemesterMutation } from "../../../../redux/features/admin/courseManagement";
import moment from "moment";

interface IRegisteredSemestersProps {}

interface ISemesterRegistrationTableData<I> {
  _id?: string;
  status: string;
  startDate: string;
  endDate: string;
  academicSemester?: I;
}

const RegisteredSemesters: React.FunctionComponent<
  IRegisteredSemestersProps
> = () => {


  const [semesterId,setSemesterId] = useState<string>("");
  const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation()


  /* dropdown menu */

  

  const handleDropDownMenu = async(data) => {
        const updateData = {
          id:semesterId,
          data:{
            status:data.key
          }
        }
          
    await  updateRegisteredSemester(updateData)
 


  }

  const items = [
    {
      label: "ongoing",
      key: "ONGOING",
    },
    {
      label: "upcoming",
      key: "UPCOMING",
    },
    {
      label: "ended",
      key: "ENDED",
    },
  ];

  
  const menuProps = {
    items,
    onClick : handleDropDownMenu
  }



  const { data: allSemesterRegistration, isFetching } =
    useGetAllSemesterRegistrationQuery([]);
  const tableData = allSemesterRegistration?.data?.map(
    ({
      _id,
      status,
      startDate,
      endDate,
      academicSemester,
    }: ISemesterRegistrationTableData<any>) => ({
      key: _id,
      name: `${academicSemester.name} - ${academicSemester.year}`,
      status,
      startDate: moment(startDate).format("MMMM"),
      endDate: moment(endDate).format("MMMM"),
    })
  );

  const columns: TableColumnsType<ISemesterRegistrationTableData<any>> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "startDate",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "endDate",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "Action",
      render: (item) => {
        return (
          <>
            <Button danger>Delete</Button>
            <Dropdown trigger={['click']} menu={menuProps} >
              <Button onClick={() => setSemesterId(item.key)} color="green">Update</Button>
            </Dropdown>
          </>
        );
      },
    },
  ];
    console.log(semesterId);
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "1.1rem" }}>
        Registered Semester{" "}
      </h1>
      <Table loading={isFetching} dataSource={tableData} columns={columns} />
    </div>
  );
};

export default RegisteredSemesters;
