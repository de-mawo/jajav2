import { ChangeEvent, useState } from "react";


type Props = {
    name: string;
    surname: string;
    bizzName: string;
    judge: string;
    country: string;
    updateComment: (arg: string) => void
    comment: string;
}

const RubricForm = ({name, surname, bizzName, judge, country, updateComment}: Props) => {
    
    const [comment, setComment] = useState('');


  const submitComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
    updateComment(comment)
  }

  return (
    <>
   <div className="rubric_form container"> 
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="">Name</label>
                                        <input 
                                            type="text" 
                                            name="participant" 
                                            placeholder="Presenter Name" 
                                            className="form-control" 
                                            value={name}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Surname</label>
                                        <input 
                                            type="text" 
                                            name="surname" 
                                            placeholder="Date" 
                                            className="form-control" 
                                            value={surname}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="">Business Name</label>
                                        <input 
                                            type="text" 
                                            name="country" 
                                            placeholder="Country" 
                                            className="form-control" 
                                            value={country}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="">Business Name</label>
                                        <input 
                                            type="text" 
                                            name="business" 
                                            placeholder="Business Name" 
                                            className="form-control" 
                                            value={bizzName}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                    <label htmlFor="">Judge</label>
                                        <input 
                                            type="text" 
                                            name="judge" 
                                            placeholder="Judge Name" 
                                            className="form-control" 
                                            value={judge}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="comment" 
                                            placeholder="Comments" 
                                            className="form-control" 
                                            value={comment}
                                            onChange={submitComment}
                                            required 
                                        />
                                    </div>
                                </div>

                                
                                

                               
                            </div>
                       
                        </div>
   </>
  )
}

export default RubricForm