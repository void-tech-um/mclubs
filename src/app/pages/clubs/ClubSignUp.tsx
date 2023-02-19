import React from "react";
import Button from "../../components/shared/Button";

function ClubSignUp() {
  return (
    <div className="ml-10">
      <br></br>
      <h1 className="normal-case text-4xl font-bold text-black text-">
        Add your Organization to MClubs
      </h1>
      <br></br>
      <br></br>
      {/* start of the form */}
      <div className="form-control w-screen">
        <label className="label">
          <span className="label-text-1.5xl text-gray-500 font-semibold">
            Club Name
          </span>
        </label>
        <input
          type="text"
          placeholder="Enter Club Name"
          className="input input-bordered w-full max-w-xs"
        />
        <br></br>

        {/* flex for application stuff */}
        <div style={{ display: "flex" }}>
          <div className="mr-20">
            <label className="label font-semibold">Application Required?</label>
            <div className="btn-group">
              <input
                type="radio"
                name="options"
                data-title="Yes"
                className="btn btn-wide mr-3 w-[100px]"
                checked
              />
              <input
                type="radio"
                name="options"
                data-title="No"
                className="btn btn-wide w-[100px]"
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text-1.5xl text-gray-500 font-bold">
                Application Form Link
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter form link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <br></br>

        <h1 className="normal-case text-2xl font-semibold text-black">
          Socials
        </h1>
        <label className="label">
          <span className="label-text-1.5xl text-gray-500 font-semibold">
            Add Socials
          </span>
        </label>
        <label className="label">
          <select className="text-gray-500 input input-bordered w-full max-w-xs">
            <option selected disabled hidden>
              Select socials
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="Facebook">Facebook</option>
            <option value="Tiktok">Tiktok</option>
          </select>
        </label>

        {/* flex for social stuff */}
        <div style={{ display: "flex" }}>
          <div className="mr-5">
            <label className="label">
              <span className="label-text-1.5xl text-gray-500 font-bold">
                Website
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter website link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="mr-5">
            <label className="label">
              <span className="label-text-1.5xl text-gray-500 font-bold">
                Facebook Page
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter facebook link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text-1.5xl text-gray-500 font-bold">
                Twitter Page
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter twitter link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <br></br>

        {/* NOT DONE WE NEED TO CODE IN THE FILTERS TO SHOW UP */}
        <h1 className="normal-case text-2xl font-semibold text-black">
          Filters
        </h1>
        <label className="label">
          <span className="label-text-1xl text-gray-500 font-semibold">
            Add Topics
          </span>
        </label>

        <label className="label">
          <select className="text-gray-500 input input-bordered w-full max-w-xs">
            <option selected disabled hidden>
              Select Topics
            </option>
            <option value="Instagram">Filter1</option>
            <option value="Twitter">Filter2</option>
            <option value="Facebook">Filter3</option>
            <option value="Tiktok">Filter4</option>
          </select>
        </label>
        <br></br>

        {/* DESCRIPTION GOES HERE*/}
        <h1 className="normal-case text-2xl font-semibold text-black">
          Description
        </h1>
        <label className="label">
          <span className="label-text-1.5xl text-gray-500 font-semibold">
            Add Main Description
          </span>
        </label>

        <textarea
          className="textarea textarea-bordered w-[1000px]"
          placeholder="Write a full description for your club"
        ></textarea>
        <br></br>
        <label className="label">
          <span className="label-text-1.5xl text-gray-500 font-bold">
            Add Preview Description
          </span>
        </label>
        <input
          type="text"
          placeholder="Write a brief, one-sentence description for your club"
          className="input input-bordered w-[1000px]"
        />
      </div>{" "}
      {/* end of form */}
    </div>
  );
}

export default ClubSignUp;
