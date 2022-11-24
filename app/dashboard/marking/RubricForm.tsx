import React from 'react'

const RubricForm = () => {
  return (
    <>
   <div className="rubric_form container"> 
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="date" 
                                            name="date" 
                                            placeholder="Date" 
                                            className="form-control" 
                                            // value={date}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="business" 
                                            placeholder="Business Name" 
                                            className="form-control" 
                                            // value={business}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="participant" 
                                            placeholder="Presenter Name" 
                                            className="form-control" 
                                            // value={participant}
                                            // onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="judge" 
                                            placeholder="Judge Name" 
                                            className="form-control" 
                                            // value={judge}
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
                                            // value={judge}
                                            // onChange={handleChange} 
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