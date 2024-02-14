/* eslint-disable @typescript-eslint/no-explicit-any */


export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}
export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
}

export interface IStudent {
  _id?: string;
  id: string;
  user: string;
  password: string;
  name: IUserName;
  gender: "male" | "female" | "others";
  school: string;
  email: string;
  dateOFBirth?: string;
  profileImg?: string;
  bloodGroup?: "O+" | "O-" | "B+" | "B-" | "AB+" | "AB-" | "A+" | "A-";

  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;

  guardian: IGuardian;
  localGuardian: ILocalGuardian;

  admissionSemester: string;
  academicDepartment: string;
  academicFaculty: string;
  isDeleted: boolean;
  __v:number;
  fullName:string;
}



/* course management */




export interface IStudentCourse {
  _id: string;
  semesterRegistration: string;
  academicSemester: string;
  academicFaculty: string;
  academicDepartment: string;
  course: Course;
  faculty: string;
  section: number;
  maxCapacity: number;
  days: string[];
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  enrolledCourse: any[];
  completedCourses: any[];
  completedCourseIds: any[];
  isPreRequisiteFullFilled: boolean;
  isAlreadyEnrolled: boolean;
}

export interface Course {
  _id: string;
  title: string;
  prefix: string;
  credits: number;
  code: number;
  isDeleted: boolean;
  prerequisiteCourses: any[];
  __v: number;
}
