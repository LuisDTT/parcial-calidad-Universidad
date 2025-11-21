import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Pagina de pruebas", () => {
  it("debería renderizar el texto correctamente", () => {
    render(<Page />);

    const textElement = screen.getByText("Esta pagina es de pruebas");
    expect(textElement).toBeInTheDocument();
  });

  it("debería renderizar un div", () => {
    const { container } = render(<Page />);

    const divElement = container.querySelector("div");
    expect(divElement).toBeInTheDocument();
  });
});
