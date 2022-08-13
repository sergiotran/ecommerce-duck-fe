// Response interfaces
export interface LoginResponse {
  statusCode?: number;
  access_token: string;
}

export interface VerifyTokenResponse {
  success: boolean
}