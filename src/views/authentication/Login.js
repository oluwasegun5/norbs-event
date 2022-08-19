import passwordIcon from "../../assets/password.svg"
import emailIcon from "../../assets/email.svg"
import "./authentication.css"
import { useState } from "react"
import Input from "../../components/reusable/Input";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    let navigate = useNavigate()
    const [userInput,setUserInput] = useState({})
    const[fieldError,setFieldError] = useState(
        {
            email:{message: "",error: false},
            password:{message: "",error: false}
    }
    
    )
    const handleChange= (e)  =>{
        setUserInput ({...userInput,[e.target.name]: e.target.value})
        checkIfFeildIsEmpty(e)
    }

    const handleClick = () =>{
        axios.get(`http://localhost:5000/accounts?email=${userInput["email"]}`,userInput).
        then((result) => {
            result.data[0].password === userInput["password"] && navigate("/dashboard")
        })
        .catch((error) => console.log(error))
    }

    const checkIfFeildIsEmpty =(e) =>{
        switch(e.target.name){
            case "email":
                if(e.target.value === ""){
                    setFieldError({
                        ...fieldError,[e.target.name] :{
                            message:"please enter a vaild email",
                            error:true
                        }
                    })
                }else{
                    setFieldError({
                        ...fieldError,[e.target.name]:{
                            message: "",
                            error:false
                        }
                    })
                }
                break;
            case "password":
                if(e.target.value === ''){
                    setFieldError(
                        {...fieldError,
                            [e.target.name] :{
                                message:"please enter a password",
                            error: true
                            }
                        } )
                }else{
                    setFieldError({
                        ...fieldError,[e.target.name]:{
                            message: "",
                            error:false
                        }
                    })
                }
                break;
            default:
                break;
        }
        if(e.target.value === '')return true
    }

    return(
        <div className="authenticationContainer">
            <div className="leftSide">
                <div className="leftSide-container">
                    <a onClick={() => navigate("/register")}>
                        Dont  Have an account?
                        <span style={{
                            color:'var(--primary_green',
                            marginLeft:'4px'
                        }}>
                            Sign in
                        </span>
                    </a>
                    <div className='welcome-text'>
                        <h1>Welcome To Norbs</h1>
                        <p>We are an event management platform,
                            aimed at helping you facilities and run a smooth event</p>
                    </div>
                    <div className="input-button-fields">
                    <Input text="email" handleChange={handleChange} icon={emailIcon} label="email"  fieldError={fieldError}/>
                    <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password" fieldError={fieldError}/>
                    <button  className="authentication-button"onClick={handleClick}>Get Into Norbs</button>
                    </div>
                  
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightSide">
            
            </div>
        </div>
    )
}
export default Login  