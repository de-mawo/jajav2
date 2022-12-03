'use client'
import Image from 'next/image'
import { HiPencilSquare } from "react-icons/hi2";
import MarkingModal from './MarkingModal';
import useSWR from 'swr';
import {userFetcher} from '../../../lib/fetcher';
import { ChangeEvent, useState } from 'react';
import SearchBox from '../SearchBox';



const Marking = () => {
   
    const [query, setQuery] = useState("");

    const { data: users, error, mutate} = useSWR(["/api/user/user", query], userFetcher)

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
      };  



    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [bizzName, setBizzName] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const setUserDetails = (name: string, surname: string, bizzName: string, country: string, email: string) => {
        setName(name)
        setBizzName(bizzName)
        setSurname(surname)
        setCountry(country)
        setEmail(email)
        
    }

   
  
  
  return (
    <>
    <SearchBox onChangeSearch={onChangeSearch}/>
     <div className="dashboard_table mt-5 ">
                <div className="table-responsive text-nowrap"> 
                    <table className="table align-middle mb-0 text-center">
                        <thead className="sticky-top bg-white">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Avatar</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Business Name</th>
                                <th>Mark </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(user => (
                                <tr key={user._id}>
                                    <td>
                                        {user.name} 
                                    </td>
                                    <td>
                                        {user.surname}
                                    </td>
                                    <td>
                                        <picture> 
                                      <Image src={user.image} alt={user.image} width={50} height={50}   className="rounded-circle" />
                                        </picture>

                                    </td>
                                    <td>{user.email} </td>
                                    
                                    <td>
                                        {user.country}
                                    </td>
                                    <td>{user.business_name}</td>
                                    <td> 
                                    <span className='edit_icon'>
                                    <HiPencilSquare
                                    onClick={() => setUserDetails(user.name, user.surname, user.business_name, user.country, user.email)}
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
            <MarkingModal name={name} surname={surname} email={email} bizzName={bizzName} country={country}  />
    </>
  )
}

export default Marking