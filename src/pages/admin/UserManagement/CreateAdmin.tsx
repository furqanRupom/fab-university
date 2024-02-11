import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import FHForm from "../../../componets/form/FHForm";
import FHInput from "../../../componets/form/FHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import FHDatePicker from "../../../componets/form/FHDatePicker";
import { bloodGroups, genders } from "../../../constants/global.constant";
import { toast } from "sonner";
import { useCreateAdminMutation } from "../../../redux/features/admin/userManagementApi";
import FHSelect from "../../../componets/form/FHSelect";

const CreateAdmin = () => {
  

 /* add admin */

 const [addAdmin] = useCreateAdminMutation()









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
    console.log(data);
    const facultyData = {
      password: "admin123",
      admin: data,
    };
    formData.append("file", data.Picture);
    formData.append("data", JSON.stringify(facultyData));

    try {
      const res = await addAdmin(formData);
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong !");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Admin </h1>

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
                <FHInput
                  name="designation"
                  label="What your designation?"
                  type="text"
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

            <Button htmlType="submit">Submit</Button>
          </FHForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateAdmin;
