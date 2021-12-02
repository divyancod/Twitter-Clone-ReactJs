import {LOGIN_USER} from "./action.types";

const initalState = {
    isLogged: false,
    displayName: "",
    email: "",
    username: "",
    uid:""
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            let num = action.payload.uid
            let tusername = ""
            for (let i = 0; i < num.length; i++) {
                if (num[i] >= '0' && num[i] < '9') {
                    tusername = tusername.concat(num[i])
                }
            }
            let email = action.payload.email
            let username = "";
            for (let i = 0; i < email.length; i++) {
                if (email[i] === '@')
                    break;
                username = username.concat(email[i])
            }
            return {
                ...state,
                isLogged: true,
                displayName: action.payload.displayName,
                email: action.payload.email,
                username: username + "_" + tusername,
                uid:action.payload.uid
            }
        default:
            return state;
    }
}
export default reducer;