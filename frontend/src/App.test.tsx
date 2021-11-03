import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Homepage from './components/Homepage';
import DarkParkDetails from './components/DarkParkDetails';
import LearnMore from './components/LearnMore';
import DarkParkSearch from './components/DarkParkSearch';

test('Text that displays the h2 on Dark Park Search', () => {
  const spy = jest.fn(); 
  render(<DarkParkSearch />);
  const h2 = screen.getByRole("h2", {name: "addh2"});
  expect(h2).toBeInTheDocument();
});

test('Role that displays the button on Dark Park Search', () => {
  const spy = jest.fn(); 
  render(<DarkParkSearch />);
  const Button = screen.getByRole("Button", {name: "addButton"});
  expect(Button).toBeInTheDocument();
});

test('Role that displays the button on Dark Park search', () => {
  const spy = jest.fn(); 
  render(<DarkParkSearch />);
  const Form = screen.getByRole("Form", {name: "addForm"});
  expect(Form).toBeInTheDocument();
});


test('Role that displays the button on Dark Park search', () => {
  const spy = jest.fn(); 
  render(<DarkParkSearch />);
  const Label = screen.getByRole("H2", {name: "addH2"});
  expect(Label).toBeInTheDocument();
});

test('Role that displays the label on  homepage', () => {
  const spy = jest.fn(); 
  render(<DarkParkSearch />);
  const Label = screen.getByRole("Label", {name: "addLabel"});
  expect(Label).toBeInTheDocument();
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









