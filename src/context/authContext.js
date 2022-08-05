import {createContext, useContext, useEffect, useState}  from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { auth } from "../firebase";


export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)

    if (!context) throw new Error('No hay un Provider...') 

    return context

}

export function AuthProvider({children}){

    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);



    const signUp = async(email, password) => {
        // console.log(email, password)
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        const userCredentials =  await signInWithEmailAndPassword(auth, email, password);
        //console.log(userCredentials)
    }

    const logout = () => signOut(auth);

    useEffect(() => {
      console.log('auth provider loader');
      onAuthStateChanged(auth, currentUser => {
        setuser(currentUser);
        //console.log(user);
        setLoading(false);
      })
    
      return () => {
        
      }
    }, [])
    

    return(
        <authContext.Provider value={{signUp, login, user, logout, loading}}>
            {children}

        </authContext.Provider>
    )
}