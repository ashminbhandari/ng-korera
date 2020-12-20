export class User {
  username: string;
  password: string;
  id: number;
  token: string;
  creationTime: string;
  type: string;
  constructor(
    username: string,
    password: string,
    id?: number,
    token?: string,
  ) {
  }
  setToken(token): void {
    this.token = token;
  }
}
