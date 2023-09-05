import Header from "./Header";
import {login_bg} from "../utils/ImageLinks";
import { useRef, useState } from "react";
import { validate } from "../utils/validate";
const Login=()=>{
    const[signupuser,setsignupuser]=useState(true);
    const[errors,seterrors]=useState();
    let email = useRef('');
    let password = useRef('');
    let name = useRef('');
    let mobile = useRef('');
    const submitform=(e)=>{
        e.preventDefault();
        const message=validate(email?.current?.value,password?.current?.value,name?.current?.value,mobile?.current?.value,signupuser);
        seterrors(message);


        console.log('srart');
    }
    const newuser=()=>{
        seterrors();
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
                    <input type="text" ref={name} placeholder="Full Name" className="w-full my-5 mb-0 p-3 bg-gray-800"/>
                    <span className={"text-red-500 text-sm"}>{errors?.name}</span>
                    <input type="mobile" ref={mobile} placeholder="Mobile" className="w-full my-5 mb-0 p-3 bg-gray-800"/>
                    <span className={"text-red-500 text-sm"}>{errors?.mobile}</span>
                    </>
                    )}
                    <input type="text" ref={email} placeholder="Enter Email Address" className="w-full my-5 mb-0 p-3 bg-gray-800"/>
                    <span className={"text-red-500 text-sm"}>{errors?.email}</span>
                    <input type="text" ref={password} placeholder="Enter Password" className="w-full my-5 p-3 mb-0 bg-gray-800"/>
                    <span className={"text-red-500 text-sm"}>{errors?.Password}</span>
                    {signupuser?<>
                    <button className={"bg-red-700 my-5 p-2 w-full"} onClick={submitform}>Sign In</button>

                    <p className={"my-5"}><span className={"text-sm"}>New on NetFlix?</span> <span onClick={newuser} className={'cursor-pointer mt-5 text-red-700'}> Sign up</span></p>
                    </>:<><button className={"bg-red-700 my-5 p-2 w-full"} onClick={submitform}>Sign Up</button>

                    <p className={"my-5"}><span className={"text-sm"}>Already Registered?</span> <span onClick={newuser} className={'cursor-pointer mt-5 text-red-700'}> Sign In</span></p>
                </>}
                </form>
            </div>
        </div>
    )
}
export default Login;