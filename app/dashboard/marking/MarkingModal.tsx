'use client';

import { useSession } from "next-auth/react";
import RubricTable from "./RubricTable";
import RubricForm from "./RubricForm";
import { ChangeEvent,  useState } from "react";
import axios from "axios";

type Props = {
  name: string;
  surname: string;
  bizzName: string;
  country: string;
};

const MarkingModal = ({ name, surname, bizzName, country }: Props) => {
  const { data: session } = useSession();

  //TODO:check if the role is actually a judge
  const judge = session?.user.name;

  const [comment, setComment] = useState("");

  const updateComment = (comment: string): void => {
    setComment(comment);
  };

  const [points, setPoints] = useState({});

  const onChangePoints = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPoints({ ...points, [name]: value });
  };

  const clearForm = () => {
    setComment('');
    setPoints(0);
};

  const pointsArr = Object.values(points);

  const arrOfNum = pointsArr.map((str) => {
    return Number(str);
  });

  const totalPoints = arrOfNum.reduce(
    (accumulator, curr) => accumulator + curr,
    0
  );

  const submitPoints = async () => {
    await axios
      .post(
        "/api/point",
        { comment, name, surname, bizzName, country, totalPoints, judge },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then()
      .catch((error) => {
        // setMessage(error.message);
        console.log(error.response.data.error);
      });
      clearForm()
  };

  return (
    <>
      <div
        className="modal grade_modal fade"
        id="GradeRubricModal"
        tabIndex={-1}
        aria-labelledby="GradeRubricModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="GradeRubricModal">
                Competition Scoring Matrix
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <RubricForm
                name={name}
                surname={surname}
                bizzName={bizzName}
                judge={judge}
                country={country}
                comment={comment}
                updateComment={updateComment}
              />
              <RubricTable onChangePoints={onChangePoints} />
            </div>
            <div className="modal-footer">
              <button className="secondary_btn" type="button">
                Total: {totalPoints} points
              </button>
              <button
                type="button"
                className="default_btn"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="tertiary_btn"
                onClick={submitPoints}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkingModal;
