import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite = false,
}) => {
  const frame = itemWidth * frameSize;
  const stepIcon = itemWidth * step;
  const conteinerWith = itemWidth * images.length - frame;

  const [transform, setTransform] = useState(0);

  if (transform < -conteinerWith) {
    setTransform(-conteinerWith);
  }

  if (transform > 0) {
    setTransform(0);
  }

  function trans() {
    if (transform <= -conteinerWith) {
      setTransform(-conteinerWith);
      if (infinite) {
        setTransform(0);

        return;
      }
    } else {
      setTransform(transform - stepIcon);
    }
  }

  function transfer() {
    if (transform >= 0) {
      if (infinite) {
        setTransform(-conteinerWith);

        return;
      }
    } else {
      setTransform(transform + stepIcon);
    }
  }

  return (
    <div className="Carousel">
      <div style={{ width: frame }} className="Carousel__content">
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${transform}px)`,
            transition: `transform ${animationDuration}ms ease-in-out`,
          }}
        >
          {images.map((icon, index) => (
            <li
              className="Carousel__item"
              key={index}
              style={{ width: itemWidth }}
            >
              <img
                width={itemWidth}
                className="Carousel__icon"
                src={icon}
                alt={`${index}`}
              />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="Carousel__button Carousel__button--prev"
        disabled={transform === 0 && !infinite}
        onClick={() => transfer()}
        type="button"
      >
        Prev
      </button>
      <button
        className="Carousel__button Carousel__button--next"
        data-cy="next"
        type="button"
        disabled={!infinite && transform <= -conteinerWith}
        onClick={() => trans()}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
