import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

const Events = ({ data }) => {
  return (

    <div className="">
      {data?.map((ev, i) => (
        <div key={i} className="flex gap-x-4 items-center m-2 bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/5 dark:ring-0 p-3 leading-8">
          <Link to={`/${ev.actor?.login}`}>
            <img src={ev.actor?.avatar_url} className="w-16 rounded-full" />
          </Link>
          <h1 className="break-words mb-2 font-bold prose prose-slate xl:mb-0 dark:prose-dark">
            {ev?.actor?.login} {ev?.type}
            <br />
            {ev?.repo?.name}
            <br />
            <span className="text-sm mb-2 font-semibold prose prose-slate xl:mb-0 dark:prose-dark">{format(ev?.created_at)}</span>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Events;
