import {Netflix_logo} from "../utils/ImageLinks";
const Header=()=>{
    return(
        <div>
            <div className={"absolute bg-gradient-to-b from-gray-800 to-white-900 z-40"}>
                <img className={"w-56 my-2 ml-5"} src={Netflix_logo} alt="Netflix"></img>
            </div>
        </div>
    )
}
export default Header