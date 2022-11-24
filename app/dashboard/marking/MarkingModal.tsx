import React from 'react'
import Rubric from './Rubric'
import RubricForm from './RubricForm'

const MarkingModal = () => {
  return (
    <>
    <div className="modal grade_modal fade" id="GradeRubricModal" tabIndex={-1 }aria-labelledby="GradeRubricModal" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title " id="GradeRubricModal">
                        Competition Scoring Matrix
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <RubricForm  />
                    <Rubric />
                </div>
                <div className="modal-footer">
                    <button className="secondary_btn" type="button">
                        Total: 50 points
                    </button>
                    <button type="button" className="default_btn" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" className="tertiary_btn">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default MarkingModal