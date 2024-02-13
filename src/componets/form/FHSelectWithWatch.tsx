/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface FHSelectProps {
  label: string;
  name: string;
  onValueChange: (facultyId:string) => void;
  options?: { label: string; value: string; disabled?: boolean }[];
  mode?: "multiple" | "tags" | undefined;
}

const FHSelectWithWatch = ({ label, name, options, mode,onValueChange }: FHSelectProps) => {

  const { control } = useFormContext();
  const value = useWatch({
    control,
    name,
  });

  useEffect(()=>{
         onValueChange(value)
  },[value])
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select
              mode={mode}
              style={{ width: "100%" }}
              {...field}
              options={options}
              size="large"
            />
            {error && (
              <small style={{ color: "red" }}>
                {" "}
                {name} is {error.message}
              </small>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FHSelectWithWatch;
