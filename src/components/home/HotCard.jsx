import React from "react";
import { v4 as uuidv4 } from "uuid";

const HotCard = () => {
  const data = [
    {
      id: uuidv4(),
      name: "莱薇尔腋香净爽液",
      title: "LAVER莱薇尔去狐臭喷雾祛腋臭净味",
      price: "¥ 499",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/1/2019/04/03/5ca4137da5b80.jpg",
    },
    {
      id: uuidv4(),
      name: "莱薇尔腋香净爽液",
      title: "LAVER莱薇尔去狐臭喷雾祛腋臭净味",
      price: "¥ 499",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/1/2019/04/08/5cab09ccc8e36.jpg",
    },
    {
      id: uuidv4(),
      name: "莱薇尔腋香净爽液",
      title: "LAVER莱薇尔去狐臭喷雾祛腋臭净味",
      price: "¥ 499",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/2/2019/11/20/5dd4e61b6db4c.jpg",
    },
    {
      id: uuidv4(),
      name: "莱薇尔腋香净爽液",
      title: "LAVER莱薇尔去狐臭喷雾祛腋臭净味",
      price: "¥ 499",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/2/2019/11/29/5de0bb120d728.jpg",
    },
    {
      id: uuidv4(),
      name: "莱薇尔腋香净爽液",
      title: "LAVER莱薇尔去狐臭喷雾祛腋臭净味",
      price: "¥ 499",
      photo:
        "https://www.ftxk.cn/Uploads/Picture/single/0/2019/04/04/5ca59dbe12fae.png",
    },
  ];
  return (
    <div>
      <div className=" grid grid-cols-5 gap-6 py-10">
        {data.map((card) => (
          <div
            className=" flex justify-center items-center flex-col p-4 gap-5 hover:-translate-y-3 hover:shadow-xl transition-all duration-200"
            key={card.id}
          >
            <h1 className=" text-[20px] text-black">{card.name}</h1>
            <p className=" text-[16px] text-stone-600">{card.title}</p>
            <p className=" text-[22px] font-bold text-red-600">{card.price}</p>
            <img
              src={card.photo}
              className=" w-[250px] h-[250px] object-cover object-center"
              alt=""
            />
            <button className=" px-10 py-3 text-[18px] border border-red-600 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotCard;
