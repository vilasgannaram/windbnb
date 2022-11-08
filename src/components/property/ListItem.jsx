import React from "react";

const ListItem = (props) => {
  const {
    id,
    city,
    country,
    superHost,
    title,
    rating,
    maxGuests,
    type,
    beds,
    photo,
  } = props.property;
  return (
    <li className="cursor-pointer">
      <div className="">
        <img
          className="h-full max-h-[250px] w-full rounded-xl object-cover lg:max-h-[300px] lg:rounded-2xl"
          src={photo}
          alt={title}
        />

        <figcaption className="mt-2 flex items-center justify-between lg:mt-3">
          <div className="flex items-center">
            {superHost && (
              <button className="mr-2 rounded-xl border border-gray2 px-2 py-1.5 text-[10px] font-bold uppercase leading-3 text-gray2 lg:px-2.5 lg:py-2 lg:text-[12px] lg:leading-[15px]">
                super host
              </button>
            )}
            <p className="text-[12px] font-medium leading-[15px] text-gray3 lg:text-[14px] lg:leading-[17px]">
              {type} {beds && <span className="ml-1">.{beds} beds</span>}
            </p>
          </div>

          <div className="flex items-center text-[12px] font-medium leading-[15px] text-gray2 lg:text-[14px] lg:leading-[17px]">
            <i className="material-icons mr-1 text-orange1">star</i>

            <p>{rating}</p>
          </div>
        </figcaption>
      </div>

      <h2 className="mt-3 text-[14px] font-semibold leading-[17px] text-gray1 lg:mt-4 lg:text-[16px] lg:leading-[20px]">
        {title}
      </h2>
    </li>
  );
};

export default ListItem;
