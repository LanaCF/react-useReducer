import { ADD_USER, EDIT_USER, REMOVE_USER, TOGGLE_EDIT_MODE } from "./boilerplate"

export const addUser = payload => ({
    type: ADD_USER,
    payload,
})

export const removedUser = payload => ({
    type: REMOVE_USER,
    payload,
})

export const toggleEditMode = payload => ({
    type: TOGGLE_EDIT_MODE,
    payload,
})

export const editUser = payload => ({
    type: EDIT_USER,
    payload,
})