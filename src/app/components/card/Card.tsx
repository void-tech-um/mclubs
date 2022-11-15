import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface CardObject {
  name: string;
  clubId: string;
  description: string;
  image: string;
  favorite?: boolean;
}
interface CardProps {
  clubInfo: CardObject;
}

function Card({ clubInfo }: CardProps) {
  return (
    <div className="card card-compact w-52 bg-base-100 shadow-xl shrink-0">
      <Link to={`/clubs/${clubInfo.clubId}`}>
        <figure className="relative">
          {clubInfo.favorite && (
            <FontAwesomeIcon
              icon={faStar}
              className="absolute top-2 right-2 text-yellow-300"
            />
          )}
          <img src={clubInfo.image} alt="" />
        </figure>
        <div className="card-body gap-1 ">
          <h2 className="card-title">{clubInfo.name}</h2>
          <p>{clubInfo.description}</p>
        </div>
      </Link>
    </div>
  );
}
Card.defaultProps = {
  numCards: 4,
};

export default Card;
