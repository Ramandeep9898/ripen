import React from "react";
import "../style/popup.css";

export const SubNowPopup = ({ setPopup }: any) => {
  return (
    <div className="popup-container" onClick={() => setPopup(false)}>
      <div className="modal-wrapper">
        <div className="modal-heading">
          Inactivity Timeout is Premium Feature
        </div>
        <div className="modal-subheading">
          Using Inactivity Timeout Set the inactivity timeout for a session.
        </div>
        <div className="divider-hr"></div>
        <div className="">
          <button className="btn-primary" disabled>
            Subscribe now!
          </button>
        </div>
      </div>
    </div>
  );
};
