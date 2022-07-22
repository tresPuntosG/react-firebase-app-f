import {createContext, useContext}  from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase";


export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)

    if (!context) throw new Error('No hay un Provider...') 

    return context

}

export function AuthProvider({children}){



    const signUp = async(email, password) => {
        // console.log(email, password)
        await createUserWithEmailAndPassword(auth, email, password)
    }

    return(
        <authContext.Provider value={{signUp}}>
            {children}

        </authContext.Provider>
    )
}