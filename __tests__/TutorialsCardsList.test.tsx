import "@testing-library/jest-dom";
import renderWithProviders from "../src/utils/renderWithProviders";
import { screen } from "@testing-library/react";
import { TutorialsCardsList } from "@/app/[locale]/tutorials/components/TutorialsCardsList";
import { SidebarList } from "@/components/Sidebar/components/SidebarList";

describe("TutorialsCardsList", () => {
  it("render TutorialsCardsList with the same amount of data as the sidebar", () => {
    renderWithProviders(
      <>
        <TutorialsCardsList />
        <SidebarList />
      </>
    );

    const sidebarItems = screen.getAllByRole("listitem");
    const cards = screen.getAllByTestId("card-with-image-overlay");

    expect(cards.length).toEqual(sidebarItems.length);
  });
});
