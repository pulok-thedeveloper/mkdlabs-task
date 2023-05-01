import React from "react";
import { AuthContext } from "../authContext";

const AdminDashboardPage = () => {
  const { dispatch, state } = React.useContext(AuthContext);

  return (
    <>
      <div className="w-full h-full bg-gray-800 py-6 px-32">
        <div className="flex justify-between items-center pb-10">
          <p className="uppercase text-4xl text-white font-bold">APP</p>
          <button
            onClick={() => dispatch({ type: "LOGOUT", payload: false })}
            className="bg-green-300 px-8 py-3 rounded-3xl"
          >
            <span>Logout</span>
          </button>
        </div>

        <div>
          <div className="flex justify-between pt-10">
            <p className="font-extralight text-3xl text-white">
              Today's leaderboard
            </p>
            <div className="flex justify-between items-center">
              <p className="text-white">30 May 2022</p>
              <span> . </span>
              <button className="bg-green-300 px-3 py-1 rounded-3xl uppercase font-light">
                submissions open
              </button>
              <span> . </span>
              <p className="text-white">11:34</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
