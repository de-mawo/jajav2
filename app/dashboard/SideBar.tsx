import Link from "next/link";
import {
  HiOutlineSquares2X2,
  HiOutlineUserGroup,
  HiOutlineCog6Tooth,
  HiOutlinePencilSquare,
  HiOutlineArrowRightOnRectangle,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
// import { unstable_getServerSession } from "next-auth";

type Props = {
  show: boolean;
};

const SideBar = ({ show }: Props) => {
  const { data: session } = useSession();

  // console.log(session);

  return (
    <>
      <div className={`dash_sidebar ${show ? "review" : " "} `}>
        <nav className="dash_nav">
          <div className="main_links">
            <Image
              src="/img/jaja_logo2.png"
              width={50}
              height={50}
              alt="logo"
              className="rounded-circle"
            />

            <div className="nav_list mt-5">
              <Link className="nav_link" href={"/dashboard"}>
                <span className="link_icon fs-2">
                  {" "}
                  <HiOutlineSquares2X2 />{" "}
                </span>
                <span className="ps-4"> Dashboard </span>
              </Link>
              {session?.user.role === "user" ? null : (
                <>
                  <Link className="nav_link" href="/dashboard/marking">
                    <span className="link_icon fs-2">
                      <HiOutlinePencilSquare />
                    </span>
                    <span className="ps-4">Marking</span>
                  </Link>
                  <Link className="nav_link" href="/dashboard/users">
                    <span className="link_icon fs-2">
                      {" "}
                      <HiOutlineUserGroup />
                    </span>
                    <span className="ps-4">Users</span>
                  </Link>
                  <Link className="nav_link" href="/dashboard/scores">
                    <span className="link_icon fs-2">
                      <HiOutlinePresentationChartLine />
                    </span>
                    <span className="ps-4">Scores</span>
                  </Link>
                  <Link className="nav_link" href="/dashboard/settings">
                    <span className="link_icon fs-2">
                      <HiOutlineCog6Tooth />
                    </span>
                    <span className="ps-4">Settings</span>
                  </Link>
                </>
              )}
            </div>
          </div>
          <a
            href="#"
            className="nav_link"
            onClick={() => signOut({ callbackUrl: `/` })}
          >
            {" "}
            <HiOutlineArrowRightOnRectangle className="fs-2 link_icon" />
            <span className="dash_nav_name ps-4">Logout</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
