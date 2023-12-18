import React from "react";
import './Home.css';

export default function Home (){
    return(
        <div className="main-content">
                  <div className="header">Welcome!!</div>
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
        <div className="card-task">
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
      </div>
        
        
    )
}