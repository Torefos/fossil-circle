import React from "react";

interface TipCardProps {
  title: string;
  description: string;
}

const TipCard = ({ title, description }: TipCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border hover-scale">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TipCard;