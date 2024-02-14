import { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAllEnrolledCoursesQuery,
  useUpdateMarksMutation,
} from "../../redux/features/faculty/facultyManagementApi";
import { Button, Modal, Table } from "antd";
import FHForm from "../../componets/form/FHForm";
import FHSelect from "../../componets/form/FHSelect";
import FHInput from "../../componets/form/FHInput";
import { toast } from "sonner";

const MyStudents: FunctionComponent = () => {
  const { registrationId, courseId } = useParams();
  const { data: facultyCoursesData, isFetching } =
    useGetAllEnrolledCoursesQuery([
      { name: "semesterRegistration", value: registrationId },
      { name: "course", value: courseId },
    ]);
  console.log(facultyCoursesData);

  const studentData = facultyCoursesData?.data.map((item) => ({
    key: item.student._id,
    name: item.student.fullName,
    email: item.student.email,
    semesterRegistration: item.semesterRegistration._id,
    student: item.student._id,
    offeredCourse: item.student._id,
  }));

  const columns = [
    {
      title: "name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "Action",
      render: (item) => {
        return <StudentUpdateMarks studentInfo={item} />;
      },
    },
  ];

  return (
    <>
      <h3>My students</h3>
      <Table loading={isFetching} dataSource={studentData} columns={columns} />
    </>
  );
};

const StudentUpdateMarks: FunctionComponent = ({ studentInfo }: any) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [updateMarks] = useUpdateMarksMutation();
  
  const { student, semesterRegistration, offeredCourse } = studentInfo;

  const showModal = () => {
    setIsOpenModal(true);
  };
  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const handleUpdateMarks = async (data) => {
    const updateMarksInfo = {
      student,
      semesterRegistration,
      offeredCourse,
      courseMarks: {
        classTest1: Number(data.classTest1),
        midTerm: Number(data.midTerm),
        classTest2: Number(data.classTest2),
        finalTerm: Number(data.finalTerm),
      },
    };

    try {
      const res = await updateMarks(updateMarksInfo);

      if (res.data.success) {
        toast.success("marks updated successfully ");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <Button onClick={showModal}>update marks</Button>
      <Modal
        title="Update Marks"
        open={isOpenModal}
        onCancel={handleCancel}
        footer={null}
      >
        <FHForm onSubmit={handleUpdateMarks}>
          <FHInput name="classTest1" label="class Test 1" type="number" />
          <FHInput name="midTerm" label="Mid Term" type="number" />
          <FHInput name="classTest2" label="class Test 2" type="number" />
          <FHInput name="finalTerm" label="Final Term" type="number" />

          <Button htmlType="submit">Submit</Button>
        </FHForm>
      </Modal>
    </>
  );
};

export default MyStudents;
