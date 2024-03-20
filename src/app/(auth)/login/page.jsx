"use client";
import { useGlobalContext } from "@/Hooks/globalStates";
import Button from "@/components/Reusablecomponents/Button";
import Input from "@/components/Reusablecomponents/Input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getLoggername, setAuth } from "@/helpers/token";
import { useLayoutEffect } from "react";

const Login = () => {
  const { email, password, setEmail, setPassword, loading, setLoading } =
    useGlobalContext();
  const router = useRouter();
  const username = getLoggername();
  async function loginHandler(e) {
    e.preventDefault();
    setLoading(true);
    const response = await axios.get("http://localhost:3500/credentials");
    console.log(response, "getuserslogin");
    const isUserExists = response.data.filter(
      (user, i) => user.email === email
    );
    console.log(isUserExists, "user");
    if (isUserExists) {
      setAuth(isUserExists[0].name);
      router.push("/");
    } else {
      console.log("user not exist");
      router.push("/register");
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  }

  useLayoutEffect(() => {
    if (username) {
      router.push("/");
    }
  }, []);
  return (
    <div className=" h-screen flex justify-center pt-24">
      <div className="w-[576px] h-[614px] flex flex-col  items-center gap-6 border border-solid border-[#c7c7c7] rounded-xl py-8">
        <h1 className="text-2xl font-bold ">Login</h1>
        <div>
          <h2 className="text-xl font-bold tracking-wider">
            Welcome back to ECOMMERCE
          </h2>
          <p className="font-semibold text-md text-center">
            The next gen bussiness marketplace
          </p>
        </div>
        <form action="" className="flex flex-col gap-4">
          <Input label="Email" type="email" val={email} setVal={setEmail} />
          <Input
            label="Password"
            type="password"
            val={password}
            setVal={setPassword}
          />
          <Button
            type={loading ? "Please wait..." : "LOGIN"}
            onClick={loginHandler}
          />
          <hr className=" w-full mt-4" />
        </form>
        <p>
          Dont you Have an Account?&nbsp;&nbsp;
          <Link href="/register">
            <span className="font-bold cursor-pointer">SIGN UP</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
