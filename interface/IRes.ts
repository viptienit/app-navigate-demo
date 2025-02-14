import IUserDB from "./IUserLogin";

export default interface IRes {
  status: boolean;
  message: string;
  content: IUserDB[];
}
