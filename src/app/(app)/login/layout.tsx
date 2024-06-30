import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Layout = ({ children }: any) => {
  const cookieStore = cookies();
  const login = cookieStore.get("login")?.value;
  if (login) {
    redirect("/");
  }
  return <div>{children}</div>;
};
export default Layout;
