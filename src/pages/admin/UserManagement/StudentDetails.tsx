import * as React from "react";
import { useParams } from "react-router-dom";

interface IStudentDetailsProps {}

const StudentDetails: React.FunctionComponent<IStudentDetailsProps> = (
  props
) => {
  const params = useParams();
  params;
  return <h3>this is our student details page</h3>;
};

export default StudentDetails;
