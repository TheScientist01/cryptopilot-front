import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button"

const Header=()=>{

    const navigate=useNavigate();

    return(
        <header className="flex justify-between py-7 w-[85%] mx-auto">
            <div className="text-2xl font-bold">
                Logo
            </div>
            <div className="flex gap-3">
                <Button onClick={()=>{navigate("/auth/login")}} className="bg-transparent text-black" label="Log in" />
                <Button onClick={()=>{navigate("/auth/register")}} label="Sign up" isDark />
            </div>
        </header>
    )
}

export default Header;