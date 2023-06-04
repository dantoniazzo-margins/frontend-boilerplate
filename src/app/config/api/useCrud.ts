import { useHttpAdapter } from "./useHttpAdapter";

const useGet = (url: string) => {
  return useHttpAdapter().get(url);
};

const usePost = (url: string, body: any) => {
  return useHttpAdapter().post(url, body);
};
const usePatch = (url: string, body: any) => {
  return useHttpAdapter().patch(url, body);
};
const useDelete = (url: string) => {
  return useHttpAdapter().delete(url);
};

export { useGet, usePost, usePatch, useDelete };
