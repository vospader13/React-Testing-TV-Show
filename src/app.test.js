  
import React from "react";
import Dropdown from "./App";
import { render, fireEvent, waitforElement, wait, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
    render(<App />);
  });

test("show list of seasons when clicked on", () => {
    const testSeason = 'test Season'
    render(<Dropdown>{testSeason}</Dropdown>)

    expect(screen.queryByText(testSeason)).toBeNull()
})

test("Making sure getting the text while fetching the data", async () => {
  const { getByText } = render(<App />);

  const text = getByText(/Fetching data.../i);
  expect(text).toBeInTheDocument();
});



test('fetch makes api call to proper url', async () => {
  const axios = {
      get: jest.fn(() => Promise.resolve({data: {episodes: 'Season'}})),
  }
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
  render(<App url={url}/>)
  expect(axios.get).toHaveBeenCalledTimes(0)
  
})

