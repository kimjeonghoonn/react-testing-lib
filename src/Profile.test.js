import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username="kimjeonghoonn" name="김정훈" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows the props correctly", () => {
        const utils = render(<Profile username="kimjeonghoonn" name="김정훈" />);
        utils.getByText("kimjeonghoonn");
        utils.getByText("(김정훈)");
        // utils.getByText("kimjeonghoonn (김정훈)");
    });
});