import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import FHForm from "../../../componets/form/FHForm";
import FHInput from "../../../componets/form/FHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import FHDatePicker from "../../../componets/form/FHDatePicker";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllAcademicSemestersQuery,
} from "../../../redux/features/admin/academicManagementApi";
import FHSelect from "../../../componets/form/FHSelect";
import { bloodGroups, genders } from "../../../constants/global.constant";
import { useCreateStudentMutation } from "../../../redux/features/admin/userManagementApi";
import { toast } from "sonner";

const CreateStudent = () => {
  const defaultStudentValues = {
    name: {
      firstName: "raha",
      middleName: "Taha",
      lastName: "Smith",
    },
    gender: "male",
    school: "Example High School",
    email: "Amra@example1.com",
    dateOFBirth: "30 August 2002",
    contactNo: "1234567890",
    emergencyContactNo: "9876543210",
    bloodGroup: "O+",
    presentAddress: "123 Main St, City",
    permanentAddress: "456 Oak St, Town",
    guardian: {
      fatherName: "Mr. Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "1112223333",
      motherName: "Mrs. Doe",
      motherOccupation: "Doctor",
      motherContactNo: "4445556666",
    },
    localGuardian: {
      name: "Local Guardian",
      occupation: "Teacher",
      contactNo: "7778889999",
    },
    admissionSemester: "65bc02e4e1fe5d8ccca7796a",
    academicDepartment: "65bc0070d3bac51a59198c5a",
  };

  /* create student  */

  const { data: allAdmissionSemesters, isLoading: semesterLoading } =
    useGetAllAcademicSemestersQuery(undefined);
  const { data: allAcademicDepartment } = useGetAllAcademicDepartmentQuery(
    undefined,
    { skip: semesterLoading }
  );
  const [addStudent] = useCreateStudentMutation();

  /* academic semester options */

  const semesterOptions = allAdmissionSemesters?.data.map((item) => ({
    label: `${item.name} - ${item.year}`,
    value: item._id,
  }));

  /* academic department options  */

  const departmentOptions = allAcademicDepartment?.data.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  /* blood group options  */
  const bloodGroupOptions = bloodGroups.map((item) => ({
    label: item,
    value: item,
  }));

  /* genders group options */

  const gendersOptions = genders.map((item) => ({
    label: item,
    value: item,
  }));

  const handleCreateStudent: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    data;
    const studentData = {
      password: "student123",
      student: data,
    };
    formData.append("file", data.Picture);
    formData.append("data", JSON.stringify(studentData));

    try {
      const res = await addStudent(formData);
      res;
    } catch (error) {
      toast.error("Something went wrong !");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Student </h1>

      <Row>
        <Col span={24}>
          <FHForm onSubmit={handleCreateStudent}>
            <Divider>Personal Info</Divider>
            <Row gutter={8}>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput label="First Name" type="text" name="name.firstName" />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Middle Name"
                  type="text"
                  name="name.middleName"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput label="Last Name" type="text" name="name.lastName" />
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput label="Email" type="text" name="email" />
              </Col>
              <Col span={24} style={{ width: "100%" }} lg={{ span: 8 }}>
                <FHDatePicker label="Date of birth" name="dateOFBirth" />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <Controller
                  name="Picture"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item label="picture">
                      <Input
                        value={value?.fileName}
                        type="file"
                        {...field}
                        onChange={(e) => onChange(e?.target?.files?.[0])}
                      />
                    </Form.Item>
                  )}
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHSelect
                  name="gender"
                  label="Choose your gender"
                  options={gendersOptions}
                />
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <FHSelect
                  name="bloodGroup"
                  label="Choose your blood group"
                  options={bloodGroupOptions}
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput label="School" type="text" name="school" />
              </Col>
            </Row>

            <Divider>Address Info</Divider>

            <Row gutter={8}>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput label="Contact Number" type="text" name="contactNo" />
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Emergency Contact Number"
                  type="text"
                  name="emergencyContactNo"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Present Address"
                  type="text"
                  name="presentAddress"
                />
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Permanent Address"
                  type="text"
                  name="permanentAddress"
                />
              </Col>
            </Row>

            <Divider>Guardian Info</Divider>

            <Row gutter={8}>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Father name"
                  type="text"
                  name="guardian.fatherName"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Father occupation"
                  type="text"
                  name="guardian.fatherOccupation"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Father contact Number"
                  type="text"
                  name="guardian.fatherContactNo"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Mother name"
                  type="text"
                  name="guardian.motherName"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Mother occupation"
                  type="text"
                  name="guardian.motherOccupation"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Mother Contact Number"
                  type="text"
                  name="guardian.motherContactNo"
                />
              </Col>
            </Row>

            <Divider>Local Guardian Info</Divider>

            <Row gutter={8}>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput label="name" type="text" name="localGuardian.name" />
              </Col>
              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="occupation"
                  type="text"
                  name="localGuardian.occupation"
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHInput
                  label="Contact Number"
                  type="text"
                  name="localGuardian.contactNo"
                />
              </Col>
            </Row>

            <Divider>Academic Semester Info</Divider>

            <Row gutter={8}>
              <Col span={24} lg={{ span: 8 }}>
                <FHSelect
                  name="admissionSemester"
                  label="Choose Academic Semester"
                  options={semesterOptions}
                />
              </Col>

              <Col span={24} lg={{ span: 8 }}>
                <FHSelect
                  name="academicDepartment"
                  label="Choose Academic Department"
                  options={departmentOptions}
                />
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </FHForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateStudent;
