import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Context/AuthProvider";

const ReviewCart = ({ review }) => {
  const { message } = review;
  const { user } = useContext(AuthContex);
  return (
    <div className="flex justify-center">
      <div class="px-8 w-1/2 my-3 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
        <div>
        <button className="btn btn-square btn-sm text-red-500 bg-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
        </div>
        </div>

        <div class="mt-2">
          <p
            class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabindex="0"
            role="link"
          >
            {user?.title}
          </p>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
        </div>

        <div class="flex items-center justify-between mt-4">
          <Link
            class="text-blue-600 dark:text-blue-400 hover:underline"
            tabindex="0"
            role="link"
          >
            Edit
          </Link>

          <div class="flex items-center">
            <img
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src={user?.photoURL}
              alt="avatar"
            />
            <p
              class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              tabindex="0"
              role="link"
            >
              {user?.displayName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
