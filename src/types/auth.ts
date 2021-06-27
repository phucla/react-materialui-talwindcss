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

export interface LoginData {
	email: string
	password: string
}