import users from '../../../data/user.json'
import Image from 'next/image'
import { HiPencil } from "react-icons/hi2";

const Users = () => {
  return (
    <>
    <div className="dashboard_table mt-5 ">
               <div className="table-responsive text-nowrap"> 
                   <table className="table  align-middle mb-0 text-center">
                       <thead className="sticky-top bg-white">
                           <tr>
                               <th>User Id</th>
                               <th>Avatar</th>
                               <th>First Name</th>
                               <th>Last Name</th>
                               <th>Email</th>
                               <th>Business Name</th>
                               <th>Role</th>
                               <th>Edit </th>
                           </tr>
                       </thead>
                       <tbody>
                           {users?.map(user => (
                               <tr key={user.id}>
                                   <td>{user.id}</td>
                                   <td>
                                       <picture> 
                                     <Image src={user.avatar} alt={user.first_name} width={50} height={50}   className="rounded-circle" />
                                       </picture>

                                   </td>
                                   <td>
                                       {user.first_name}
                                   </td>
                                   <td>
                                       {user.last_name}
                                   </td>
                                   <td>{user.email}</td>
                                   <td>{user.business_name}</td>
                                   <td>{user.role}</td>
                                   <td>
                                    <span className='edit_icon'>
                                    <HiPencil className='fs-5'/>
                                    </span>
                                     
                                   </td>
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
           </div>
   
   </>
  )
}

export default Users