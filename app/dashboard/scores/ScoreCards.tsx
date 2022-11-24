import { HiOutlineUserGroup, HiOutlineLifebuoy } from "react-icons/hi2";

const ScoreCards = () => {
  return (
    <>
            <div className="admin_cards_area ">
                <div className="container-fluid">
                    <div className="row ">
                        <div className=" col-sm-6">
                            <div className="single_card d-flex align-items-center">

                                
                                <div className="flex-grow-1 text-center">
                                    <h3 >Average Score</h3>
                                    <span className="average_score fs-2">
                                        25.8 
                                    </span>
                                </div>

                                <div className="flex-shrink-0 align-self-center">
                                <span className="average_score_i fs-2"> 
                                <HiOutlineLifebuoy/>
                                </span>
                                </div>
                            </div>
                        </div>

                        <div className=" col-sm-6">
                            <div className="single_card d-flex align-items-center">
                                <div className="flex-grow-1 text-center">
                                    <h3>
                                     Participants
                                    </h3>
                                    <span className="total_participants fs-2">62 </span>
                                </div>

                                <div className="flex-shrink-0 align-self-center">
                                    <span className="total_participants_i fs-2"> 
                                    <HiOutlineUserGroup/>
                                    </span>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </>
  )
}

export default ScoreCards