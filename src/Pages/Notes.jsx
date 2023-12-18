import React from "react";
import "./Notes.css";
export default function Notes (){
	return(
		<div className="main-content">
        <div className="card-task">
        <div class="col-md-12">
          <div class="card1">
            <div class="card-body1">
              <div class="title1">Add a Notes <span class="x"><i class="bi bi-x-lg"></i></span></div>
              <div class="title2">Title</div>
              <div class="tack-note">Take a note</div>
              <h6 class="Time"><i class="bi bi-clock"></i>Today,10:10AM</h6>
                 <div class="line">
                  <i class="bi bi-list-task icons1"></i>
                  <i class="bi bi-text-left icons1"></i>
                 <i class="bi bi-arrow-counterclockwise icons1"></i>
                  <i class="bi bi-arrow-clockwise icons1"></i>
                 </div>
             </div>
           </div>
         </div>
        </div>
      
		<div className="header1"><i className="bi bi-file-earmark-text icon"></i>My Notes</div>  
      <h6 className="sub-header">Recently viewed</h6>
      <div className="notes">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="product-title">Feedbacks</h5>
              <p className="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quibusdam sunt illo, culpa amet, corrupti beatae sed dolor dolores vel soluta dignissimos.</p>
                  <p className="product-pricing">
                    <span>3 days ago</span>
                  </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="product-title">Weekly Task</h5>
              <p className="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quibusdam sunt illo, culpa amet, corrupti beatae sed dolor dolores vel soluta dignissimos.</p>
                  <p className="product-pricing">
                    <span>2 weeks ago</span>
                  </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card product-card">
            <div className="card-body">
              <h5 className="product-title">Lyrics</h5>
              <p className="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quibusdam sunt illo, culpa amet, corrupti beatae sed dolor dolores vel soluta dignissimos.</p>
                  <p className="product-pricing">
                    <span>3 weeks ago</span>
                  </p>
            </div>
          </div>
          </div>
        </div>
       </div> 
      
	)
}