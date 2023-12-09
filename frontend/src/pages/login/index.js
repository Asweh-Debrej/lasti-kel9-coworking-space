import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
  };

  return (
    <div className="flex min-h-screen relative items-start overflow-hidden">
      <div className="w-screen relative flex-1 grow overflow-hidden min-w-[300px] h-screen max-w-[50%]">
        <Image
          src="https://source.unsplash.com/random"
          className="flex-1 object-cover w-full h-full"
          priority
          fill={true}></Image>
      </div>
      <div className="w-screen flex flex-col items-center justify-center px-[64px] flex-1 grow relative self-stretch gap-5 overflow-hidden max-w-[50%]">
        <h1 className="text-4xl font-bold py-6">Welcome back!</h1>
        <Input
          type="email"
          label="Email"
          variant="faded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          variant="faded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col pt-6 items-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
          <Link href="/" color="error" className="max-w-full text-tiny" as={NextLink}>
            Forgot password?
          </Link>
          <Button color="primary" onClick={handleLogin} isLoading={isLoading} className="w-full text-medium">
            Login
          </Button>
          <Link href="/" color="error" className="max-w-full" as={NextLink}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
