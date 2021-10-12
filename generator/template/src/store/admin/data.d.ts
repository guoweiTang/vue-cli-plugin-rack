/*
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-09-30 14:15:56
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-12 15:58:27
 */
export interface CommonData {
  isScreen: boolean;
  activeRoute: {
    name: string;
  }
}
export interface UserInfo {
  avatarUrl?: string;
  name?: string;
  gender?: string;
  summary?: string;
  description?: string;
  role?: string;
}
export interface Token {
  accessToken?: string;
  refreshToken?: string;
}
export interface UserData {
  token: Token;
  userInfo: UserInfo;
}
