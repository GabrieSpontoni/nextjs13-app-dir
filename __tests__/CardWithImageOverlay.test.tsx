import "@testing-library/jest-dom";
import { CardWithImageOverlay } from "@/components/CardWithImageOverlay";
import { screen } from "@testing-library/react";

import renderWithProviders from "../src/utils/renderWithProviders";

describe("CardWithImageOverlay", () => {
  it("render Card with href and return Acessar", () => {
    renderWithProviders(
      <CardWithImageOverlay
        src=""
        alt=""
        title=""
        description=""
        href="/"
        isTargetBlank
      />
    );

    const accessText = screen.getByText("Acessa");

    expect(accessText).toBeVisible();
  });

  it("render Card without href and return Em breve", () => {
    renderWithProviders(
      <CardWithImageOverlay src="" alt="" title="" description="" />
    );

    const commingSoonText = screen.getByText("Em breve");

    expect(commingSoonText).toBeVisible();
  });
});
