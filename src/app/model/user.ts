export class User {
  username: string;
  password: string;
  id: number;
  token: string;
  type: string;
  constructor(
    username: string,
    password: string,
    id?: number,
    token?: string,
    type?: string,
  ) {
  }
}