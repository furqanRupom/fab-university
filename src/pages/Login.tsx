import { useLoginMutation } from "../redux/features/auth/authApi";
import { IUser, setUser } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import FHForm from "../componets/form/FHForm";
import FHInput from "../componets/form/FHInput";
import { Button, Row } from "antd";

const Login = () => {

  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  /* login function  */

  const onSubmit = async (data: unknown) => {
    const toastId = toast.loading("logging in");
    try {
      /*  we was use unwrap for extract extra data folder */
      console.log(data);
      const res = await login(data).unwrap();
      console.log(data)
      const user = verifyToken(res.data.accessToken) as IUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("logged in successfully !", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/${user.role}/dashboard`);
    } catch (error: unknown) {
      toast.error("something went wrong ", { id: toastId, duration: 2000 });
    }
  };
  return (

    <Row justify="center" align="middle" style={{height:"100vh"}}>

    <FHForm  onSubmit={onSubmit}>

      <FHInput type="text" name="id" />
      <FHInput  type="password" name="password" />

      <Button htmlType="submit">
        Login
      </Button>
    </FHForm>

    </Row>
  );
};

export default Login;
