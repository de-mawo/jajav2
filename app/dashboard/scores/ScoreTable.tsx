import scores from '../../../data/scores.json'

const ScoreTable = () => {
  return (
    <>
    <div className="dashboard_table mt-5 ">
               <div className="table-responsive "> 
                   <table className="table  align-middle mb-0 ">
                       <thead className="sticky-top bg-white">
                           <tr>
                               <th>Name</th>
                               <th>Surname</th>
                               <th>Business</th>
                               <th>Competition</th>
                               <th>Judge</th>
                               <th>Comments</th>
                               <th>Score </th>
                           </tr>
                       </thead>
                       <tbody>
                           {scores?.map(score => (
                               <tr key={score.id}>
                                   <td>{score.first_name}</td>
                                   
                                   <td>
                                       {score.last_name}
                                   </td>
                                   <td>{score.business_name}</td>
                                   <td >
                                    <span className='compete'>

                                    {score.competition}
                                    </span>
                                    
                                    </td>
                                   <td>
                                    <span className='judge'>{score.judge} </span>
                                    
                                   </td>
                                   <td className='text-wrap'>{score.comment}</td>
                                   <td >
                                    <span className='score'>{score.score}</span>
                                   
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

export default ScoreTable