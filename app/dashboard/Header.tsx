import Link from "next/link";
import Image from "next/image";
import { HiBars3} from "react-icons/hi2";
import { useSession } from "next-auth/react";



type Props = {
    show: boolean;
    showSideBar: () => void;
  };


const Header = ({show, showSideBar}: Props) => {

    const { data: session } = useSession()

  return (
    <>
    <section className={`dash_header   `}>
        <div className="dash_header_toggle">
            <HiBars3 className={` ${show ? "bx-x" : " "}`} onClick={showSideBar} />
        </div>

    

        <div className="dropdown ">
            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src="/img/propic.jpg" width={50} height={50} className="avatar rounded-circle" alt="avatar" />
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                <li className="text-center">
                    <Image src="/img/propic.jpg" width={40} height={40} className="avatar rounded-circle" alt="avatar" />
                    <p className="dropdown-item   p-2">{session?.user?.name}</p>
                </li>
                <li>
                    <Link  href="/my-account" className="dropdown-item">
                    
                        <i className="ri-user-line"></i> <span>Profile </span>
                                       </Link>
                    
                </li>
                <hr />
                <li>
                    <a className="dropdown-item" href="#">
                        <i className="ri-logout-circle-line"></i> <span>Logout</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</>
  )
}

export default Header