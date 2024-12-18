import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [currentImage, setCurrentImage] = useState("images/1.png"); // Default image
  const [showThemes, setShowThemes] = useState(false); // Toggle themes section

  // List of image names
  const imageList = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/10.png",
    "images/11.png",
    "images/12.png",
    "images/13.png",
    "images/14.png",
    "images/15.png",
    "images/16.png",
    "images/17.png",
    "images/18.png",
    "images/19.png",
    "images/20.png",
    "images/21.png",
    "images/22.png",
    "images/23.png",
    "images/24.png",
    "images/25.png",
    "images/26.png",
    "images/27.png",
    "images/28.png",
    "images/29.png",
    "images/30.png",
    "images/31.png",
    "images/32.png",
    "images/33.png",
    "images/34.png",
    "images/35.png",
    "images/36.png",
    "images/37.png",
    "images/38.png",
    "images/39.png",
    "images/40.png",
  ];

  // Increment function
  const handleIncrement = () => {
    playSound("increment-sound");
    setCount((prevCount) => prevCount + 1);
  };

  // Reset function
  const handleReset = () => {
    playSound("reset-sound");
    setCount(0);
  };

  // Play sound function
  const playSound = (soundId) => {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  };

  // Toggle themes modal
  const toggleThemes = () => {
    setShowThemes((prevState) => !prevState);
  };

  // Change the main image
  const changeImage = (newImage) => {
    setCurrentImage(newImage);
    setShowThemes(false); // Close themes modal after selecting an image
  };

  return (
    <>
      <div className="container tasbeeh">
        <div className="gear-icon" onClick={toggleThemes}>
          ⚙️
        </div>

        <div className="tasbeeh-counter">
          <div className="count-display">{count}</div>

          <img src={currentImage} alt="Tasbeeh" className="tasbeeh-image" />

          <button className="count-button" onClick={handleIncrement}></button>
          <button className="reset-button" onClick={handleReset}></button>

          <audio id="increment-sound" src="sounds/increment.mp3"></audio>
          <audio id="reset-sound" src="sounds/reset.mp3"></audio>
        </div>

        {showThemes && (
          <div className="themes-modal">
            <h3>Select a Theme</h3>
            <div className="themes-gallery">
              {imageList.map((image, index) => (
                <img
                  key={index} // Unique key for each image
                  src={image}
                  alt={`Theme ${index + 1}`}
                  onClick={() => changeImage(image)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
