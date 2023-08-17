"use client";
import React from "react";
import { useState } from "react";
import { SubNowPopup } from "./SubNowPopup";

export const Modal = () => {
  const timeUnits = ["minutes", "days", "weeks", "months", "years"];
  const [selectedUnit, setSelectedUnit] = useState("minutes");
  const [inputValue, setInputValue] = useState<any>(5);
  const [session, setSession] = useState(false);
  const [info, setInfo] = useState("");
  const [popup, setPopup] = useState<Boolean>(false);

  const handleUnitChange = (change: number) => {
    const currentIndex = timeUnits.indexOf(selectedUnit);
    let newIndex = currentIndex + change;

    if (newIndex < 0) {
      newIndex = timeUnits.length - 1;
    } else if (newIndex >= timeUnits.length) {
      newIndex = 0;
    }

    setSelectedUnit(timeUnits[newIndex]);
  };

  const setSessionHandler = () => {
    switch (selectedUnit) {
      case "minutes":
        {
          if (inputValue >= 5) {
            setSession(true);
            setInfo(
              `Maximum Lifetime duration for a session is set for ${inputValue} ${selectedUnit}.`
            );
          } else {
            setInfo(`Set duration between 5 minutes and 10 years.`);
          }
        }
        break;
      case "days":
        {
          if (inputValue <= 3650) {
            setSession(true);
            setInfo(
              `Maximum Lifetime duration for a session is set for ${inputValue} ${selectedUnit}.`
            );
          } else {
            setInfo("Set duration between 5 minutes and 10 years");
          }
        }
        break;
      case "weeks":
        {
          if (inputValue <= 521.429) {
            setSession(true);
            setInfo(
              `Maximum Lifetime duration for a session is set for ${inputValue} ${selectedUnit}.`
            );
          } else {
            setInfo("Set duration between 5 minutes and 10 years.");
          }
        }
        break;

      case "months":
        {
          if (inputValue <= 120) {
            setSession(true);
            setInfo(
              `Maximum Lifetime duration for a session is set for ${inputValue} ${selectedUnit}.`
            );
          } else {
            setInfo("Set duration between 5 minutes and 10 years.");
          }
        }
        break;

      case "years":
        {
          if (inputValue <= 10) {
            setSession(true);
            setInfo(
              `Maximum Lifetime duration for a session is set for ${inputValue} ${selectedUnit}.`
            );
          } else {
            setInfo("Set duration between 5 minutes and 10 years");
          }
        }
        break;
      default:
        setInfo(
          "Something went wrong. Set duration between 5 minutes and 10 years."
        );
    }
    if (session) {
      setSession(false);
      setInputValue(5);
      setSelectedUnit("minutes");
      setInfo("");
    }
  };
  return (
    <>
      <section className="modal">
        <div className="modal-wrapper">
          {/* modal header */}
          <h1 className="modal-heading  mb-[4px]">Session Lifetime</h1>
          <p className="modal-subheading  mb-[4px]">
            Set session duration limits by configuring the inactivity timeout or
            the maximum lifetime.
          </p>
          <div className="justify-content-end">
            <button className="btn-ghost  mb-[24px]">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>

          <div className="divider-hr  mb-[24px]"></div>

          <div className="space-between">
            <div>
              <h2 className="modal-heading-sec  mb-[4px]">Maximum Lifetime</h2>
              <p className="modal-subheading">
                Set a maximum Lifetime duration for a session.
              </p>
            </div>
            <div className="toggle-btn">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={session}
                  className="sr-only peer"
                  onChange={() => setSessionHandler()}
                />
                <div className="mt-[1px] w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#7f7f7f33] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
              </label>
            </div>
          </div>

          {/* modal input */}
          <div className="modal-input-container  mb-[8px]">
            <input
              className="model-input "
              disabled={session}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-toggle ">
              <span>{selectedUnit}</span>
              <div className="flex-column">
                <button
                  className="increase"
                  disabled={session}
                  onClick={() => handleUnitChange(-1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
                <button
                  className="decrease"
                  disabled={session}
                  onClick={() => handleUnitChange(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* modal error */}
          <p
            className={
              info !== "" ? "modal-error mb-[24px]" : "modal-info mb-[24px]"
            }
          >
            {info === ""
              ? "Set duration between 5 minutes and 10 years."
              : info}
          </p>
          <div className="divider-hr  mb-[24px]"></div>

          {/* modal-footer  */}
          <div className="space-between">
            <div className="">
              <h3 className="modal-heading-sec align-top ">
                Inactivity Timeout
                <span className="badge-primary">Premium</span>
              </h3>
              <p className="modal-subheading">
                Set the inactivity timeout for a session
              </p>
            </div>

            <label className="toggle-label" onClick={() => setPopup(true)}>
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                disabled
              />
              <div className=" w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#7f7f7f33] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
            </label>
          </div>
        </div>
      </section>
      {popup && <SubNowPopup setPopup={setPopup} />}
    </>
  );
};
