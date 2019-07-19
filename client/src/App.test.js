import React from "react";
import {shallow} from "enzyme";
import App from "./App";


describe("Tests for App", () => {
  const app = shallow(<App />);

  it('should render component correctly', function () {
    expect(app).toMatchSnapshot();
  });

  it("checks that App contains Header component", function () {
    expect(app.find('Connect(Header)').exists()).toBe(true);
  });

  it('checks that App contains Footer component', function () {
    expect(app.find('Footer').exists()).toBe(true);
  });

});