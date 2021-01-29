import {getUsers} from "../api/api";
import {updateObjextsInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjextsInArray(state.users, action.userId, "id", {followed: true} )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjextsInArray(state.users, action.userId, "id", {followed: false} )
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const getUsersThunkCreator = (currentPage, pageSize) => {
    console.log(currentPage)
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setCurrentPage(currentPage))

    }
}

export default userReducer