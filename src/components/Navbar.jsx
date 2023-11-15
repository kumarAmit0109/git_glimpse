import React, { useEffect, useState } from 'react'

export default function ThemeBtn() {
    const [themeMode , setThemeMode]=useState("light");

    const lightThemeMode=()=>{
        setThemeMode("light");
    }

    const darkThemeMode=()=>{
        setThemeMode("dark");
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark");
        document.querySelector('html').classList.add(themeMode);
    },[themeMode]);
    const onChangeBtn=(e)=>{
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus){
        darkThemeMode();
    }
    else{
        lightThemeMode();
    }
}
    return (
        <div className="w-11/12 md:w-10/12 max-w-6xl mx-auto">
        <label className="relative inline-flex items-center cursor-pointer mt-5">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode==='dark'}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-sky-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
            <span className="ml-3 text-l
            mb-2 font-semibold prose prose-slate xl:mb-0 dark:prose-dark">Toggle Theme</span>
        </label>
        </div>
    );
}

