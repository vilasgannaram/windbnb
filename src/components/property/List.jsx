import React from "react";
import properties from "../../store/stays.json";
import ListItem from "./ListItem";

const List = () => {
  return (
    <ul className="mt-6 grid list-none items-center justify-center gap-y-8 md:grid-cols-2 md:gap-x-10 lg:mt-8 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-10">
      {properties.map((property) => (
        <ListItem key={property.id} property={property} />
      ))}
    </ul>
  );
};

export default List;
