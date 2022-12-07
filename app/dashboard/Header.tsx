import Link from "next/link";
import Image from "next/image";
import { HiBars3 } from "react-icons/hi2";
import { signOut, useSession  } from "next-auth/react";
import { HiOutlineArrowRightOnRectangle, HiOutlineUserCircle } from "react-icons/hi2";


type Props = {
  show: boolean;
  showSideBar: () => void;
};

const Header = ({ show, showSideBar }: Props) => {
  const { data: session } = useSession();

 

  return (
    <>
      <section className={`dash_header   `}>
        <div className="dash_header_toggle">
          <HiBars3
            className={` ${show ? "bx-x" : " "}`}
            onClick={showSideBar}
          />
        </div>

        <div className="dropdown ">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={session?.user.image}
              width={50}
              height={50}
              className="avatar rounded-circle"
              alt="avatar"
            />
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
          >
            <li className="text-center">
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                className="avatar rounded-circle"
                alt="avatar"
              />
              <p className="dropdown-item   p-2">{session?.user?.name}</p>
            </li>
            <li>
              <Link href="/dashboard/profile" className="dropdown-item">
                <HiOutlineUserCircle className="fs-3"/>
                <span>My Profile </span>
              </Link>
            </li>
            <hr />
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => signOut({  callbackUrl: `/` })}
              >
                <HiOutlineArrowRightOnRectangle className="fs-2 link_icon" />{" "}
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
