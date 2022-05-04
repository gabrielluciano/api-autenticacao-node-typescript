export default interface User {
  id?: number;

  name: string;
  email: string;
  password: string;
  confirm_password?: string;

  deleted_at?: number;
}