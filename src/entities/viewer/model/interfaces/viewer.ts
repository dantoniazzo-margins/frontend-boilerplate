export interface IViewer {
  firstName: string;
  lastName: string;
  email: string;
  isEmailConfirmed?: boolean;
  photo?: string;
  dateOfBirth?: Date;
  phoneNumber?: number;
  address?: string;
  moneyCount?: number;
}
