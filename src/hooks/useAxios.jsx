import axios from "axios";
import { useContext, useEffect } from "react";
import { UserProvider } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const useAxios = () => {
    const { logOut } = useContext(UserProvider)
    const navigate = useNavigate()

    useEffect(() => {
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                navigate('/login')
            }
        });
    }, [])





    return instance;
};

export default useAxios;