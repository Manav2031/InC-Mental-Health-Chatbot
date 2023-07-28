import axios from "axios"

const registerEndpoint='user/register';
const loginEndpoint='user/login';

const authRegister=async(userData)=>{
    const response= await axios.post(registerEndpoint,userData);

    if(response.data){
        const user=localStorage.setItem('user',JSON.stringify(response.data));
    }

}

const authLogin=async(userData)=>{
    const response=await axios.post(loginEndpoint,userData);

    if(response.data){
        const user=localStorage.setItem('user',JSON.stringify(response.data));
    }
}

const logout = () => {
    localStorage.removeItem('user')
  }

export default authService={
    authRegister,
    authLogin
} 
