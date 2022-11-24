'use client'
import users from '../../../data/user.json'
import Image from 'next/image'
import { HiPencilSquare } from "react-icons/hi2";
import MarkingModal from './MarkingModal';


const Marking = () => {


  
  
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
                                    <td>{user.business_name}</td>
                                    <td> 
                                    <span className='edit_icon'>
                                    <HiPencilSquare className='fs-5 ' data-bs-toggle="modal" data-bs-target="#GradeRubricModal"/>
                                    </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <MarkingModal/>
    </>
  )
}

export default Marking