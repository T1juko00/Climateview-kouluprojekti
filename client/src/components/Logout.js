import { useNavigate } from "react-router-dom"

export default function Logout() {
    
    const navigate = useNavigate()

    localStorage.clear();
    localStorage.removeItem("token")
    navigate('/')
    window.location.reload(false)
}