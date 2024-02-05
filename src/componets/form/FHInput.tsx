import { Input } from "antd";
import { Controller } from "react-hook-form";

interface ILoginTypes {
  type:string;
  name:string;
}

const FHInput = ({type,name}:ILoginTypes) => {

  return (
    <div style={{marginBottom:'2rem'}}>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} name={name}  />}
      />
    </div>
  );
};

export default FHInput;