import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Events from "../components/Events";
import Loading from "../components/Loading";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UsersContainer from "../components/UsersContainer";
const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [users, setUsers] = useState([]);
  const [loadind, setLoaing] = useState(null);
  let EndPoint = "https://api.github.com/users";
  const { pathname } = useLocation();
  const navigate = useNavigate();
  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }
  async function GetUrls() {
    setUsers([]);
    setLoaing(true);
    const res = await fetch(EndPoint + pathname + `/${type}`);
    const data = await res.json();
    setUsers(data);
    setLoaing(null);
  }

  useEffect(() => {
    GetUserInfo();
    GetUrls();
    console.log(users);
  }, [pathname, type]);

  return (
    <div className="py-5  w-11/12 md:w-10/12 max-w-6xl mx-auto ">
      <button
        onClick={() => navigate("/")}
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      >
        BACK
      </button>
      {user &&
        user?.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row
             md:px-0 px-4 flex-col gap-10 m-7
             bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/5 dark:ring-0 "
           
          >
            <img
              src={uinfo.avatar_url}
              className="w-[250px] m-3 border-4 rounded-md border-slate-700 dark:border-slate-400 md:mx-0 mx-auto"
              
            />
            <div className="text-lg leading-10 px-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-200">{uinfo.name}</h1>
              <h1>
                <span className="font-bold text-sky-500 truncate dark:text-sky-400">Login_name : </span> {uinfo.login}
              </h1>
              <h1>
                <span className="font-bold text-sky-500 truncate dark:text-sky-400">followers : </span>
                {uinfo.followers}
              </h1>
              <h1>
                <span className="font-bold text-sky-500 truncate dark:text-sky-400">following : </span>
                {uinfo.following}
              </h1>
              <h1>
                <span className="font-bold text-sky-500 truncate dark:text-sky-400">public_repositories : </span>
                {uinfo.public_repos}
              </h1>
              <h1>
                <span className="font-bold text-sky-500 truncate dark:text-sky-400">Join : </span>
                {new Date(uinfo.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                className="text-gray-200 
                  font-bold rounded cursor-pointer  px-4 py-1 my-3 tracking-wide
                  bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-10 flex items-center justify-center sm:w-auto dark:bg-teal-600 dark:highlight-white/20 dark:hover:bg-teal-500"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      <div className="flex border-b-2 gap-6  border-gray-500 pb-4 mt-[10%] mb-6 justify-center md:text-xl ">
        <Tabs type={type} setType={setType} />
      </div>
      {loadind && <Loading />}
      {type === "repos" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">
          {users && <Repo users={users} />}
        </div>
      )}
      {type === "received_events" && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto ">
          {users && <Events data={users} />}
        </div>
      )}
      {type === "followers" && <UsersContainer users={users} />}
    </div>
  );
};

export default UserInfo;
