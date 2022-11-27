"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
const Year = new Date().getFullYear();

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [message , setMessage] = useState('')

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       await axios.post(
        "/api/register",
        { name, surname, email, password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then().catch(error => {
        setMessage(error.message);
        console.log(error.response.data.error);
        
        
      })
     router.push('/')
      
    
  };

  console.log(message);
  

  return (
    <div className=" d-flex align-items-center justify-content-center vh-100 pt_100 home_pg">
      <main className="auth_form">
       
            <form onSubmit={register}>
              <div className="text-center">
                <h3>Register </h3>
                <p>Create a new account</p>
              </div>
                <span className="error_msg"> <p>{message}</p></span>
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
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="form-floating mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <label htmlFor="surname">Surname</label>
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
              <button
                className="w-100 default_btn"
                type="submit"
                
              >
                Sign up
              </button>

              <p className="mt-5 mb-3 text-muted">
                Already Registered?{" "}
                <Link href="/" className="ps-2">
                  Login
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
       
      </main>
    </div>
  );
};

export default SignUp;
