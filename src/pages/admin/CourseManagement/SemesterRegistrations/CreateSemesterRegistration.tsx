/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useGetAllAcademicSemestersQuery } from "../../../../redux/features/admin/academicManagementApi";
import FHForm from "../../../../componets/form/FHForm";
import FHSelect from "../../../../componets/form/FHSelect";
import FHInput from "../../../../componets/form/FHInput";
import FHDatePicker from "../../../../componets/form/FHDatePicker";
import { semesterRegistrationSchema } from "../../../../schemas/semesterRegistrationSchema";
import { useAddSemesterRegistrationMutation } from "../../../../redux/features/admin/courseManagement";
import { IResponse } from "../../../../interfaces/interface";

const statusOptions = [
  {
    label: "UPCOMING",
    value: "UPCOMING",
  },
  {
    label: "ONGOING",
    value: "ONGOING",
  },
  {
    label: "ENDED",
    value: "ENDED",
  },
];

const CreateSemesterRegistration: React.FunctionComponent = () => {
  /* add or create  semester registration */

  const { data: allAcademicSemesters } = useGetAllAcademicSemestersQuery([
    {
      name: "sort",
      value: "year",
    },
  ]);

  const [semesterRegistration] = useAddSemesterRegistrationMutation();

  const academicSemestersOptions = allAcademicSemesters?.data.map((item) => ({
    label: `${item.name} ${item.year}`,
    value: item._id,
  }));
  const onSubmit = async (data: any) => {
    const { academicSemester, startDate, endDate, status } = data;
    const semesterData = {
      academicSemester,
      status,
      startDate,
      endDate,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };
    const toastId = toast.loading("semester registration on processing ...");
    try {
      const res = (await semesterRegistration(semesterData)) as IResponse<any>;

      if (res?.error) {
        toast.error("something went wrong", { id: toastId });
      }
      toast.success("Successfully registered a semester !", { id: toastId });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <h3
        style={{ padding: "0 3rem", textAlign: "center", fontSize: "1.4rem" }}
      >
        Create Semester Registration
      </h3>

      <Flex justify="center" align="center">
        <Col span={8}>
          <FHForm
            resolver={zodResolver(semesterRegistrationSchema)}
            onSubmit={onSubmit}
          >
            <FHSelect
              name="academicSemester"
              label="academicSemester"
              options={academicSemestersOptions}
            />

            <FHSelect
              name="status"
              label="Semester status"
              options={statusOptions}
            />

            <FHDatePicker name="startDate" label="startDate" />
            <FHDatePicker name="endDate" label="endDate" />

            <FHInput name="minCredit" label="minimum credit" type="number" />
            <FHInput name="maxCredit" label="maximum credit" type="number" />
            <Button htmlType="submit"> Add Academic Semester</Button>
          </FHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateSemesterRegistration;
