import {useState} from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultformFields = {
    disaplayName: "", 
    email:"",
    password:"",
    confirmPassword:""
}


const SignUpForm = () => {
    const [formFields, setFormfields] = useState(defaultformFields);
    const {disaplayName,email, password, confirmPassword} = formFields;
    console.log(formFields)
    const handleChange = (e) => {
    const {name, value} = e.target;
    setFormfields({...formFields, [name]: value})
    }
    
    return (
       <div>
        <h1>Sign up with your email and Password</h1>
        <form action="" onSubmit={()=>{}}>
            <label htmlFor="">Display Name</label>
            <input required type="text" name="displayName" onChange={handleChange} value={disaplayName}/>
            <label htmlFor="">Email</label>
            <input required type="email" name="email" onChange={handleChange} value={email}/>
            <label htmlFor="">Password</label>
            <input required type="password" name="password" onChange={handleChange} value={password}/>
            <label htmlFor="">Confirm Password</label>
            <input required type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword}/>
            <button type="submit">Sign up</button>
        </form>
       </div> 
    )
}




export default SignUpForm