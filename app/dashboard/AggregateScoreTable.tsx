import { ScoreTypes } from "../../types"

type Props = {
    scores?: ScoreTypes[]
}

const AggregateScoreTable = ({scores}: Props) => {
  return (
    <>
    <div className="dashboard_table mt-5 ">
               <div className="table-responsive text-nowrap"> 
                   <table className="table  align-middle mb-0 text-center">
                       <thead className="sticky-top bg-white">
                           <tr>
                               <th>Name</th>
                               <th>Surname</th>
                               <th>Email</th>
                               <th>Business Name</th>
                               <th>Country</th>
                               <th>Aggregate Score</th>
                           </tr>
                       </thead>
                       <tbody>
                           {scores?.map(score => (
                               <tr key={score._id}>
                                   
                                   <td>
                                       {score.name}
                                   </td>
                                   <td>
                                       {score.surname}
                                   </td>
                                   <td>{score.email}</td>
                                   <td>{score.bizzName}</td>
                                   <td>
                                       {score.country}
                                   </td>
                                   <td>{score.Average}</td>
                                 
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
           </div>
   
   </>
  )
}

export default AggregateScoreTable