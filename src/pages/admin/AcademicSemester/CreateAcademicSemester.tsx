/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import FHForm from "../../../componets/form/FHForm";
import FHSelect from "../../../componets/form/FHSelect";
import { monthsOptions } from "../../../constants/global.constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagemnetApi";
import { toast } from "sonner";
import { academicSemesterSchema } from "../../../schemas/academicSemester.schema";

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




const CreateAcademicSemester = () => {


  /* add or create academic semester */

  const [addAcademicSemester] = useAddAcademicSemesterMutation();

  const onSubmit = async (data: any) => {
    const name = options[Number(data.name - 1)].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startsMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log('clicked')
    try {
      const res = await addAcademicSemester(semesterData);
      console.log(res);
    } catch (error) {
      toast.error("something went wrong");
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
              name="startMonth"
              label="startMonth"
              options={monthsOptions}
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
