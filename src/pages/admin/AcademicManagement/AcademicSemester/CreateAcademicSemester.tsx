/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../../redux/features/admin/academicManagementApi";
import { academicSemesterSchema } from "../../../../schemas/academicSemester.schema";
import FHForm from "../../../../componets/form/FHForm";
import FHSelect from "../../../../componets/form/FHSelect";
import { monthsOptions } from "../../../../constants/global.constant";

const options = [
  {
    label: "autumn",
    value: "01",
  },
  {
    label: "summer",
    value: "02",
  },
  {
    label: "fall",
    value: "03",
  },
];

/* year  */

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4].map((num) => ({
  label: `${currentYear + num}`,
  value: `${currentYear + num}`,
}));

const CreateAcademicSemester:React.FunctionComponent = () => {
  /* add or create academic semester */

  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit = async (data: any) => {
    const name = options[Number(data.name - 1)].label;
    const toastId = toast.loading("add academic semester on processing..");
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startsMonth: data.startsMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = await addAcademicSemester(semesterData);
      const message = res && res.data!.message;
      toast.success(message, { id: toastId });
      console.table(res);
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <h3
        style={{ padding: "0 3rem", textAlign: "center", fontSize: "1.4rem" }}
      >
        Create Academic Semester
      </h3>

      <Flex justify="center" align="center">
        <Col span={8}>
          <FHForm
            resolver={zodResolver(academicSemesterSchema)}
            onSubmit={onSubmit}
          >
            <FHSelect name="name" label="name" options={options} />
            <FHSelect name="year" label="year" options={yearOptions} />
            <FHSelect
              name="startsMonth"
              label="startsMonth"
            />
            <FHSelect
              name="endMonth"
              label="endMonth"
              options={monthsOptions}
            />
            <Button htmlType="submit"> Add Academic Semester</Button>
          </FHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicSemester;
