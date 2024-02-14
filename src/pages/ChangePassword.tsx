import { Button, Row } from "antd";
import * as React from "react";
import FHForm from "../componets/form/FHForm";
import FHInput from "../componets/form/FHInput";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../redux/features/admin/userManagementApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ChangePassword: React.FunctionComponent = () => {
  const [changePassword] = useChangePasswordMutation();
  const navigate = useNavigate()

  const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await changePassword(data);

      if(res.data.success){
          toast.success("Change password successfully");
          navigate('/login')
      }

    } catch (error) {
      toast.error("Password change has been failed !");
    }
  };
  return (
    <>
      <h3>Change Your Password</h3>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <FHForm onSubmit={handleChangePassword}>
          <FHInput type="text" name="oldPassword" label="Old Password" />
          <FHInput type="text" name="newPassword" label="New Password" />

          <Button htmlType="submit">Change Password</Button>
        </FHForm>
      </Row>
    </>
  );
};

export default ChangePassword;
