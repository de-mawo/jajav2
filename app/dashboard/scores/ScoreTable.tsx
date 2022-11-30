
import useSWR from "swr";
import scores from "../../../data/scores.json";
import { pointFetcher } from "../../../lib/fetcher";
import SearchBox from "./SearchBox";
import { HiOutlineSearch, HiOutlineCursorClick } from "react-icons/hi";
import { useState } from "react";
import { PointTypes } from "../../../types";
import AwardModal from "./AwardModal";

type Props = {
    points: PointTypes[];
    isCheck: boolean;
    // handleCheck: () => void;
    handleCheckAll: () => void;
    Average: number;
}


const ScoreTable = ({points, isCheck, handleCheckAll, Average}: Props) => {


  const [name, setName] = useState('')
    const [surname, setSurname] = useState('')   
    const [bizzName, setBizzName] = useState('')
    const [country, setCountry] = useState('')

const setScoreDetails = (name: string, surname: string,bizzName: string, country: string) => {
        setName(name)
        setSurname(surname)
        setCountry(country)
        setBizzName(bizzName)

}
 
//TODO: Remove this competitionName from being hard Coded
    const competitionName: string = "bip2022";
  return (
    <>
     
       
      <div className="dashboard_table mt-5 ">
        <div className="point_calc container p-4">
          <div className="fw-bold">
            <span>Select All </span>
            <input className="form-check-input" type="checkbox" checked={isCheck}  onChange={handleCheckAll} />
          </div>
         
          <div className="">
            <span className="fw-bold"> Average: {Average}</span>
          </div>
        </div>

        <div className="table-responsive ">
          <table className="table  align-middle mb-0 ">
            <thead className="sticky-top bg-white">
              <tr>
              <th></th>
                <th>Name</th>
                <th>Surname</th>
                <th>Business</th>
                <th>Country</th>
                <th>Judge</th>
                <th>Comments</th>
                <th>Score </th>
                <th>Competition</th>
                <th>Award</th>
              </tr>
            </thead>
            <tbody>
              {points?.map((point) => (
                <tr key={point._id}>
                    <td>  <input className="form-check-input"  type="checkbox" checked={isCheck} readOnly/></td>
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
                  <td>
                  <span className='edit_icon'>
                                    <HiOutlineCursorClick
                                    onClick={() => setScoreDetails(point.name, point.surname,point.bizzName,point.country )}
                                     className='fs-5' 
                                     data-bs-toggle="modal"
                                      data-bs-target="#AwardModal"
                                      />
                                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AwardModal name={name} surname={surname} Average={Average} bizzName={bizzName} country={country}/>
    </>
  );
};


export default ScoreTable
