"use client";
import { ChangeEvent, useState } from "react";
import useSWR from "swr";
import { pointFetcher } from "../../../lib/fetcher";
import ScoreTable from "./ScoreTable";
import SearchBox from "./SearchBox";

const Scores = () => {
  const [query, setQuery] = useState("");
  const {
    data: points,
    error,
    mutate,
  } = useSWR(["/api/points/getPoints", query], pointFetcher);

  const [isCheck, setIsCheck] = useState(false);

  const [averagePoints, setAveragePoints] = useState([0]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleCheckAll = () => {
    let AverageArr: number[] = [];

    points?.forEach((point) => {
      if ((point.checked = !isCheck)) {
        AverageArr.push(point.totalPoints);

        setAveragePoints(AverageArr);
      } else setAveragePoints([0]);
    });

    setIsCheck(!isCheck);
  };

  const calcAverage =
    averagePoints.reduce((accumulator, curr) => accumulator + curr, 0) /
    averagePoints.length;

    const Average = Math.round(calcAverage * 100)/100
  return (
    <>
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
