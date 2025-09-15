import React from 'react';
import './App.scss';

import Carousel from './components/Carousel';

interface State {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animaTionDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],

    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animaTionDuration: 1000,
    infinite: false,
  };

  render() {
    const { images, step, frameSize, itemWidth, animaTionDuration, infinite } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>
        <div className="inputs">
          <label htmlFor="stepId">
            Step
            <input
              id="stepId"
              type="number"
              value={step}
              onChange={event => {
                this.setState({ step: Number(event.target.value) });
              }}
            />
          </label>
          <label htmlFor="frameId">
            FrameSize
            <input
              id="frameId"
              type="number"
              value={frameSize}
              onChange={event => {
                this.setState({ frameSize: Number(event.target.value) });
              }}
            />
          </label>
          <label htmlFor="itemId">
            itemWidth
            <input
              id="itemId"
              type="number"
              value={itemWidth}
              onChange={event => {
                this.setState({ itemWidth: Number(event.target.value) });
              }}
            />
          </label>
          <label htmlFor="animaId">
            animationDuration
            <input
              id="animaId"
              type="number"
              value={animaTionDuration}
              onChange={event => {
                this.setState({
                  animaTionDuration: Number(event.target.value),
                });
              }}
            />
          </label>
          
          <div className='inputs__select'> infinite
            <select
              onChange={event => {
                this.setState({ infinite: event.target.value == 'true' });
              }}
            >
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </div>
        </div>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animaTionDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
