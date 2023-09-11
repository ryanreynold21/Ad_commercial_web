import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const P2card = () => {
  const data = [
    {
      id: uuidv4(),
      name: "Panther time-lapse spray four generations",
      price: "¥ 499",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1ef59f07.jpg",
    },
    {
      id: uuidv4(),
      name: "Drpapa time-lapse spray",
      price: "¥ 199",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/2/2019/11/20/5dd4e61b6db4c.jpg",
    },
  ];
  return (
    <>
      <div className="">
        <div className=" grid grid-rows-2 gap-20 ">
          {data.map((card) => (
            <Link to={"/details"}>
              <div
                key={card.id}
                className=" cursor-pointer flex justify-center items-center flex-col"
              >
                <h1 className=" text-[30px] text-red-600 font-[600]">
                  {card.price}
                </h1>
                <p className=" text-black text-[20px] text-center">
                  {card.name}
                </p>
                <img
                  src={card.photo}
                  className=" w-[200px] h-[200px] object-cover"
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default P2card;
