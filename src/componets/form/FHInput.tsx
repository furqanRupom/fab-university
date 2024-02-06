import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

interface ILoginTypes {
  type:string;
  name:string;
  label?:string;
}

const FHInput = ({type,name,label}:ILoginTypes) => {

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} name={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FHInput;