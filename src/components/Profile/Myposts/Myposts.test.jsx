import React from "react";
import { create } from "react-test-renderer";
import Profile from "../Profile";
import Myposts from "./Myposts";

describe("Profile component", () => {
    test("Profile from props", () => {
        const component = create(<Myposts text={'subscribe profile'}/>);
        const instance = component.getInstance()
        expect(component.toJSON()).toMatchSnapshot();
    });
});

