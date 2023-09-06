import "@testing-library/jest-dom";
import { RenderCondition } from "@/utils/RenderCondition";
import renderWithProviders from "../src/utils/renderWithProviders";
import { screen } from "@testing-library/react";

describe("RenderCondition", () => {
  it("render RenderCondition with condition true", () => {
    renderWithProviders(
      <RenderCondition condition={true}>Content when true</RenderCondition>
    );

    expect(screen.getByText("Content when true")).toBeVisible();
  });

  it("render RenderCondition with condition false", () => {
    renderWithProviders(
      <RenderCondition condition={false}>Content when false</RenderCondition>
    );

    expect(screen.queryByText("Content when false")).not.toBeInTheDocument();
  });
});
