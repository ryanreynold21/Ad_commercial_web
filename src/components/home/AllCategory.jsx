import React from "react";
import { v4 as uuidv4 } from "uuid";

const AllCategory = () => {
  const data = [
    {
      id: uuidv4(),
      name: "Adult Product",
      description:
        "Time delay spray, orgasm lubricant, condoms, erotic underwear",
    },
    {
      id: uuidv4(),
      name: "Whitening skincare",
      description: "Hair removal hand cream, sun protection and whitening",
    },
    {
      id: uuidv4(),
      name: "Fox stinks armpit odor",
      description: "Antiperspirant Hydrator Odor Powder Purifying Water",
    },
    {
      id: uuidv4(),
      name: "Shampoo and conditioner",
      description: "Anti-hair loss shampoo to dye black hair",
    },
    {
      id: uuidv4(),
      name: "Body care",
      description: "Nail fungus foot patches",
    },
    {
      id: uuidv4(),
      name: "Perfume lipstick",
      description: "Perfume lipstick",
    },
  ];
  return (
    <div>
      <ul className=" my-5 flex flex-wrap lg:flex-col gap-4 lg:gap-5">
        {data.map((card) => (
          <li
            key={card.id}
            className=" flex flex-col px-4 py-2 text-center hover:border cursor-pointer hover:border-green-500 transition-all duration-100 border lg:border-none border-black"
          >
            <h1 className=" text-[10px] lg:text-[25px] text-black">
              {card.name}
            </h1>
            <p className=" hidden lg:block text-[8px] lg:text-[15px] text-stone-600">
              {card.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCategory;
