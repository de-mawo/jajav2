"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
const Year = new Date().getFullYear();

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: ''
  });
  const [loading, setLoading] = useState(false);

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
     const res = await axios.post(
        "/api/register",
        { name, surname, email, password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      if (res.status === 200) {
        setMessage({
          type: 'success',
          content: 'Registration Successfull.'
        });
        setLoading(false);
      }
      router.push('/')
    } catch (error: any) {
      
      // console.log(error.response.data.error)

      const message = error.response.data.error
      
      setMessage({ type: 'error', content: message });
      setLoading(false);
    }
      
      
           
        
        
    
    
      
    
  };

  // console.log(message);
  

  return (
    <div className=" d-flex align-items-center justify-content-center vh-100 pt_100 home_pg">
      <main className="auth_form">
       
            <form onSubmit={register}>
              <div className="text-center">
              <Image
              src="/img/jaja_logo2.png"
    
              width={90}
              height={90}

              alt="logo"
              className=" rounded-circle"
            />
                <h3>Register </h3>
                <p>Create a new account</p>
              </div>
              { message.content && 
              
                <span className={`${message.type === 'error' ? 'error_msg' : 'success_msg'}`}> <p>{message.content}</p></span>
              }

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
                disabled={loading}
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
