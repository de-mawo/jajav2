import Link from 'next/link'
import { HiOutlineSquares2X2, HiOutlineUserGroup, HiOutlineCog6Tooth, HiOutlinePencilSquare, HiOutlineArrowRightOnRectangle} from "react-icons/hi2";
import Image from 'next/image';

type Props = {
    show: boolean;
  };

const SideBar = ({show}: Props) => {

    const Adminlinks = [
        { title: "Dashboard", url: "/dashboard", icon: <HiOutlineSquares2X2 /> },
        { title: "Marking", url: "/dashboard/marking", icon: <HiOutlinePencilSquare /> },
        { title: "Users", url: "/dashboard/users", icon: <HiOutlineUserGroup /> },
        { title: "Settings", url: "/dashboard/settings", icon: <HiOutlineCog6Tooth /> },
       
      ];

  return (
    <>
            <div className={`dash_sidebar ${show ? "review" : " "} `}>
                <nav className="dash_nav">
                    <div className="main_links">

                        <Image src='/img/jaja_logo2.png' width={100} height={100} alt='logo' className="nav_logo" />

                        {/* <Link className="nav_logo" href="/">
                     
                                <span className="nav_logo_name">Jaja </span>
                           
                        </Link> */}

                        <div className="nav_list mt-5">
                            {Adminlinks.map((link, index) => (
                                <Link className="nav_link" href={link.url} key={index}>
                                    <span className='link_icon fs-2'>
                                        {link.icon}
                                    </span>
                                    <span>{link.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <a href="#" className="nav_link">
                        {" "}
                        <HiOutlineArrowRightOnRectangle className="fs-2 link_icon"/> <span className="dash_nav_name">Logout</span>{" "}
                    </a>
                </nav>
            </div>
        </>
  )
}

export default SideBar