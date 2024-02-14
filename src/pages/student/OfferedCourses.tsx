/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import {
  useEnrollCourseMutation,
  useGetAllOfferedCoursesQuery,
} from "../../redux/features/student/StudentCourseManagement";
import { IStudentCourse } from "../../interfaces";
import { Button, Card } from "antd";
import { toast } from "sonner";

const OfferedCourses: FunctionComponent = () => {
  const { data: offeredCourses } = useGetAllOfferedCoursesQuery(undefined);
  const [enroll] = useEnrollCourseMutation();

  const singleObject = offeredCourses?.data?.reduce(
    (acc, item: IStudentCourse) => {
      const key = item?.course?.title;
      (acc[key] = acc[key] || { courseTitle: key, sections: [] }),
        acc[key].sections.push({
          section: item.section,
          _id: item._id,
          startTime: item.startTime,
          endTime: item.endTime,
          days: item.days,
        });

      return acc;
    },
    {}
  );

  const modifiedData = Object.values(singleObject ? singleObject : {});

  /* handle enroll courses */

  const handleEnrollCourse = async (offeredCourse: string) => {
    const toastId = toast.loading("Enroll course on loading ..");
    try {
      const res = await enroll({ offeredCourse });
      if (res.data.success) {
        toast.success("This course successfully enrolled !",{id:toastId});
      } else {
        toast.error("Something went wrong !", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong !", { id: toastId });
    }
  };
  return (
    <>
      {modifiedData?.map((item: any) => (
        <Card title={item.courseTitle} size="small">
          {item.sections.map((course: any) => (
            <div>
              <p>start time : {course.startTime}</p>
              <p>end time : {course.endTime}</p>
              <p style={{ paddingTop: "0.1rem" }}>
                Course shedule :
                {course?.days.map((day: any) => (
                  <span style={{ margin: "0.5rem" }}>{day} </span>
                ))}
              </p>
              <Button onClick={() => handleEnrollCourse(course._id)}>
                Enroll
              </Button>
            </div>
          ))}
        </Card>
      ))}
    </>
  );
};

export default OfferedCourses;
