import React from "react";
import "./style.css";
import logo from "../../logo.png";
const Box = () => {
  return (
    <div className="box">
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="main-logo">
            <img src={logo} />
            <div className="overlap-group">
              <div className="logo" />
              <div className="separator" />
            </div>
          </div>
          <div className="overview">
            <div className="messages">
              <div className="div">
                <div className="div-wrapper">
                  <div className="div-2">
                    <div className="overlap-group-2">
                      <img
                        className="fill"
                        alt="Fill"
                        src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/fill-1.svg"
                      />
                      <img
                        className="combined-shape"
                        alt="Combined shape"
                        src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/combined-shape.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="menu">Dashboard</div>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="menu-list">
              <div className="messages-wrapper">
                <div className="messages-2">
                  <div className="div">
                    <div className="div-wrapper">
                      <div className="div-2">
                        <img
                          className="game"
                          alt="Game"
                          src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/game-2.svg"
                        />
                        <img
                          className="img"
                          alt="Game"
                          src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/game.svg"
                        />
                      </div>
                    </div>
                    <div className="text-wrapper">Trainings</div>
                  </div>
                </div>
              </div>
              <div className="messages-wrapper">
                <div className="messages">
                  <div className="div">
                    <img
                      className="div-wrapper"
                      alt="Iconly bulk ticket"
                      src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/iconly-bulk-ticket-star.svg"
                    />
                    <div className="text-wrapper">Users</div>
                  </div>
                  <div className="dropdown" />
                </div>
              </div>
              <div className="messages-wrapper">
                <div className="messages-3">
                  <div className="div">
                    <div className="div-wrapper">
                      <div className="location">
                        <img
                          className="path"
                          alt="Path"
                          src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/path-34175-2.svg"
                        />
                        <div className="ellipse" />
                      </div>
                    </div>
                    <div className="text-wrapper">Analytics</div>
                  </div>
                </div>
              </div>
              <div className="messages-wrapper">
                <div className="messages-3">
                  <div className="div">
                    <div className="div-wrapper">
                      <div className="location">
                        <img
                          className="path"
                          alt="Path"
                          src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/path-34175-1.svg"
                        />
                        <div className="ellipse" />
                      </div>
                    </div>
                    <div className="text-wrapper">My Account</div>
                  </div>
                </div>
              </div>
              <div className="messages-wrapper">
                <div className="messages-3">
                  <div className="div">
                    <div className="div-wrapper">
                      <div className="location">
                        <img
                          className="path"
                          alt="Path"
                          src="https://generation-sessions.s3.amazonaws.com/3fc369bfdf3ea65aec9322903586d647/img/path-34175.svg"
                        />
                        <div className="ellipse" />
                      </div>
                    </div>
                    <div className="text-wrapper">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="workryt-technologies">
            © 2022 workryt technologies private limited
          </p>
        </div>
      </div>
    </div>
  );
};
export default Box;
