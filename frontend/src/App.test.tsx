import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Homepage from './components/Homepage';
import DarkParkDetails from './components/DarkParkDetails';
import LearnMore from './components/LearnMore';
import DarkParkSearch from './components/DarkParkSearch';
import Header from "./components/Header";
import DarkParkList from './components/DarkParkList';
import NewsFeedAll from './components/NewsFeedAll';



test('Text that displays the h2 on Dark Park Search', () => {
  const spy = jest.fn(); 
  render(<DarkParkDetails />);
  const P2 = screen.getByRole("P2", {name: "addP2"});
  expect(P2).toBeInTheDocument();
});

test('Role that displays the header tag on the header page', () => {
  const spy = jest.fn(); 
  render(<Header />);
  const header = screen.getByRole("header", {name: "addheader"});
  expect(header).toBeInTheDocument();
});

test('Role that displays the anchor tag on Dark Park details page', () => {
  const spy = jest.fn(); 
  render(<DarkParkDetails />);
  const Anchor = screen.getByRole("Anchor", {name: "addAnchor"});
  expect(Anchor).toBeInTheDocument();
});


test('Role that displays the image of the fence on the header page', () => {
  const spy = jest.fn(); 
  render(<Header />);
  const Img = screen.getByRole("Image", {name: "addedImage"});
  expect(Img).toBeInTheDocument();
});

test('Role that displays the title on the header page', () => {
  const spy = jest.fn(); 
  render(<Header />);
  const Title = screen.getByRole("Title", {name: "addedTitle"});
  expect(Title).toBeInTheDocument();
});

test('Role that displays the paragraph on Dark Park details', () => {
  const spy = jest.fn(); 
  render(<DarkParkDetails />);
  const Link = screen.getByRole("Paragraph", {name: "addP"});
  expect(Link).toBeInTheDocument();
});

test('Role that displays a div on Dark Park details', () => {
  const spy = jest.fn(); 
  render(<DarkParkDetails/>);
  const Link = screen.getByRole("Div", {name: "addDiv"});
  expect(Link).toBeInTheDocument();
});

test('Role that displays a h1 on Dark Park details', () => {
  const spy = jest.fn(); 
  render(<DarkParkDetails/>);
  const H1 = screen.getByRole("H1", {name: "addH1"});
  expect(H1).toBeInTheDocument();
});









