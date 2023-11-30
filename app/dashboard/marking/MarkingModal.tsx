"use client";

import { useSession } from "next-auth/react";
import RubricTable from "./RubricTable";
import RubricForm from "./RubricForm";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import ClientLoader from "../ClientLoader";


type Props = {
  name: string;
  surname: string;
  bizzName: string;
  country: string;
  email: string;
  reloadPage?: () => void;
};

const MarkingModal = ({ name, surname, bizzName, country, email }: Props) => {
  const { data: session } = useSession();

  

  //TODO:check if the role is actually a judge
  const judge = session?.user.name;

  const [comment, setComment] = useState("");

  const updateComment = (comment: string): void => {
    setComment(comment);
  };

  const [points, setPoints] = useState({});

  //TODO: Refactor this to go into state
  const [loading, setLoading] = useState(false);

  const onChangePoints = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPoints({ ...points, [name]: value });
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
    setLoading(true);
    const notification = toast.loading("Adding new Point...");
    try {
      const res = await axios.post(
        "/api/points/addPoints",
        {
          comment,
          name,
          surname,
          bizzName,
          country,
          totalPoints,
          judge,
          email,
        }, 
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        toast.success("New Point Added.", {
          id: notification,
        });
        window.location.reload();
        setComment("");
        setPoints({});
      }
      //TODO: This is not working

      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong.",{
        id: notification
      });
    }
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
            <div className="modal-footer my-5">
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
                data-bs-dismiss="modal"
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
