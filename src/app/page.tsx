import "./style/modal.css";

export default function Home() {
  return (
    <section className="modal">
      <div className="modal-wrapper">
        <h1 className="modal-heading">Session Lifetime</h1>
        <p className="modal-subheading">
          Set session duration limits by configuring the inactivity timeout or
          the maximum lifetime.
        </p>
        <div className="btn-container">
          <button className="btn-ghost">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        <div className="divider-hr"></div>
        <div className="">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="modal-heading-sec">Maximum Lifetime</h2>
              <p className="modal-subheading">
                Set a maximum Lifetime duration for a session.
              </p>
            </div>
            <div className="toggle-btn">
              <label className="toggle-label">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="mt-[1px] w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#7f7f7f33] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="modal-input-container">
          <input type="text" className="model-input " />
          <div className="input-toggle ">
            <span>days</span>
            <div className="flex-column">
              <button className="increase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
              <button className="decrease">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="modal-info mb-[24px]">
          Set duration between 5 minutes and 10 years
        </p>
        <div className="divider-hr"></div>
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

          <div className="toggle-btn">
            <label className="toggle-label">
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
      </div>
    </section>
  );
}
