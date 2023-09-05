import "@testing-library/jest-dom";
import { CardWithImageOverlay } from "@/components/CardWithImageOverlay";

import renderWithProviders from "../src/utils/renderWithProviders";

describe("CardWithImageOverlay", () => {
  it("render Card", () => {
    renderWithProviders(
      <CardWithImageOverlay
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
        title="Google"
        description="Google"
      />
    );
    expect(document.querySelector(".card")).toBeInTheDocument();
  });
});
