import { LoginRequestData, LoginResponse } from "./type";
import { post } from "@/http/axios";

export const userLogin = (data: LoginRequestData) => {
  return post<LoginResponse>({}, "/login", data);
};
