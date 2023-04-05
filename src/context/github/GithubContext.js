import { createContext, useReducer } from "react"
import { GithubReducer } from "./GithubReducer"

const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false
}
export const GithubContext = createContext(initalState)
export const GithubProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GithubReducer, initalState)

    return (
        < GithubContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </GithubContext.Provider >
    )
}
