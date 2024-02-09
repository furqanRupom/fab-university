import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

interface IFHDatePickerProps {
  name: string;
  label?: string;
}

const FHDatePicker = ({  name, label }: IFHDatePickerProps) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
           <DatePicker {...field}  size="large" style={{width:"100%"}} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FHDatePicker;
