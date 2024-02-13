/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import * as React from "react";

import { toast } from "sonner";
import FHForm from "../../../../componets/form/FHForm";
import FHSelect from "../../../../componets/form/FHSelect";
import FHInput from "../../../../componets/form/FHInput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../../redux/features/admin/courseManagement";

const CreateCourses: React.FunctionComponent = () => {
  /* add or create  semester registration */

  const { data: courses } = useGetAllCoursesQuery(undefined);
  const [addCourse] = useAddCourseMutation();
  courses;
  const preRequisiteOptions = courses?.data?.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  const onSubmit = async (data: any) => {
    const courseData = {
      ...data,
      credits: Number(data.credits),
      code: Number(data.code),
      isDeleted: false,
      prerequisiteCourses: data?.prerequisiteCourses
        ? data?.prerequisiteCourses?.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };

    courseData;
    const toastId = toast.loading("semester registration on processing ...");

    try {
      const res = await addCourse(courseData);

      if (res.data.success) {
        toast.success("Successfully created new course !", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <h3
        style={{ padding: "0 3rem", textAlign: "center", fontSize: "1.4rem" }}
      >
        Create New Course
      </h3>

      <Flex justify="center" align="center">
        <Col span={8}>
          <FHForm onSubmit={onSubmit}>
            <FHInput name="title" label="Title" type="text" />
            <FHInput name="prefix" label="Prefix" type="text" />
            <FHInput name="credits" label="Credits" type="number" />
            <FHInput name="code" label="code" type="number" />

            <FHSelect
              label="prerequisiteCourses"
              name="prerequisiteCourses"
              mode="multiple"
              options={preRequisiteOptions}
            />
            <Button htmlType="submit"> Add Course</Button>
          </FHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateCourses;
