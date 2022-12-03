'use client'

import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from 'react'
import Image from "next/image";
import axios from 'axios';
import toast from 'react-hot-toast';

const Year = new Date().getFullYear();

type PageProps = {
    params: { reset: string };
  };

const ResetPassword = ({ params: { reset } }: PageProps) => {

    const router = useRouter();

    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [message, setMessage] = useState<{ type?: string; content?: string }>({
      type: "",
      content: "",
    });
    const [loading, setLoading] = useState(false);

    const validPass = (password: string, confPassword: string ) => {
        if (password.length < 8) return "Password must be at least 8 characters.";
        if (password !== confPassword) return "Confirm password did not match.";
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const notification = toast.loading("Resetting...");
        try {

            const errMsg = validPass(password, confPassword);
            if(errMsg) return setMessage({type: 'error', content: errMsg})

          const res = await axios.patch(
            "/api/resetPassword",
             {reset, password} ,
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          if (res.status === 200) {
            toast.success("Email Verified.", {
                id: notification,
              });
              router.push("/");
            setLoading(false);
          }
        } catch (error: any) {
          // console.log(error.response.data.error)
    
          const message = error.response.data.error;
    
          setMessage({ type: "error", content: message });
          setLoading(false);
        }
      };
    
  return (
    <div className=" d-flex align-items-center justify-content-center vh-100 pt_100 home_pg">
      <main className="auth_form">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <Image
              src="/img/jaja_logo2.png"
              width={90}
              height={90}
              alt="logo"
              className=" rounded-circle"
            />
            <h3>Change Password </h3>
            <p>Set New Password </p>
          </div>
          {message.content && (
            <span
              className={`${
                message.type === "error" ? "error_msg" : "success_msg"
              }`}
            >
              {" "}
              <p>{message.content}</p>
            </span>
          )}
          {message.type === "success" ? null : (
            <>
              <div className="form-floating mt-2 mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">New Password</label>
              </div>

              <div className="form-floating mt-2 mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="conf_password"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
                <label htmlFor="conf_password">Confirm Password</label>
              </div>

              <button
                className="w-100 default_btn"
                type="submit"
                disabled={loading}
              >
                Reset
              </button>
            </>
          )}

          <p className="mt-5 mb-3 text-muted">
            Know your password?{" "}
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
  )
}

export default ResetPassword