import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagemnetApi";


const AcademicSemester = () => {
  const {data} = useGetAllAcademicSemestersQuery(undefined);
  console.log(data)
  return (
    <div>
       <h3>this is our academic semester</h3>

    </div>
  );
};

export default AcademicSemester;