import { ChangeEvent } from "react";
import matrix from "../../../data/matrix";

type Props = {
  
  onChangePoints: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const RubricTable = ({ onChangePoints }: Props) => {
  return (
    <div className="container">
      <div className="rubric_table">
        <div className="table-responsive" data-simplebar>
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th scope="col">Criteria</th>
                <th scope="col">
                  {" "}
                  On a scale between 1 and 5 (1 being poor and 5 being
                  excellent)
                </th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((point) => (
                <tr key={point?.id}>
                  <td className="score_title_column">
                    <span className="score_title">{point?.score_title}: </span>
                  </td>
                  <td >
                    <select
                      className="form-select form-control"
                      name={point?.score_title}
                      onChange={onChangePoints}
                      aria-label="Default select example"
                    >
                      <option value={0}> 0 </option>
                      <option value={1}> 1 </option>
                      <option value={2}> 2 </option>
                      <option value={3}> 3 </option>
                      <option value={4}>4</option>
                      <option value={5}> 5 </option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RubricTable;
