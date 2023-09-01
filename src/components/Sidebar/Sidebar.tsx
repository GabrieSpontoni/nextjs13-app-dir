import { SidebarList } from "./components/SidebarList";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-center lg:justify-start mt-16 bg-base-100">
        {children}
      </div>
      <div className="drawer-side pt-12">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <SidebarList />
      </div>
    </div>
  );
}
