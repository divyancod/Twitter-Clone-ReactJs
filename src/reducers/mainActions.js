import {LOGIN_USER} from "./action.types";

export const myLogin = (user) => {
    return (dispatch) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        dispatch({
            type: LOGIN_USER,
            payload: user
        });
    }
}
export const isLogIn = () => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem("currentUser"))
        if (user != null) {
            dispatch({
                type: LOGIN_USER,
                payload: user
            });
            return true;
        } else {
            return false;
        }
    }
}
export const logoutUser = () => {
    localStorage.clear();
}