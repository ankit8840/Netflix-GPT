import Header from "./Header";
import {login_bg} from "../utils/ImageLinks";
import { useState } from "react";
const Login=()=>{
    const[signupuser,setsignupuser]=useState(true);
    const newuser=()=>{
        setsignupuser(!signupuser);
    }
    return (
        <div>
            <Header/>
            <div>
                <div className={"absolute"}>
                <img src={login_bg}></img>
                </div>
                <form className={"w-3/12 absolute bg-opacity-80 bg-black my-36 p-12 mx-auto left-0 right-0 text-white "}>
                    <p className={"text-3xl"}>{signupuser?"Sign In":"Sign Up"}</p>
                    {!signupuser && (<>
                    <input type="text" placeholder="Full Name" className="w-full my-5 p-3 bg-gray-800"/>
                    <input type="text" placeholder="Password" className="w-full my-5 p-3 bg-gray-800"/>
                    </>
                    )}
                    <input type="text" placeholder="Enter Email Address" className="w-full my-5 p-3 bg-gray-800"/>
                    <input type="text" placeholder="Enter Password" className="w-full my-5 p-3 bg-gray-800"/>
                    {signupuser?<>
                    <button className={"bg-red-700 my-5 p-2 w-full"}>Sign In</button>

                    <p className={"my-5"}><span className={"text-sm"}>New on NetFlix?</span> <span onClick={newuser} className={'cursor-pointer mt-5 text-red-700'}> Sign up</span></p>
                    </>:<><button className={"bg-red-700 my-5 p-2 w-full"}>Sign Up</button>

                    <p className={"my-5"}><span className={"text-sm"}>Already Registered?</span> <span onClick={newuser} className={'cursor-pointer mt-5 text-red-700'}> Sign In</span></p>
                </>}
                </form>
            </div>
        </div>
    )
}
export default Login;