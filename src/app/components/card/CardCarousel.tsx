import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { CardObject } from "../../global/types";

interface CardCarouselProps {
  clubsInfo: CardObject[];
  numCards?: number;
}

function CardCarousel({ clubsInfo, numCards }: CardCarouselProps) {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLHeadingElement>(null);
  const xPos = useRef(0);
  const animation = useAnimation();

  function onLeftClick() {
    const newXPosition = xPos.current + numCards! * 224;
    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
      transition: { duration: 1 },
    });
  }
  function onRightClick() {
    const newXPosition = xPos.current - numCards! * 224;
    animation.start({
      x: newXPosition < -width ? -width : newXPosition,
      transition: { duration: 1 },
    });
  }
  function onUpdate(latest: any) {
    xPos.current = latest.x;
  }

  useEffect(() => {
    console.log(carousel.current!.scrollWidth, carousel.current!.offsetWidth);
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <div className="flex flex-row items-center relative overflow-hidden">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-4xl text-gray-500 absolute left-0 z-10 hidden sm:block"
        onClick={onLeftClick}
      />
      <motion.div
        ref={carousel}
        className="carousel overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          onUpdate={onUpdate}
          className="flex flex-row gap-4 py-10"
          animate={animation}
          initial={false}
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
        className="text-4xl text-gray-500 absolute right-0 z-10 opacity-80 hidden sm:block"
        onClick={onRightClick}
      />
    </div>
  );
}

CardCarousel.defaultProps = {
  numCards: 4,
};

export default CardCarousel;
