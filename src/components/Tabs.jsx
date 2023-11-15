import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    < div className="flex gap-6">
    
      <button
        className={`${type === "repos" && "text-sky-400"}`}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
      <button
        className={`${type === "received_events" && "text-sky-400"}`}
        onClick={() => setType("received_events")}
      >
        Activity
      </button>
      <button
        className={`${type === "followers" && "text-sky-400"}`}
        onClick={() => setType("followers")}
      >
        followers
      </button>
    </div>
  );
};

export default Tabs;
