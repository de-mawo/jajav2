'use client'
import users from '../../../data/user.json'
import Image from 'next/image'
import { HiPencilSquare } from "react-icons/hi2";
import MarkingModal from './MarkingModal';
import useSWR from 'swr';
import userFetcher from '../../../lib/fetchUsers';
import { useState } from 'react';


const Marking = () => {

    const { data: users, error, mutate} = useSWR("/api/user/user", userFetcher)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [bizzName, setBizzName] = useState('')

    const setUserDetails = (name: string, surname: string, bizzName: string) => {
        setName(name)
        setBizzName(bizzName)
        setSurname(surname)
    }

  
  
  return (
    <>
     <div className="dashboard_table mt-5 ">
                <div className="table-responsive text-nowrap"> 
                    <table className="table align-middle mb-0 text-center">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th>User Id</th>
                                <th>Avatar</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Business Name</th>
                                <th>Mark </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>
                                        <picture> 
                                      <Image src={user.image} alt={user.image} width={50} height={50}   className="rounded-circle" />
                                        </picture>

                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.surname}
                                    </td>
                                    <td>{user.business_name}</td>
                                    <td> 
                                    <span className='edit_icon'>
                                    <HiPencilSquare
                                    onClick={() => setUserDetails(user.name, user.surname, user.business_name)}
                                     className='fs-5' 
                                     data-bs-toggle="modal"
                                      data-bs-target="#GradeRubricModal"
                                      />
                                    </span>
                                    </td>
                                </tr>
                                
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> 
            <MarkingModal name={name} surname={surname} bizzName={bizzName} />
    </>
  )
}

export default Marking