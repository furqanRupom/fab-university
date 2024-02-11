export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IFaculty {
  id: string;
  user: string;
  name: IUserName;
  email: string;
  password: string;
  gender: "male" | "female" | "others";
  designation: string;
  dateOfBirth: string;
  bloodGroup: "O+" | "O-" | "B+" | "B-" | "AB+" | "AB-" | "A+" | "A-";
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  contactNo: string;
  emergencyContactNo: string;
  academicDepartment: string;
  academicFaculty: string;
  isDeleted: boolean;
}
