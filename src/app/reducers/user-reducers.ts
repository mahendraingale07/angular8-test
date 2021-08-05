import { Action } from './../actions/index';
import { USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS } from '../actions/user-action';

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    users: any;
    error: boolean;
}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    users: [],
    error: false,
};

export function UserReducer(state = initialState, action: Action): UserReducerState {
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return { ...state, loading: true };
        }
        case USER_LIST_ERROR: {
            return { ...state, error: true, loading: false };
        }
        case USER_LIST_SUCCESS: {
            const updatedUsers = action.payload.data
            return {
                ...state,
                loaded: true,
                loading: false,
                users: updatedUsers
            };
        }
        default: {
            return state;
        }
    }
}

// selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getUsers = (state: UserReducerState) => state.users;

