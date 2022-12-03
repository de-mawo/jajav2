'use client'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react';
import { HiPencil } from "react-icons/hi2";
import useSWR from 'swr';
import {userFetcher} from '../../../lib/fetcher';
import SearchBox from '../SearchBox';


export default  function Users  () {

    const [query, setQuery] = useState("");

    const { data: users, error, mutate} = useSWR(["/api/user/user", query], userFetcher)

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
      };  
  return (
    <>
    <SearchBox onChangeSearch={onChangeSearch}/>
    <div className="dashboard_table mt-5 ">
               <div className="table-responsive text-nowrap"> 
                   <table className="table  align-middle mb-0 text-center">
                       <thead className="sticky-top bg-white">
                           <tr>
                               <th>User Id</th>
                               <th>Avatar</th>
                               <th>First Name</th>
                               <th>Country</th>
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
                                   <td>
                                       {user.country}
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



