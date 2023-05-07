import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const OurChef = () => {
  const { chefs } = useLoaderData();

  return (
    <div className="md:mx-10 w-full ">
      <h2 className="tracking-tight text-cyan-700 md:text-3xl text-xl mt-10 text-center font-bold">
        Top Chef: World All-Stars
      </h2>
      <p className="text-gray-400 pt-3 text-center">
        Get ready to embark on an edible adventure that allows children to
        discover, inspire, question, create and invent all through the world of
        cooking!
      </p>

      <div className="md:grid grid-cols-3  gap-10 md:my-20">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default OurChef;
