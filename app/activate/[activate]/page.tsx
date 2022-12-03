"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
type PageProps = {
  params: { activate: string };
};

const ActivateAcc = ({ params: { activate } }: PageProps) => {
  const router = useRouter();

  (async () => {
    const notification = toast.loading("Verifying...");
    try {
      const res = await axios.post("/api/activateAccount", activate, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        toast.success("Email Verified.", {
          id: notification,
        });
        router.push("/");
      }
    } catch (error: any) {
      toast.error("Something Went Wrong !", {
        id: notification,
      });
    }
  })();

  return <div> loading ...</div>;
};

export default ActivateAcc;
