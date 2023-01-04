import { useReducer } from "react"
import { types } from "../types/types";
import { AuthContext, authReducer } from "./"


const initialState = {
    logged: false,
    user: null
}

function init() {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({ children }) => {
    const [ authState, dispatch ] = useReducer(authReducer, initialState, init);

    function login ( name ) {
        const action = {
            type: types.login,
            payload: {
                id: 1,
                name
            }
        };

        localStorage.setItem('user', JSON.stringify( action.payload ));


        dispatch( action )
    }

    function logout() {
        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');
        dispatch( action );
    }
    
    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}