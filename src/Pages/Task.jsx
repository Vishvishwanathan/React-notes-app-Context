import React from "react";
import './Task.css';

export default function Task (){
    return(
      <div className="main-content">
        <div className="card-task">
        <div class="col-md-12">
          <div class="card1">
            <div class="card-body1">
              <div class="title1">Add a Task <span class="x"><i class="bi bi-x-lg"></i></span></div>
              <div class="title2">Title</div>
              <div class="tack-note">Take a task</div>
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
      
        <h3 className="card-head"><i className="bi bi-check2-circle icon2"></i>My Tasks</h3>
        <div className="col-md-12">
          <div className="card1">
            <div className="card-body1">
              <div className="title"><i className="bi bi-check2-circle icon"></i>   File uplode <span><i className="bi bi-star-fill"></i></span></div>
              <div className="title"><i className="bi bi-circle"></i>   System update <span><i className="bi bi-star-fill"></i></span></div>
              <div className="title"><i className="bi bi-circle"></i>   Quality check <span><i className="bi bi-star"></i></span></div>
              <div className="title"><i className="bi bi-circle"></i>   Charger change <span><i className="bi bi-star"></i></span></div>
            </div>
          </div>
        </div>
       </div> 
      
    );
}