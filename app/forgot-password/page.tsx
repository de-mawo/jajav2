"use client";

import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
const Year = new Date().getFullYear();

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "/api/requestPassReset",
         email ,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        setMessage({
          type: "success",
          content: "Success. Check your email to verify",
        });
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
            <h3>Forgot Password </h3>
            <p>Enter your email Address </p>
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
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email address</label>
              </div>

              <button
                className="w-100 default_btn"
                type="submit"
                disabled={loading}
              >
                Submit
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
  );
};

export default ForgotPassword;
