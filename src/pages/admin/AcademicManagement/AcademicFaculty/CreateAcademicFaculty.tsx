/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import { useAddAcademicFacultyMutation } from "../../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { academicFacultySchema } from "../../../../schemas/academicFaculty.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FHForm from "../../../../componets/form/FHForm";
import FHInput from "../../../../componets/form/FHInput";

const CreateAcademicFaculty = () => {
  /* create academic faculty  */
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const handleAddFaculty = async (data: any) => {
    const toastId = toast.loading("add faculty is on processing ...");
    try {
      const res = await addAcademicFaculty({ name: data.facultyName });
      console.log(res);
      toast.success(res?.data?.message, {
        id: toastId,
      });
    } catch (error) {
      toast.error("something went wrong !", {
        id: toastId,
      });
    }
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>our academic faculty</h3>
      <Flex justify="center" align="center">
        <Col span={8}>
          <FHForm
            resolver={zodResolver(academicFacultySchema)}
            onSubmit={handleAddFaculty}
          >
            <FHInput name="facultyName" type="text" />
            <Button htmlType="submit">Add Faculty</Button>
          </FHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicFaculty;
