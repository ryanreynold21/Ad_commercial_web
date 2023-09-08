import React, { useState } from 'react';

const DetailsPhoto = () => {
  const [photo, setPhoto] = useState(
    'https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1ef59f07.jpg'
  );

  const data = [
    {
      photo:
        'https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1ef59f07.jpg',
    },
    {
      photo:
        'https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1ee322f0.jpg',
    },
    {
      photo:
        'https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1ee68645.jpg',
    },
    {
      photo:
        'https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1eebbf57.jpg',
    },
  ];

  return (
    <div className=''>
      <img
        src={photo}
        className='w-[500px] h-[500px] object-contain object-center transition-opacity duration-300 ease-in-out'
        alt=''
      />
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item, index) => (
          <img
            key={index}
            onMouseEnter={() => setPhoto(item.photo)}
            onMouseLeave={() =>
              setPhoto(
                'https://www.ftxk.cn/Uploads/Picture/single/0/2020/04/13/5e93d1ef59f07.jpg'
              )
            }
            className='w-[200px] h-[150px] object-contain transition-opacity duration-300 ease-in-out hover:opacity-70'
            src={item.photo}
            alt=''
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsPhoto;
