import * as React from "react";
import { shallow } from "enzyme";
import NewsContainer from "./NewsContainer";

describe("NewsContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewsContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
