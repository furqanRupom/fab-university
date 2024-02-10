/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import {
  useAddAcademicDepartmentMutation,
  useGetAcademicFacultiesQuery,
} from "../../../../redux/features/admin/academicManagementApi";
import FHForm from "../../../../componets/form/FHForm";
import FHInput from "../../../../componets/form/FHInput";
import FHSelect from "../../../../componets/form/FHSelect";
import { academicDepartmentSchema } from "../../../../schemas/academicDepartment.schema";

interface IAcademicDepartment {
  name: string;
  academicFaculty: string;
}

const CreateAcademicDepartment = () => {
  /* add or create academic semester */

  const { data: allAcademicFaculties } =
    useGetAcademicFacultiesQuery(undefined);

  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const facultyOptions = allAcademicFaculties?.data.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  const handleAcademicDepartment = async (data: IAcademicDepartment) => {
    const toastId = toast.loading(
      "academic department added on processing ..."
    );

    try {
      const res = await addAcademicDepartment(data);
      console.log(res);
      toast.success(res?.data?.message as string, { id: toastId });
    } catch (error) {
      toast.error(error?.data?.message as string, { id: toastId });
    }
  };
  return (
    <div>
      <h3
        style={{ padding: "0 3rem", textAlign: "center", fontSize: "1.4rem" }}
      >
        Create Academic Department
      </h3>

      <Flex justify="center" align="center">
        <Col span={8}>
          <FHForm
            resolver={zodResolver(academicDepartmentSchema)}
            onSubmit={handleAcademicDepartment as any}
          >
            <FHInput
              name="name"
              label="Name of Academic Department"
              type="text"
            />
            <FHSelect
              name="academicFaculty"
              label="Choose Academic Faculty"
              options={facultyOptions}
            />

            <Button htmlType="submit"> Add Academic Semester</Button>
          </FHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicDepartment;
