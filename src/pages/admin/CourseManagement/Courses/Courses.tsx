/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Modal, Table, type TableColumnsType } from "antd";
import React, { FunctionComponent, useState } from "react";
import {
  useAddFacultyMutation,
  useGetAllCoursesQuery,
} from "../../../../redux/features/admin/courseManagement";
import FHForm from "../../../../componets/form/FHForm";
import FHSelect from "../../../../componets/form/FHSelect";
import { useGetAllFacultiesQuery } from "../../../../redux/features/admin/userManagementApi";

interface IIAcademicTableData {
  title: string;
}

const Courses: React.FunctionComponent = () => {
  const { data: allAcademicFaculties, isFetching } =
    useGetAllCoursesQuery(undefined);
  allAcademicFaculties;
  const tableData = allAcademicFaculties?.data?.map(
    ({
      _id,
      title,
      code,
      prefix,
    }: {
      _id: string;
      title: string;
      code: number;
      prefix: string;
    }) => ({
      key: _id,
      title,
      code: `${prefix}${code}`,
    })
  );

  const columns: TableColumnsType<IIAcademicTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "Action",
      render: (item) => {
        return <AssignFaculty facultyInfo={item} />;
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

/* this components is for modal */

const AssignFaculty: FunctionComponent = ({ facultyInfo }: any) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [assignFaculty] = useAddFacultyMutation();
  const { data: allFaculties } = useGetAllFacultiesQuery(undefined);
  const facultyOption = allFaculties?.data?.map((item) => ({
    value: item._id as string,
    label: `${item.name.firstName} ${item.name.middleName} ${item.name.lastName}`,
  }));
  const handleAssignFaculty = async (data: any) => {
    const facultyData = {
      courseId: facultyInfo.key,
      data,
    }
    const res = await assignFaculty(facultyData);

    console.log(res);
    if (res?.data?.success) {
      ("you re success");
    }
  };
  const showModal = () => {
    setIsOpenModal(true);
  };
  const handleCancel = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Assign Faculties"
        open={isOpenModal}
        onCancel={handleCancel}
        footer={null}
      >
        <FHForm onSubmit={handleAssignFaculty}>
          <FHSelect
            name="data"
            label="select faculty"
            mode="multiple"
            options={facultyOption}
          />

          <Button htmlType="submit">Submit</Button>
        </FHForm>
      </Modal>
    </>
  );
};

export default Courses;
