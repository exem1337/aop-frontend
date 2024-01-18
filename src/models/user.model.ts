import { EUserRole } from "src/enums/userTypes.enum";

export interface IUser {
  id: number;
  middle_name: string;
  name: string;
  email: string;
  created_at: string;
  last_name: string;
  status?: string;
  role: EUserRole;
}