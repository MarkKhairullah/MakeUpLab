import React from 'react';

function Card() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-white bg-opacity-75 shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Card #1</h5>
              <p className="card-text">This is the First Card, it's on the left</p>
              <button type="button" className="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#demoModal">
                Launch the modal
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card #2</h5>
              <p className="card-text">This is the Second Card, it's in the middle</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
                Launch the modal
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card #3</h5>
              <p className="card-text">This is the Third Card, it's on the right</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
                Launch the modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;