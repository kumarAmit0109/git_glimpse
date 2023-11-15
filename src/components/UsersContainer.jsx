import React from "react";
import { Link } from "react-router-dom";

const UsersContainer = ({ users }) => {
  return (
    <div className="w-11/12 md:w-10/12 max-w-6xl mx-auto">
    <div className="flex gap-5 flex-wrap justify-center  py-5">
      {users &&
        users?.map((user, idx) =>
          user?.login ? (
            <div
              key={idx}
              className="flex w-[300px]   
           p-3 flex-col items-center 
           bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/5 dark:ring-0 "
            >
              <img
                src={user?.avatar_url}
                className="w-24 mb-4 border-4 rounded-md border-slate-700 dark:border-slate-400 "
              />

              <h1 className="font-bold text-slate-900 truncate dark:text-slate-200">{user?.login}</h1>
              <h1 className="mb-10 max-w-2xl prose prose-slate xl:mb-0 dark:prose-dark">{user?.name}</h1>
              <Link to={`/${user?.login}`}>
                <button
                  className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-9 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                >
                  View
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-lg">No user</div>
          )
        )}
    </div>
    </div>
  );
};

export default UsersContainer;
