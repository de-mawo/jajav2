'use client'

import { useSession } from "next-auth/react";
import useSWR from "swr";
import { myPointFetcher } from "../../../lib/fetcher";


const Profile = () => {
    const { data: session } = useSession();

    const email = session?.user.email
    const {
        data: points,
        error,
        mutate,
      } = useSWR(["/api/points/getPoints", email], myPointFetcher);


      console.log(points);
      
      const competitionName: string = "bip2022";

  return (
    <>
     
       
      <div className="dashboard_table mt-5 ">

        <div className="table-responsive ">
          <table className="table  align-middle mb-0 ">
            <thead className="sticky-top bg-white">
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Business</th>
                <th>Country</th>
                <th>Judge</th>
                <th>Comments</th>
                <th>Score </th>
                <th>Competition</th>
              </tr>
            </thead>
            <tbody>
              {points?.map((point) => (
                <tr key={point._id}>
                    <td>{point.email}</td>
                  <td>{point.name}</td>

                  <td>{point.surname}</td>
                  <td> {point.bizzName}</td>
                  <td>{point.country}</td>

                  <td>
                    <span className="judge">{point.judge} </span>
                  </td>
                  <td className="text-wrap">{point.comment}</td>
                  <td>
                    <span className="score">{point.totalPoints}</span>
                  </td>
                  <td>
                    <span className="compete">{competitionName}</span>
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

export default Profile