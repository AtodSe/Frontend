import React , {useEffect,useState,createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API} from "../config";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [state,setState] = useState({
        data:'',
        success:'',
        defaultInvoiceId:''
    });
    axios.defaults.baseURL = API;
    useEffect(()=>{
        const loadFromAsyncStorage = async () => {
            let data = await AsyncStorage.getItem('@auth');
            let id = await AsyncStorage.getItem('@defaultInvoiceId');
            const as = JSON.parse(data);
            const idd = JSON.parse(id);
            setState({...state,data: as.data,success: as.success,defaultInvoiceId:idd.data.id});
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
