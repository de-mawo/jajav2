import matrix from "../../../data/matrix";

const Rubric = () => {
  return (
    <>
      <div className="rubric_table">
        <div className="table-responsive" data-simplebar>
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th scope="col">POINTS</th>
                <th scope="col">1 to 5</th>
                <th scope="col">5</th>
                <th scope="col">4</th>
                <th scope="col">3</th>
                <th scope="col">2</th>
                <th scope="col">1</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((point) => (
                <tr key={point.id}>
                  <td className="score_title_column">
                    <span className="score_title">{point.score_title}: </span>
                    <br />
                    <span className="score_title_descr">
                      {" "}
                      {point.score_description}{" "}
                    </span>
                  </td>
                  <td>
                    <select
                      className="form-select form-control"
                      name={point.score_title}
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
                  <td className="five_point_descr">
                    
                      {point.five_point}
                   
                  </td>
                  <td className="four_point_descr">{point.four_point}</td>
                  <td className="three_point_descr">{point.three_point}</td>
                  <td className="two_point_descr">{point.two_point}</td>
                  <td className="one_point_descr">{point.one_point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Rubric;
