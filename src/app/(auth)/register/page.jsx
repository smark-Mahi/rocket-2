"use client";
import OTP from "@/components/OTP";
import Button from "@/components/Reusablecomponents/Button";
import Input from "@/components/Reusablecomponents/Input";
import axios from "axios";
import { getLoggername, setAuth } from "@/helpers/token";
import Link from "next/link";
import { useGlobalContext } from "@/Hooks/globalStates";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const userName = getLoggername();
  const router = useRouter();
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    loading,
    setLoading,
  } = useGlobalContext();

  async function createUserHandler(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setLoading(true);
      const response = await axios.post("http://localhost:3500/credentials", {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      setAuth(response.data.name);
    }
  }

  useLayoutEffect(() => {
    if (userName) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {!userName ? (
        <div className=" h-screen flex justify-center pt-24">
          <div className="w-[576px] h-[691px] flex flex-col  items-center gap-6 border border-solid border-[#c7c7c7] rounded-xl py-8">
            <h1 className="text-2xl font-bold ">Create your account</h1>
            <form action="" className="flex flex-col gap-4">
              <Input label="Name" type="text" val={name} setVal={setName} />
              <Input label="Email" type="email" val={email} setVal={setEmail} />
              <Input
                label="Password"
                type="password"
                val={password}
                setVal={setPassword}
              />
              <Button
                type={loading ? "Please wait..." : "CREATE ACCOUNT"}
                onClick={createUserHandler}
              />
            </form>
            <p>
              Have an Account?&nbsp;&nbsp;
              <Link href="/login">
                <span className="font-bold cursor-pointer">LOGIN</span>
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <OTP />
      )}
    </>
  );
};

export default Register;
