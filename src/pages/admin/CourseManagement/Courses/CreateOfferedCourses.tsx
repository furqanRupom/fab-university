import { useState } from "react";
import FHForm from "../../../../componets/form/FHForm";
import FHSelect from "../../../../componets/form/FHSelect";
import {
  useGetAllCoursesQuery,
  useGetAllSemesterRegistrationQuery,
} from "../../../../redux/features/admin/courseManagement";
import {
  useGetAcademicFacultiesQuery,
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicSemestersQuery,
} from "../../../../redux/features/admin/academicManagementApi";
import { useGetAllFacultiesQuery } from "../../../../redux/features/admin/userManagementApi";
import { Button, Col, Flex, Form, Row, TimePicker } from "antd";
import FHSelectWithWatch from "../../../../componets/form/FHSelectWithWatch";
import FHInput from "../../../../componets/form/FHInput";
import { Controller } from "react-hook-form";
import FHTimePicker from "../../../../componets/form/FHTimePicker";

interface IOfferedCoursesProps {}

const CreateOfferedCourse: React.FunctionComponent<
  IOfferedCoursesProps
> = () => {
  const [courseId, setCourseId] = useState<string>("");

  const { data: semesterRegistration } =
    useGetAllSemesterRegistrationQuery(undefined);
  const { data: academicDepartment } =
    useGetAllAcademicDepartmentQuery(undefined);
  const { data: academicSemester } = useGetAllAcademicSemestersQuery(undefined);
  const { data: academicFaculty } = useGetAcademicFacultiesQuery(undefined);
  const { data: faculties } = useGetAllFacultiesQuery(undefined);
  const { data: courses } = useGetAllCoursesQuery(undefined);

  /*  semester registration options */

  const semesterRegistrationOptions = semesterRegistration?.data?.map(
    (item) => ({
      label: `${item.academicSemester.name}- ${item.academicSemester.year}`,
      value: item._id,
    })
  );

  /* academic department options */

  const academicDepartmentOptions = academicDepartment?.data?.map((item) => ({
    label: item.name as string,
    value: item._id,
  }));

  /*  academic semester */

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    label: `${item.name} - ${item.code} - ${item.year}` as string,
    value: item._id,
  }));

  /*  academic Faculty options */

  const academicFacultyOptions = academicFaculty?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  /*  faculties */

  const facultiesOptions = faculties?.data?.map((item) => ({
    label:
      `${item.name.firstName} ${item.name.middleName} ${item.name.lastName}` as string,
    value: item._id,
  }));

  /*  courses options */

  const coursesOptions = courses?.data?.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const handleOfferedCourse = (data) => {
    ("adding offered course");
  console.log(data);
  };
  return (
    <>
      <h3>Create Offered Courses</h3>
      <Flex justify="center" align="center">
        <Col span={8}>
          <FHForm onSubmit={handleOfferedCourse}>
            <FHSelect
              label="Semester Registration"
              name="semesterRegistration"
              options={semesterRegistrationOptions}
            />
            <FHSelect
              label="Academic Semester"
              name="academicSemester"
              options={academicSemesterOptions}
            />
            <FHSelect
              label="Academic Department"
              name="academicDepartment"
              options={academicDepartmentOptions}
            />
            <FHSelectWithWatch
              label="courses"
              name="course"
              onValueChange={setCourseId}
              options={coursesOptions}
            />
            <FHSelect
             disabled={!courseId}
              label="Faculties"
              name="faculty"
              options={facultiesOptions}
            />

            <FHSelect
              label="Academic Faculty"
              name="academicFaculty"
              options={academicFacultyOptions}
            />

            <FHInput type="text" name="section" label="Section" />
            <FHInput type="number" name="maxCapacity" label="Max Capacity" />

            <FHTimePicker name="startTime" label="Start Time" />
            <FHTimePicker name="endTime" label="End Time" />

            <Button htmlType="submit">Submit</Button>
          </FHForm>
        </Col>
      </Flex>
    </>
  );
};

export default CreateOfferedCourse;
