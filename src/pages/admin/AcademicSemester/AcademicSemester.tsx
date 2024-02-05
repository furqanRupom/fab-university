import { useAllAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const {data} = useAllAcademicSemestersQuery(undefined);
  console.log(data)
  return (
    <div>
       <h3>this is our academic semester</h3>

    </div>
  );
};

export default AcademicSemester;