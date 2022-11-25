'use client';
import Link from "next/link";
import {getProviders,  signIn,  } from "next-auth/react";
import SignInwithProvider from "./SignInwithProvider";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Formik } from "formik";

const Year = new Date().getFullYear();

const Login = () => {


    const router = useRouter();

   
 
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async(actions: any) =>{
    actions.setSubmitting(false);
   const res = await signIn("credentials", {
     email: email,
     password: password,
     redirect: false,
     callbackUrl: `${window.location.protocol}/dashboard}`
    })
    //TODO: add a tooltip notification
    res?.error ? console.log(res.error) : router.push('/')
    
  }

  return (
    <Formik
    initialValues={{}} // { email: "", password: "" }
    validateOnChange={false}
    validateOnBlur={false}
    onSubmit={(_, actions) => {
      loginUser(actions);
    }}
  >
    {(props) => (
  <form>
    <div className="text-center">
      <h3>Welcome </h3>
      <p>Please Sign In.</p>
    </div>

    <div className="form-floating mt-2 mb-3">
    <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      <label htmlFor="email">Email address</label>
    </div>

    <div className="form-floating mt-2 mb-3">
     <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      <label htmlFor="password">Password</label>
    </div>
    <button className="w-100 default_btn" type="submit"   disabled={props.isSubmitting}>
      Sign in
    </button>
    {/* <p className="text-center"> or</p> */}
    {/* <SignInwithProvider providers={getProviders()} /> */}

    <p className="mt-5 mb-3 text-muted">
      No Account?{" "}
      <Link href="/signup" className="ps-2">
        Sign Up
      </Link>
    </p>

    <p className="mt-3 mb-3 text-muted">
      Forgot Password?{" "}
      <Link href="/password-reset" className="ps-2">
        Reset
      </Link>
    </p>

    <div className="mt-5 mb-3 text-center">
      <p className="text-muted">
        &copy; 
        <span className="pe-2"> {Year}</span>
        Jaja
      </p>
    </div>
  </form>
  )}
  </Formik>
  )
}

export default Login