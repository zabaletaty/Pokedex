import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { useNavigate} from "react-router-dom"

const ProtectedRoutes = ({validName}) => {

    const navigate = useNavigate()


    if (validName) {
        return <Outlet/>
    }else{
        return alert("Pon tu nombre"); 
    }
}

export default ProtectedRoutes