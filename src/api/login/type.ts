export interface LoginRequestData {
  username: string; // 用户明
  password: string; // 密码
  captchaCode?: string; // 验证码
}

// login token
export interface LoginTokenRequest {
  accessToken: string;
}

interface loginResData {
  username: string;
  roles: string[];
  accessToken: string;
}

export interface LoginResponse {
  data: loginResData;
  username: string;
  roles: string[];
  accessToken: string;
}
