import { FunctionComponent } from "react";
import { useGetAllMyEnrolledCoursesQuery } from "../../redux/features/student/StudentCourseManagement";
import { Card } from "antd";


const MyEnrolledCourses:FunctionComponent = () => {
    const {data:myEnrolledCourses} = useGetAllMyEnrolledCoursesQuery([]);
    console.log(myEnrolledCourses);
    
    return (
        <div>
            <h3 style={{textAlign:'center'}}>My Enrolled Course</h3>

            {
                myEnrolledCourses?.data?.map((item) => (
                    <Card title={item?.course?.title}>
                    <p>section : {item?.offeredCourse?.section}</p>
                    <p>Start Time : {item?.offeredCourse?.startTime}</p>
                    <p>End Time : {item?.offeredCourse?.endTime}</p>
                    
                    </Card>
                ))
            }


        </div>
    );
};

export default MyEnrolledCourses;