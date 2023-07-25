import React from "react";
import { useDarkMode } from "context/darkmode";

const TriggerDarkMode = () => {
    const { darkMode ,setDarkMode } = useDarkMode();
  return (
    <button
      className="bg-indigo-500 p-2 rounded-lg shadow-md hover:bg-gray-200"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? "Desactivar" : "Activar"} DarkMode
    </button>
  );
};

export default TriggerDarkMode;
