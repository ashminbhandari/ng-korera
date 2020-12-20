export class User {
  username: string;
  password: string;
  id: number;
  token: string;
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
