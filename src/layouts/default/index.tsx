import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="min-h-screen w-screen ">
      <Header />
      <Outlet />
    </div>
  );
}
