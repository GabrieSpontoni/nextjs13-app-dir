import "@testing-library/jest-dom";
import renderWithProviders from "../src/utils/renderWithProviders";
import { screen } from "@testing-library/react";
import { SidebarList } from "@/components/Sidebar/components/SidebarList";

describe("SideBarList", () => {
  it("should render correctly", () => {
    renderWithProviders(<SidebarList />);

    const sidebarList = screen.getByRole("list");
    expect(sidebarList).toBeInTheDocument();

    const sidebarItems = screen.getAllByRole("listitem");
    expect(sidebarItems.length).toBeGreaterThan(0);
  });

  it("should highlight the active item correctly", () => {
    const mockPathname = "/tutorials/jest";
    jest
      .spyOn(require("next-intl/client"), "usePathname")
      .mockReturnValue(mockPathname);

    renderWithProviders(<SidebarList />);

    const activeItem = screen.getByText("Testes com Jest");
    expect(activeItem).toHaveClass("active");
  });

  it("should not allow clicking on disabled items", () => {
    renderWithProviders(<SidebarList />);

    const sidebarItems = screen.getAllByRole("listitem");

    sidebarItems.forEach((item) => {
      if (item.classList.contains("disabled")) {
        expect(item).not.toHaveAttribute("href");
      }
    });
  });
});
