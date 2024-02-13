/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import FHForm from "../../../../componets/form/FHForm";
import FHSelect from "../../../../componets/form/FHSelect";
import dayjs from "dayjs"
import {
  useAddOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllSemesterRegistrationQuery,
  useGetCourseFacultiesQuery,
} from "../../../../redux/features/admin/courseManagement";
import {
  useGetAcademicFacultiesQuery,
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicSemestersQuery,
} from "../../../../redux/features/admin/academicManagementApi";
import { Button, Col, Flex } from "antd";
import FHSelectWithWatch from "../../../../componets/form/FHSelectWithWatch";
import FHInput from "../../../../componets/form/FHInput";
import FHTimePicker from "../../../../componets/form/FHTimePicker";
import { toast } from "sonner";

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
  const { data: courses } = useGetAllCoursesQuery(undefined);
  const { data: courseFaculties } = useGetCourseFacultiesQuery(courseId,{skip:!courseId});
  const [addOfferedCourse] = useAddOfferedCourseMutation();

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

  const facultiesOptions = courseFaculties?.data?.faculties?.map((item) => ({
    label:
      `${item.name.firstName} ${item.name.middleName} ${item.name.lastName}` as string,
    value: item._id,
  }));


  /*  courses options */

  const coursesOptions = courses?.data?.map((item) => ({
    label: item.title,
    value: item._id,
  }));


  /* select days options */

 const days = [
   { name: "Saturday", value: "Sat" },
   { name: "Monday", value: "Mon" },
   { name: "Sunday", value: "Sun" },
   { name: "Tuesday", value: "Tue" },
   { name: "Wednesday", value: "Wed" },
   { name: "Thursday", value: "Thu" },
   { name: "Friday", value: "Fri" },
 ];

  const selectDays = days.map((day) => ({
    label:day.name,
    value:day.value
  }))

  const handleOfferedCourse = async (data:any) => {
    const toastId = toast.loading("offered course in processing ...");
    const formatStartTime = dayjs(data.startTime).format('HH:mm');
    const formatEndTime = dayjs(data.endTime).format('HH:mm');
   
    const offeredCourseData = {
      ...data,
      startTime:formatStartTime,
      endTime:formatEndTime,
      section:Number(data.section),
      maxCapacity:Number(data.maxCapacity)
    }
    console.log(offeredCourseData);
    try {
      const res = await addOfferedCourse(offeredCourseData);
      console.log(res);
      if (res.data.success) {
        toast.success("offered course created successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
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
               <FHSelect
              label="Select Days"
              name="days"
              mode="multiple"
              options={selectDays} />

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
