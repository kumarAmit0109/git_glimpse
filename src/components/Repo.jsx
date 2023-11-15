import React from "react";

const Repo = ({ users }) => {
  return (
    <div className="">
      {users.map((s, idx) => (
        <div key={idx} className="bg-white m-2 rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/5 dark:ring-0 p-3 leading-8">
          <a
            href={s.html_url}
            target="_blank"
            className="mb-2 font-semibold text-sky-500 dark:text-sky-400 hover:underline"
          >
            {s.full_name}
          </a>
          <div className="flex m-1 gap-x-5">
            <h1 className="mb-2 font-semibold prose prose-slate xl:mb-0 dark:prose-dark"> {"🟢" + s.language}</h1>
            <h1 className="mb-2 font-semibold prose prose-slate xl:mb-0 dark:prose-dark">forks : {s.forks}</h1>
            <h1 className="mb-2 font-semibold prose prose-slate xl:mb-0 dark:prose-dark">
              stars : {s.stargazers_count}
            </h1>
          </div>
        </div>
      ))}
   </div>
  );
};

export default Repo;
