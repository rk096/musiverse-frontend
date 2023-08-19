import logo from '../logo.jpg'


const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
    <div className="logo p-5 border-b border-solid border-gray-300 w-full flex items-center justify-center">
        {/* <Icon icon="logos:spotify" width="150" /> */}
        <img src={logo} width="100" height="50" className="mr-2" />
        <h1 className="text-xl font-semibold text-center text-gray-800">Musiverse</h1>
    </div>
</div>

    
    )
};

export default LoginComponent;
