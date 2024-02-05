import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ReactNode } from "react";

interface IFormSubmitTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit :SubmitHandler<any>,
  children:ReactNode
}

const FHForm = ({ onSubmit,children }:IFormSubmitTypes) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FHForm;
