export const validate=(email,Password,name,mobile,signupuser)=>{
    console.log(email);
    console.log(Password);
    console.log(name);
    console.log(mobile);
    let mobileV = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/.test(mobile);
    let nameV =/^[a-zA-Z ]{2,30}$/.test(name);
    let PasswordV =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(Password);
    let emailV = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    let mobmess ='';
    let namemess ='';
    let Passwordmess ='';
    let emailmess ='';
    if(!mobileV){
        mobmess="❗️"+"Mobile Number Not Valid";
    }
    if(!nameV){
        namemess="❗️"+"Name Not Valid";
    }
    console.log(PasswordV);
    if(!PasswordV){
        Passwordmess="❗️"+"Password Not Valid";
    }
    if(!emailV){
        emailmess="❗️"+"Email Not Valid";
    }
   if(signupuser){
    const obj = {
        Password:Passwordmess,
        email:emailmess
    }
    return obj;
   }else{
    const obj = {
        mobile:mobmess,
        name:namemess,
        Password:Passwordmess,
        email:emailmess
    }
    return obj;
   }
   
}