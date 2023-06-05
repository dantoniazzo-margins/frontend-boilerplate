export interface ILogin {
  data: ILoginData;
}

export interface ILoginData {
  type: string;
  attributes: ILoginAttributes;
}

export interface ILoginAttributes {
  password: string;
  email: string;
}
