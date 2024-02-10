

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
