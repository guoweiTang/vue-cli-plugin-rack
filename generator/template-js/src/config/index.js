/*
 * @Description: 项目配置文件
 * @Author: tangguowei
 * @Date: 2021-08-25 14:52:38
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-10-12 10:44:48
 */
// API根路径
export const apiBaseURL = process.env.VUE_APP_BASE_URL;
// 程序启动方式
export const workMode = process.env.VUE_APP_MOCK ? 'mock' : process.env.NODE_ENV;
export const emailPattern = /^\w+@\w+\.\w+(\.\w+)?$/;
