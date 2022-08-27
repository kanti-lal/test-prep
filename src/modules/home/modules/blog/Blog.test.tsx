import { shallow } from "enzyme";
import Blog from "./Blog";

describe("Blog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper).toMatchSnapshot();
  });
});
