import React from "react";

type SubNowPopupProps = {
  setPopup: React.Dispatch<React.SetStateAction<Boolean>>;
};

export const SubNowPopup = ({ setPopup }: SubNowPopupProps): JSX.Element => {
  return (
    <div className="popup-container" onClick={() => setPopup(false)}>
      <div className="modal-wrapper">
        <h4 className="modal-heading  mb-[8px]">
          Inactivity Timeout is Premium Feature
        </h4>
        <p className="modal-subheading  mb-[24px]">
          Using Inactivity Timeout Set the inactivity timeout for a session.
        </p>
        <div className="divider-hr  mb-[24px]"></div>
        <div className="justify-content-end">
          <button className="btn-primary" disabled>
            Subscribe now!
          </button>
        </div>
      </div>
    </div>
  );
};
