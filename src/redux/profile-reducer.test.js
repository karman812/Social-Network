import profileReducer, {addPostActionCreator} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";


it('new post should be added and incremented', () => {
    //1. test data
    let action = addPostActionCreator('new post text(test)')
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 45},
            {id: 2, message: "It's my first post!", likesCount: 25}
        ]
    }
    //2. action
    let testProfiledata = profileReducer(state, action);

    //3. expectation
    expect(testProfiledata.posts.length).toBe(5)

});