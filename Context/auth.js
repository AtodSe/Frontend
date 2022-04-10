import React , {useEffect,useState,createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API} from "../config";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [state,setState] = useState({
        data:'',
        success:''
    });
    axios.defaults.baseURL = API;
    useEffect(()=>{
        const loadFromAsyncStorage = async () => {
            let data = await AsyncStorage.getItem('@auth');
            const as = JSON.parse(data);
            console.log(as)
            setState({...state,data: as.data,success: as.success});
        }
        loadFromAsyncStorage();
    },[]);
    return(
        <AuthContext.Provider value={[state,setState]}>
            {children}
        </AuthContext.Provider>
    );
}
export {AuthProvider,AuthContext};
