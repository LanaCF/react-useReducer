import { ADD_USER, EDIT_USER, REMOVE_USER, TOGGLE_EDIT_MODE } from "./boilerplate"

export const initialState = [
    { id: 1, title: 'User 1' },
    { id: 2, title: 'User 2' },
    { id: 3, title: 'User 3' },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USER: 
            return [...state, action.payload];

        case REMOVE_USER:
            return state.filter(user => user.id !== action.payload);

        case TOGGLE_EDIT_MODE:
            return state.map(user => {
                if (user.id === action.payload) {
                    return {
                        ...user,
                        editMode: !user.editMode
                    };
                }
                return user;
            });

        case EDIT_USER:
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        title: action.payload.title
                    };
                }
                return user;
            });

        default:
            throw new Error();
    }
}

