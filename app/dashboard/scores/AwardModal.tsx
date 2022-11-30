import axios from "axios";

type Props = {
    name: string;
    surname: string;
    Average: number;
    bizzName: string;
    country: string
  };

const AwardModal = ({name, surname, Average, bizzName, country}: Props) => {


    const submitScore = async () => {

        console.log(name , surname , Average);
        
        await axios
          .post(
            "/api/scores/addScore",
            {  name, surname, bizzName, country, Average, },
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