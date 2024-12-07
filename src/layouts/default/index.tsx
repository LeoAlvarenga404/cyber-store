import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
  return (
    <div className="min-h-screen w-screen bg-[#211C24]">
      <Header />
      <Outlet />
    </div>
  );
}
