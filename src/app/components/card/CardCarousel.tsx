import React, { useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
interface CardCarouselProps {
  clubsInfo: CardObject[];
  numCards?: number;
}
interface CardObject {
  name: string;
  clubId: string;
  description: string;
  image: string;
  favorite?: boolean;
}

function CardCarousel({ clubsInfo, numCards }: CardCarouselProps) {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-row gap-4 items-center overflow-hidden py-10 relative">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-4xl text-gray-500 absolute left-0 z-10"
        onClick={() => {
          setIndex((prev) => prev - numCards!);
        }}
      />
      {/* 
      Another possible method but not sure how to aminate the cards
      {clubsInfo
          .slice(index * numCards!, index * numCards! + numCards!)
          .map((club, i) => {
            //key is i for now
            return <Card clubInfo={club} key={i || club.clubId} />;
          })} */}
      <AnimatePresence>
        {clubsInfo.map((club, i) => {
          if (i >= index && i < index + 2 * numCards!) {
            //key is i for now
            return (
              <Card
                clubInfo={club}
                key={i || club.clubId}
                animate
                numCards={4}
              />
            );
          }
        })}
      </AnimatePresence>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-4xl text-gray-500 absolute right-0 z-10 opacity-80"
        onClick={() => {
          setIndex((prev) => prev + numCards!);
        }}
      />
    </div>
  );
}

CardCarousel.defaultProps = {
  numCards: 4,
};

export default CardCarousel;
