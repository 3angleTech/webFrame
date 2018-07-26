/**
 * Provides IAccountInformation.
 */
import { IAccountCredentials } from './account-credentials';


export interface IAccountInformation extends IAccountCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
