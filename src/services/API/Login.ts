import { useAppSelector } from "@/config/redux/hooks";
import { usePost } from "@/config/api/useCrud";
import { envVars } from "@/config/env/envVars";

export const Login = (): string => {
  const email = useAppSelector((state) => state.login.email);
  const password = useAppSelector((state) => state.login.password);
  usePost(`${envVars.api.https}/login`, {
    email,
    password,
  });
  return "Success";
};
