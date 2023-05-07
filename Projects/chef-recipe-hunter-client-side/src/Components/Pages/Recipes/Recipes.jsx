import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Recipes = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const chef = useLoaderData();
  const handleFavourite = () => {
    toast.success("Added to favourite!");
    setIsDisabled(true);
  };

  return (
    <div className=" bg-cyan-50">
      <div className="flex  ">
        <div className=" mask mask-squircle">
          <img
            className="w-full h-full object-cover"
            src={chef?.picture}
            alt="chef image"
          />
        </div>
        <div className="w-6/12 ml-2">
          <h2 className="text-5xl my-9 text-cyan-700 font-bold">
            {chef?.name}
          </h2>
          <p>
            <span className="font-bold">About : </span>
            {chef?.bio}
          </p>
          <li className="font-semibold mt-4">
            Recipes : <span className="font-bold">{chef?.num_recipes}</span>{" "}
          </li>
          <li className="font-semibold">
            Experience :
            <span className="font-bold"> {chef?.experience_years}</span> years
          </li>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-4xl text-center my-10 text-cyan-500 animate-bounce ">
          Top Recipes
        </h2>
        <div className="grid grid-cols-3 gap-10 mx-auto w-10/12">
          <div className="card card-compact  bg-orange-100 overflow-hidden shadow-xl">
            <figure>
              <img
                className="h-80 w-full object-cover"
                src={chef.recipes_}
                alt="recipe"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-2xl">{chef.recipes}</h2>
              <h1>
                To keep garlic from going rancid, always store it at room
                temperature.
              </h1>
              <div className="card-actions justify-center mt-5">
                <div className="mr-5 flex items-center my-auto ">
                  <h1 className="font-bold text-xl mr-3">Rating: 5</h1>
                  <Rating style={{ maxWidth: 100 }} readOnly></Rating>
                </div>
                <button
                  onClick={handleFavourite}
                  disabled={isDisabled}
                  className="btn btn-primary"
                >
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-orange-100 overflow-hidden shadow-xl">
            <figure>
              <img
                className="h-80 w-full object-cover"
                src={chef.recipes1_pic}
                alt="recipe"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-2xl">{chef.recipes1}</h2>
              <h1>
                Soften hard brown sugar by placing a piece of dry bread in the
                bag overnight.
              </h1>
              <div className="card-actions justify-center mt-5">
                <div className="mr-5 flex items-center my-auto ">
                  <h1 className="font-bold text-xl mr-3">Rating: 5</h1>
                  <Rating style={{ maxWidth: 100 }} readOnly></Rating>
                </div>
                <button
                  onClick={handleFavourite}
                  disabled={isDisabled}
                  className="btn btn-primary"
                >
                  Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-orange-100 overflow-hidden shadow-xl">
            <figure>
              <img
                className="h-80 w-full object-cover"
                src={chef.recipes2_pic1}
                alt="recipe"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-2xl">{chef.recipes2}</h2>
              <h1>
                Recipes are only a guideline. Feel free to substitute items that
                cater to your personal preferences.
              </h1>
              <div className="card-actions justify-center mt-5">
                <div className="mr-5 flex items-center my-auto ">
                  <h1 className="font-bold text-xl mr-3">Rating: 5</h1>
                  <Rating style={{ maxWidth: 100 }} readOnly></Rating>
                </div>
                <button
                  onClick={handleFavourite}
                  disabled={isDisabled}
                  className="btn btn-primary"
                >
                  Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
