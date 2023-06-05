import { IUser } from '@/entities/user/model/interfaces/user';

/* ================ Signup Body  =================*/
export interface ISignUpBody {
  data: ISignUpBodyData;
}

export interface ISignUpBodyData {
  type: string;
  attributes: ISignUpBodyData;
}

export interface ISignUpBodyDataAttributes {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

/* ============== Signup response =============== */

export interface ISignUpResponse {
  data: ISignUpResponseData;
}

export interface ISignUpResponseData {
  type: string;
  id: string;
  attributes: IUser;
}
