import logo from '../logo.jpg'
import TextInput from "../components/shared/TextInput";
import {Link} from "react-router-dom";
import './login.css';
import PasswordInput from "../components/shared/PasswordInput";

const LoginComponent = () => {
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex items-center justify-center">
                <img src={logo} width="100" height="50" className="mr-2" />
                <h1 className="text-xl font-semibold text-center text-gray-800">Musiverse</h1>
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-4">
                    To continue, log in to Musiverse.
                </div>
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                    className="my-6"
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                />


                <div className=" w-full flex items-center justify-end my-8">
                    <button className="font-semibold p-3 px-10 rounded-full button ">
                        LOG IN
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/signup">SIGN UP FOR MUSIVERSE</Link>
                </div>
            </div>
        </div>


    )
};

export default LoginComponent;
