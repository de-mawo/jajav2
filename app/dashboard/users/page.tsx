'use client'
import Image from 'next/image'
import { HiPencil } from "react-icons/hi2";
import useSWR from 'swr';
import userFetcher from '../../../lib/fetchUsers';
import { UserTypes } from '../../../types';






export default  function Users  () {

    const { data: users, error, mutate} = useSWR("/api/user/user", userFetcher)

   

    
    
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
                               <tr key={user._id}>
                                   <td>{user._id}</td>
                                   <td>
                                       <picture> 
                                     <Image src={user.image} alt={user.name} width={50} height={50}   className="rounded-circle" />
                                       </picture>

                                   </td>
                                   <td>
                                       {user.name}
                                   </td>
                                   <td>
                                       {user.surname}
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



