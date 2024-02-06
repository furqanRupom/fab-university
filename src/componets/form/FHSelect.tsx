/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

interface FHSelectProps {
  label: string ;
  name: string;
  options:{label:string,value:string,disabled?:boolean}[]
}

const FHSelect = ({ label, name ,options}: FHSelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field,fieldState:{error}}) => (
          <Form.Item label={label}>
            <Select
              style={{ width: "100%" }}
              {...field}
              options={options}
              size="large"
            />
            {error && <small style={{color:'red'}}> {name} is {error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FHSelect;
