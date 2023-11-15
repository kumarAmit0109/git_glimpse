import React, { useEffect, useState, useRef } from "react";
import Loading from "../components/Loading";
import UsersContainer from "../components/UsersContainer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");
  let EndPoint = "https://api.github.com/users";

  async function AllUesrs() {
    if (user.current.value === "") {
      setLoading(true);
      const res = await fetch(EndPoint);
      const data = await res.json();
      setUsers(data);
      setLoading(null);
    }
  }

  async function FindUser() {
    setLoading(true);
    if (user.current.value !== "") {
      setUsers("");
      const res = await fetch(EndPoint + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      console.log(users);
      user.current.value = "";
    } else {
      // AllUesrs();
    }
    setLoading(null);
  }

  // useEffect(() => {
  //   AllUesrs();
  // }, [user, setUsers]);

  return (
    <div className="" >
     <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white mt-10">
        GitGlimpse: Peek into Your GitHub Universe
     </h1>
     <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Get a glimpse into your GitHub universe. GitGlimpse fetches your profile data, offering
       a snapshot of your coding endeavors.</p>
      <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-l">
    
        <input
          placeholder="Search github username"
          ref={user}
          type="text"
          className=" sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
        />
        <button
          onClick={FindUser}
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        >
          Search
        </button>
      </div>
      <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
    </div>
  );
};

export default Users;
