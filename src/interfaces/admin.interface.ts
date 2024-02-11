export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IAdmin {
  id: string;
  user: string;
  name: IUserName;
  email: string;
  password: string;
  gender: "male" | "female" | "others";
  designation: string;
  dateOfBirth: string;
  bloodGroup: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
}
