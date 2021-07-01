export interface Auth {
  auth: {
    type: string
    auth_token: string
    error: {
      email: string,
      password: string
    },
  }
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface User {
  id: number | string;
  name: string;
  auth_token: string;
}