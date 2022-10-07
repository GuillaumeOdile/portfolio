import React from "react";
import reduxThunk from "../images/reduxThunk.png";
import clean from "../images/clean.png";
import gitLogo from "../images/gitLogo.png";

const MyArticles = () => {
  return (
    <div className="mt-16 w-full rounded-3xl bg-slate-900 bg-opacity-70">
      <div className="flex flex-col text-left m-8 items-center justify-center space-y-8">
        <span className=" text-gray-200 text-4xl underline decoration-emerald-300">
          Articles tech
        </span>

        <p className="text-gray-300 text-lg">
          Le blog ici est en cours de construction 🚧 mais vous pouvez déjà
          accéder à 3 articles que j'ai écris précédemment:
        </p>

        <div className="flex flex-col justify-center space-y-14">
          <a
            href="https://tech.gojob.com/git-tricks/"
            className="flex flex-col items-center space-y-4 sm:text-2xl text-xl font text-gray-300 text-center"
          >
            <div className="relative group w-full">
              <div className="absolute rounded-3xl -inset-1 blur bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <img
                src={gitLogo}
                className="relative rounded-3xl object-cover aspect-auto max-w-sm w-full h-48 transition duration-1000 group-hover:duration-200"
                alt="git tricks"
              />
            </div>
            <span>Comment gagner du temps avec git</span>
          </a>

          <a
            href="https://tech.gojob.com/clean-archi-uncle-bob/"
            className="flex flex-col items-center space-y-4 sm:text-2xl text-xl font text-gray-300 text-center"
          >
            <div className="relative group w-full">
              <div className="absolute rounded-3xl -inset-1 blur bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <img
                src={clean}
                className="relative rounded-3xl object-cover aspect-auto max-w-sm w-full h-48 transition duration-1000 group-hover:duration-200"
                alt="clean architecture"
              />
            </div>
            <span>Les bases de la clean architecture</span>
          </a>
          <a
            href="https://tech.gojob.com/redux-thunk-typescript/"
            className="flex flex-col items-center space-y-4 sm:text-2xl text-xl font text-gray-300 text-center"
          >
            <div className="relative group w-full">
              <div className="absolute rounded-3xl -inset-1 blur bg-gradient-to-r from-pink-600 to-purple-600 opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <img
                src={reduxThunk}
                className="relative rounded-3xl object-cover aspect-auto max-w-sm w-full h-48 transition duration-1000 group-hover:duration-200"
                alt="redux thunk"
              />
            </div>
            <span>Redux-thunk</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyArticles;