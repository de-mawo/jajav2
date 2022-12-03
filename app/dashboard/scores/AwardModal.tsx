import axios from "axios";
import toast from "react-hot-toast";

type Props = {
    name: string;
    surname: string;
    Average: number;
    bizzName: string;
    country: string
    email: string;
  };

const AwardModal = ({email, name, surname, Average, bizzName, country}: Props) => {


    const submitScore = async () => {
      const notification = toast.loading("Awarding...");
        try { 
       const res = await axios
          .post(
            "/api/scores/addScore",
            { email, name, surname, bizzName, country, Average,  },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          )
          if (res.status === 200) {
            toast.success("Score Awarded.", {
                id: notification,
              });
          }
        } catch (error: any) {
          toast.error("Oops there is an error!", {
            id: notification,
          });
        }



      };


  return (
    <>
    <div
      className="modal grade_modal fade"
      id="AwardModal"
      tabIndex={-1}
      aria-labelledby="AwardModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="AwardModal">
              Participant&apos;s Aggregate Score
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ">
            <div >
                <p>Name: {name}</p>
                
            </div>
            <div>
               <p> Surname: {surname}</p> 

            </div>

            <div >
                <p>Email: {email}</p>
                
            </div>

            <div>
               <p> Aggregate Score: {Average}</p> 

            </div>
            <div>
               <p> Business Name: {bizzName}</p> 

            </div>
            <div>
               <p> Country: {country}</p> 

            </div>
            
          </div>
          <div className="modal-footer">
            
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
              onClick={submitScore}
              data-bs-dismiss="modal"
            >
              Award
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AwardModal