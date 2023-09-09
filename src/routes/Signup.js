import logo from '../logo.png'
import TextInput from "../components/shared/TextInput";
import "./login.css";
import {Link} from "react-router-dom";
import PasswordInput from "../components/shared/PasswordInput";

const SignupComponent = () => {

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex items-center justify-center">
                <img src={logo} width="60" height="60" className="mr-2" />
                <h1 className="text-2xl font-semibold text-center text-gray-800">Musiverse</h1>
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                <div className="font-bold mb-4 text-2xl">
                    Sign Up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                />

                <TextInput
                    label="Confirm email address"
                    placeholder="Enter your email again"
                    className="mb-6"
                />


                <PasswordInput
                    label="Password"
                    placeholder="Enter a strong password"
                    className="my-6"
                />

                <TextInput
                    label="What should we call you?"
                    placeholder="Enter a profile name"
                    className="my-6"
                />

                <div className=" w-full flex items-center justify-center my-8">
                    <button className="font-semibold p-3 px-10 rounded-full button ">
                        Sign Up
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                <Link to="/login">LOG IN INSTEAD</Link>
                </div>
            </div>
        </div>


    )
};

export default SignupComponent;
