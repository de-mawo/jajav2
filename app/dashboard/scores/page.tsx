"use client";
import { ChangeEvent, useEffect, useState } from "react";
import useSWR from "swr";
import { pointFetcher } from "../../../lib/fetcher";
import { PointTypes } from "../../../types";
import ScoreCards from "./ScoreCards";
import ScoreTable from "./ScoreTable";
import SearchBox from "./SearchBox";

// type Props = {
//   points: PointTypes[]
// }

const Scores = () => {
  const [query, setQuery] = useState("");
  const {
    data: points,
    error,
    mutate,
  } = useSWR(["/api/points/getPoints", query], pointFetcher);

  const [isCheck, setIsCheck] = useState(false);
  // const [data, setData] = useState<PointTypes[] | undefined>([]);

  const [averagePoints, setAveragePoints] = useState([0]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // const keys = ["name", "surname", "bizzName", "country", "judge"];
  // const search = (data: any[]) => {
  //   return data?.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

  // This function makes sure that if HandleCheckAll is called , only
  // const handleCheck = (id: number) => {
  //   //on selects the unchecked items
  //   points?.forEach((point) => {
  //     if (point._id === id) point.checked = !point.checked;
  //   });
  //   // setData({ ...data });
  // };

  const handleCheckAll = () => {
    let AverageArr: number[] = [];

    points?.forEach((point) => {
      if ((point.checked = !isCheck)) {
        AverageArr.push(point.totalPoints);

        setAveragePoints(AverageArr);
      } else setAveragePoints([0]);
    });
    //   setData({ ...data });
    // console.log(data);

    setIsCheck(!isCheck);
  };

  const Average =
    averagePoints.reduce((accumulator, curr) => accumulator + curr, 0) /
    averagePoints.length;

  return (
    <>
      {/* <ScoreCards /> */}
      <SearchBox onChangeSearch={onChangeSearch} />
      <ScoreTable
        points={points!}
        isCheck={isCheck}
        handleCheckAll={handleCheckAll}
        Average={Average}
      />
    </>
  );
};

export default Scores;
// handleCheck={handleCheck}
