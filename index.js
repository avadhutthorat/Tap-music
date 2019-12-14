window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visuals = document.querySelector(".visuals");
  const colors = [
    "#e7e302",
    "#630b0b",
    "#9fb427",
    "#12291c",
    "#17234b",
    "#300616"
  ];

  // adding sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  // creating bubbles
  const createBubble = index => {
    let bubble = document.createElement("div");
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";

    // handlling performance
    bubble.addEventListener("animationend", function() {
      visuals.removeChild(this);
    });
  };
});
