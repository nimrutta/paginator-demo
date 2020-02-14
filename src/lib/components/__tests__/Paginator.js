import React from "react";
import Paginator from "../Paginator";

import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe("Paginator", () => {
  it("renders properly", () => {
    render(<Paginator currentPage={5} totalCount={80} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  })
});
