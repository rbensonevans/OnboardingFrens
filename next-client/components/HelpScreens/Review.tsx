import {
  CheckCircleIcon,
  InformationCircleIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Review = ({ submit }: { submit: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  if (submitted)
    return (
      <div className="m-auto">
        <div className="bg-[#7752DF] rounded-md min-w-[300px] p-4 flex flex-col">
          <h2 className="text-2xl text-white font-extrabold text-center mb-8">
            Thank You!
          </h2>
        </div>
      </div>
    );
  return (
    <div className="m-auto">
      <div className="bg-[#7752DF] rounded-md min-w-[300px] p-4 flex flex-col">
        <h2 className="text-2xl text-white font-extrabold text-center mb-8">
          Feedback Form
        </h2>
        <label className="label">
          <span className="label-text text-white">
            How would you rate your support?
          </span>
        </label>

        <div className="rating m-auto mb-8">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <div className="form-control w-full max-w-xs mb-8">
          <label className="label">
            <span className="label-text text-white">
              Any comments or suggestions?
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <button
          className="btn btn-secondary"
          onClick={() => setSubmitted(true)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
