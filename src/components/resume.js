import React from "react";
import "../App.css";
import "../portfolio.css";

const Resume = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="header"></div>

              <div className="modal-footer" />

              <div className="header">
                <h3>Skills-set</h3>
              </div>
              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">full stack developer</div>
                </div>
                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about">Frontend framework</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">Backend framework</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">
                      A vast undersatnding of the MERN stack
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code">Technologies</div>
                </div>

                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about">HTML,CSS,JAVASCRIPT</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">MONGO DB</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">NODE</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">EXPRESS</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">SQL</p>
                  </div>

                  <div className="grid-item-skills">
                    <p className="p-about">REACT</p>
                  </div>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <div className="row">
                  <div className="code"></div>
                </div>

                <div className="grid-container-skills">
                  <div className="grid-item-skills">
                    <p className="p-about"></p>
                  </div>

                  <div className="grid-item-skills">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
