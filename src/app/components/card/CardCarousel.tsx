import React, { useState, useRef, useEffect } from "react";
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
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log(carousel.current!.scrollWidth, carousel.current!.offsetWidth);
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <div className="flex flex-row items-center relative justify-around overflow-hidden">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-4xl text-gray-500 absolute left-0 z-10"
        // onClick={() => {
        //   setIndex((prev) => prev - numCards!);
        // }}
      />
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex flex-row gap-4 py-10"
        >
          {clubsInfo.map((club, i) => {
            //key is i for now
            return (
              <motion.div
                className={`item ${i === 0 && "ml-8"} ${
                  i === clubsInfo.length - 1 && "mr-8"
                }`}
                key={i}
              >
                <Card clubInfo={club} key={i || club.clubId} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-4xl text-gray-500 absolute right-0 z-10 opacity-80"
        // onClick={() => {
        //   setIndex((prev) => prev + numCards!);
        // }}
      />
    </div>
  );
}

CardCarousel.defaultProps = {
  numCards: 4,
};

export default CardCarousel;
