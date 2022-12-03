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
                <h6 className="this-month"></h6>
              </li>
              <li>
                <span>Aggregate Score</span>
                <h6 className="aggregate_score"> </h6>
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




