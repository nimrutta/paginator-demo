import React from "react";
import IPFPaginator from "../";

import { 
  render, 
  screen, 
  cleanup,
  fireEvent
 } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe("Paginator", () => {
  it("renders properly", () => {
    render(<IPFPaginator currentPage={5} totalCount={80} />);
    
    expect(screen.getByText('5')).toBeInTheDocument();
  })
  
  it("Calls onPageChanged prop when user clicks different page", () => {
    const mockOnChange = jest.fn();
    const { getByText } = render(<IPFPaginator totalCount={80} onPageChanged={mockOnChange} />);
    
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("4"));
    
    expect(mockOnChange.mock.calls.length).toBe(2);
  })
});

describe("Default rendering ", () => {
  it("Renders data on page", () => {
    const data = ["Apple", "Mangoes", "Banana"];
    
    render(<IPFPaginator data={data} />);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
  })
  
  it("Renders empty message if no data on page", () => {
    render(<IPFPaginator data={[]} />);
    expect(screen.getByText('No data found.')).toBeInTheDocument();
  })
  
  it("Renders perosonalized empty message if `dataType` prop is provided", () => {
    render(<IPFPaginator dataType="users" data={[]} />);
    expect(screen.getByText('No users found.')).toBeInTheDocument();
  })
});

describe("Custom renderering", () => {
  it("renderItem prop is called", () => {
    const data = ["Apple", "Mangoes"];
    const mockRenderItem = jest.fn();
    
    render(<IPFPaginator data={data} renderItem={mockRenderItem} />);
    
    expect(mockRenderItem.mock.calls.length).toBe(2);
  });
  
  it("custom UI is being rendered", () => {
    const data = ["Apple", "Mangoes"];
    const mockRenderItem = jest.fn((item, index) => (
      <span key={index}>Fruit at {index} is {item}</span>
    ));
    
    render(<IPFPaginator data={data} renderItem={mockRenderItem} />);
    
    expect(screen.getByText('Fruit at 0 is Apple')).toBeInTheDocument();
  });
});

describe('Table rendering', () => {
  it("Doesn't render table if no data provided", () => {
    render(<IPFPaginator asTable />);
    
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it("Throws if data provided contains non-objects", () => {
    const data = [{name: "Walter"}, "Mangoes"];
    
    expect(() => render(<IPFPaginator asTable={true} data={data} />)).toThrow();
  });
  
  it("Renders table if valid data is provided", () => {
    const data = [{name: "Walter"}, {name: "James"}];
    
    render(<IPFPaginator asTable data={data} />);
    
    expect(screen.queryByRole('table')).toBeInTheDocument();
  });
  
  it("Renders table headings if valid data provided", () => {
    const data = [{name: "Walter", age: "26"}, {name: "James", age: "12"}];
    
    render(<IPFPaginator asTable data={data} />);
    
    expect(screen.queryByText('name')).toBeInTheDocument();
    expect(screen.queryByText('age')).toBeInTheDocument();
  });
  
  it("Renders custom table row if renderItem is passed", () => {
    
  });
});
