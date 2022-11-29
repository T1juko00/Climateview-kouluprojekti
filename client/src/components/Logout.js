import { useNavigate } from "react-router-dom"


export default function Logout() {
    const nav = useNavigate()
    localStorage.removeItem("token")
    nav("/home")
    window.location.reload(false)
}