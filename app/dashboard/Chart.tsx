'use client'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { HiChartBar } from "react-icons/hi2";
import { ScoreTypes } from "../../types";

type Props = {
  scores?: ScoreTypes[]
}

const Chart = ({scores}: Props) => {
  



  return (
    <>
      <div className="chart_wrap  mt-5">
        <div className="sales_overview d-flex align-items-center">
          <div className="flex-grow-1">
            <h6 className="overview_content">
             Competition Results
             <HiChartBar className="results_i ms-3 fs-3 "/>
              <span className="comp_name ms-3">bip2022</span>
            </h6>
          </div>

          <div className="flex-shrink-0 align-self-center">
            <ul>
              <li>
                <span>Total Participants</span>
                <h6 className="this-month">63</h6>
              </li>
              <li>
                <span>Aggregate Score</span>
                <h6 className="aggregate_score">25.3</h6>
              </li>
            </ul>
          </div>
        </div>

        <div className="chart_area  ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={scores}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Average" fill="#208AFF" />
              {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Chart;



// const data = [
//   {
//     first_name: "Shaine",
//     last_name: "Valenta",
//     aggregate_score: 14
//   },
//   {
//     first_name: "Englebert",
//     last_name: "Whebell",
//     aggregate_score: 20
//   },
//   {
//     first_name: "Inger",
//     last_name: "Ingleson",
//     aggregate_score: 19
//   },
//   {
//     first_name: "Griffith",
//     last_name: "Kern",
//     aggregate_score: 22
//   },
//   {
//     first_name: "Emmalynn",
//     last_name: "Harston",
//     aggregate_score: 32
//   },
//   {
//     first_name: "Clayson",
//     last_name: "Santoro",
//     aggregate_score: 19
//   },
//   {
//     first_name: "Matt",
//     last_name: "Gard",
//     aggregate_score: 12
//   },
//   {
//     first_name: "Beverly",
//     last_name: "Godbold",
//     aggregate_score: 12
//   },
//   {
//     first_name: "Wittie",
//     last_name: "Mineghelli",
//     aggregate_score: 32
//   },
//   {
//     first_name: "Worthington",
//     last_name: "Cultcheth",
//     aggregate_score: 35
//   },
//   {
//     first_name: "Mahmoud",
//     last_name: "Antcliff",
//     aggregate_score: 15
//   },
//   {
//     first_name: "Natty",
//     last_name: "Sinnock",
//     aggregate_score: 28
//   },
//   {
//     first_name: "Florie",
//     last_name: "Mc Pake",
//     aggregate_score: 30
//   },
//   {
//     first_name: "Marybeth",
//     last_name: "Stoodley",
//     aggregate_score: 23
//   },
//   {
//     first_name: "Rhona",
//     last_name: "Leese",
//     aggregate_score: 25
//   },
//   {
//     first_name: "Temple",
//     last_name: "O'Toole",
//     aggregate_score: 20
//   },
//   {
//     first_name: "Helaine",
//     last_name: "Stimpson",
//     aggregate_score: 22
//   },
//   {
//     first_name: "Gertruda",
//     last_name: "McKennan",
//     aggregate_score: 21
//   },
//   {
//     first_name: "Amelina",
//     last_name: "Gwynne",
//     aggregate_score: 34
//   },
//   {
//     first_name: "Kristin",
//     last_name: "Tommasetti",
//     aggregate_score: 26
//   },
//   {
//     first_name: "Laurie",
//     last_name: "Brocket",
//     aggregate_score: 13
//   },
//   {
//     first_name: "Carmine",
//     last_name: "Cumbridge",
//     aggregate_score: 16
//   },
//   {
//     first_name: "Dosi",
//     last_name: "Dmiterko",
//     aggregate_score: 24
//   },
//   {
//     first_name: "Errol",
//     last_name: "Gullyes",
//     aggregate_score: 13
//   },
//   {
//     first_name: "Lou",
//     last_name: "O'Growgane",
//     aggregate_score: 32
//   },
//   {
//     first_name: "Janos",
//     last_name: "Duiged",
//     aggregate_score: 12
//   },
//   {
//     first_name: "Kania",
//     last_name: "Luty",
//     aggregate_score: 14
//   },
//   {
//     first_name: "Lek",
//     last_name: "Maddy",
//     aggregate_score: 11
//   },
//   {
//     first_name: "Kermit",
//     last_name: "Cleve",
//     aggregate_score: 32
//   },
//   {
//     first_name: "Tabbi",
//     last_name: "Realph",
//     aggregate_score: 30
//   },
//   {
//     first_name: "Layne",
//     last_name: "Ivoshin",
//     aggregate_score: 35
//   },
//   {
//     first_name: "Rosette",
//     last_name: "Wear",
//     aggregate_score: 35
//   },
//   {
//     first_name: "Inigo",
//     last_name: "Maginn",
//     aggregate_score: 16
//   },
//   {
//     first_name: "Caterina",
//     last_name: "Sushams",
//     aggregate_score: 17
//   },
//   {
//     first_name: "Elladine",
//     last_name: "Sirrell",
//     aggregate_score: 21
//   },
//   {
//     first_name: "Aidan",
//     last_name: "Ivankov",
//     aggregate_score: 20
//   },
//   {
//     first_name: "Vanya",
//     last_name: "Taggert",
//     aggregate_score: 25
//   },
//   {
//     first_name: "Kent",
//     last_name: "Uebel",
//     aggregate_score: 30
//   },
//   {
//     first_name: "Baxter",
//     last_name: "Lebreton",
//     aggregate_score: 18
//   },
//   {
//     first_name: "Edith",
//     last_name: "Buessen",
//     aggregate_score: 31
//   },
//   {
//     first_name: "Jase",
//     last_name: "McEvoy",
//     aggregate_score: 13
//   },
//   {
//     first_name: "Gabriell",
//     last_name: "Celle",
//     aggregate_score: 32
//   },
//   {
//     first_name: "Bryanty",
//     last_name: "Grix",
//     aggregate_score: 27
//   },
//   {
//     first_name: "Verine",
//     last_name: "Kramer",
//     aggregate_score: 13
//   },
//   {
//     first_name: "Lu",
//     last_name: "Littlefield",
//     aggregate_score: 26
//   },
//   {
//     first_name: "Thor",
//     last_name: "Grigson",
//     aggregate_score: 32
//   },
//   {
//     first_name: "Alfonso",
//     last_name: "Battle",
//     aggregate_score: 22
//   },
//   {
//     first_name: "Henderson",
//     last_name: "Bonafacino",
//     aggregate_score: 23
//   },
//   {
//     first_name: "Kizzie",
//     last_name: "Angelini",
//     aggregate_score: 15
//   },
//   {
//     first_name: "Norris",
//     last_name: "Skellern",
//     aggregate_score: 11
//   }
// ] 