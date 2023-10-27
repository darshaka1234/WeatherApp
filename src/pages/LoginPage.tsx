import Lottie from "lottie-react";
import LoginForm from "../components/LoginForm";
import login from "../assets/lotties/login.json";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen ">
      <div className="flex justify-center items-center w-full">
        <LoginForm />
      </div>
      <div className="flex justify-center items-center">
        <Lottie className="max-w-8xl" animationData={login} loop={true} />
      </div>
    </div>
  );
};

export default LoginPage;
