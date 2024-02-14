import { FunctionComponent } from "react";
import { useGetAllEnrolledCoursesQuery } from "../../redux/features/faculty/facultyManagementApi";
import FHForm from "../../componets/form/FHForm";
import FHInput from "../../componets/form/FHInput";
import { Button } from "antd";
import FHSelect from "../../componets/form/FHSelect";
import { useNavigate } from "react-router-dom";


const MyCourses: FunctionComponent = () => {
    const {data:facultyCoursesData} = useGetAllEnrolledCoursesQuery(undefined);
       
    const semesterOptions = facultyCoursesData?.data?.map((item) => ({
      label: `${item?.academicSemester?.name} ${item?.academicSemester?.year}`,
      value:item?.semesterRegistration._id
    }));
    const courseOptions = facultyCoursesData?.data?.map((item) => ({
      label: item?.course?.title,
      value:item?.course?._id
    }));
    const navigate = useNavigate();

   const handleFacultyCourses = (data) => {
      navigate(`/faculty/course/${data.semesterRegistration}/${data.course}`);
   }
    
  return (
    <>
      <h3>this is courses section</h3>
 
          <FHForm
            onSubmit={handleFacultyCourses}
          >
            <FHSelect label="Select Semester"  name="semesterRegistration" options={semesterOptions} />
            <FHSelect label="Select Course"  name="course" options={courseOptions} />
            <Button htmlType="submit">Submit</Button>
          </FHForm>
    </>
  );
};

export default MyCourses;
