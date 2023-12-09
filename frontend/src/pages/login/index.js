import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import validator from "validator";
import { login, register } from "@/services/apiService";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "@/context/user-context";

export default function Login({ children, isRegister = false, ...props }) {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(isRegister);
  const [errorMessage, setErrorMessage] = useState("Error!");
  const [isFailed, setIsFailed] = useState(false);

  const validateEmail = () => {
    const isValid = validator.isEmail(email);
    setIsEmailValid(isValid);
    setEmailErrorMessage(isValid ? "" : "Invalid email address");

    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 8;
    setIsPasswordValid(isValid);
    setPasswordErrorMessage(
      isValid ? "" : "Password must be at least 8 characters"
    );

    return isValid;
  };

  const validateName = () => {
    const isValid = name.length >= 3;
    setIsNameValid(isValid);
    setNameErrorMessage(isValid ? "" : "Name must be at least 3 characters");

    return isValid;
  };

  const validatePhone = () => {
    const isValid = validator.isMobilePhone(phone);
    setIsPhoneValid(isValid);
    setPhoneErrorMessage(isValid ? "" : "Invalid phone number");

    return isValid;
  };

  const handleLogin = () => {
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    const isLoginValid = emailValid && passwordValid;

    if (!isLoginValid) {return}

    setIsLoading(true);

    login(email, password).then((res) => {
      console.log(res);
      setUser(res);
      router.push("/"); // Redirect to home page
    }).catch((err) => {
      setIsFailed(true);
      setErrorMessage(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const handleRegister = () => {
    const nameValid = validateName();
    const phoneValid = validatePhone();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    const isRegisterValid = nameValid && phoneValid && emailValid && passwordValid;

    if (!isRegisterValid) {return}

    setIsLoading(true);

    register(name, email, password, phone).then((res) => {
      console.log(res);
      setUser(res);
      router.push("/"); // Redirect to home page
    }).catch((err) => {
      setIsFailed(true);
      setErrorMessage(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  const handleSetLogin = () => {
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setEmailErrorMessage("");
    setPasswordErrorMessage("");

    setIsRegistering(false);
  }

  const handleSetRegister = () => {
    setIsNameValid(true);
    setIsPhoneValid(true);
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setNameErrorMessage("");
    setPhoneErrorMessage("");
    setEmailErrorMessage("");
    setPasswordErrorMessage("");

    setIsRegistering(true);
  }

  return (
    <div className="flex min-h-screen relative items-start overflow-clip">
      <div className="w-screen relative flex-1 grow overflow-hidden min-w-[300px] h-screen max-w-[50%]">
        <Image
          src="https://source.unsplash.com/random"
          className="flex-1 object-cover w-full h-full"
          alt="CoSpace"
          priority
          fill={true}
          sizes="100vw 100vh"></Image>
      </div>
      <div className="w-screen flex flex-col items-center justify-center px-[64px] flex-1 grow relative self-stretch gap-5 overflow-y-scroll overflow-x-hidden max-w-[50%]">
        <h1 className="text-4xl font-bold py-6">
          {isRegistering ? "It's nice to meet you" : "Welcome back!"}
        </h1>
        {isRegistering && (
          <>
            <Input
              type="text"
              label="Name"
              variant="faded"
              value={name}
              isRequired={true}
              isInvalid={!isNameValid}
              errorMessage={nameErrorMessage}
              onBlur={validateName}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              label="Phone"
              variant="faded"
              value={phone}
              isRequired={true}
              isInvalid={!isPhoneValid}
              errorMessage={phoneErrorMessage}
              onBlur={validatePhone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}
        <Input
          type="email"
          label="Email"
          variant="faded"
          value={email}
          isRequired={isRegistering}
          isInvalid={!isEmailValid}
          errorMessage={emailErrorMessage}
          onBlur={validateEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          variant="faded"
          value={password}
          isRequired={isRegistering}
          isInvalid={!isPasswordValid}
          errorMessage={passwordErrorMessage}
          onBlur={validatePassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
            <span className={`text-red-500 text-sm ${!isFailed ? "hidden" : "visible"}`}>{errorMessage}</span>
        </p>
        <div className="flex flex-col pt-6 items-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
          {!isRegistering ? (
            <>
              <Link
                href="#"
                color="error"
                className="max-w-full text-tiny"
                underline="hover"
                as={NextLink}>
                Forgot password?
              </Link>
              <Button
                color="primary"
                onClick={handleLogin}
                isLoading={isLoading}
                className="w-full text-medium">
                Login
              </Button>
              <button
                className="max-w-full text-blue-600 hover:underline hover:text-blue-500"
                onClick={handleSetRegister}>
                Register
              </button>
            </>
          ) : (
            <>
              <Button
                color="primary"
                onClick={handleRegister}
                isLoading={isLoading}
                className="w-full text-medium">
                Register
              </Button>
              <button
                className="max-w-full text-blue-600 hover:underline hover:text-blue-500"
                onClick={handleSetLogin}>
                use existing account instead
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
