  window.onload = function() {
    startSnowfall();
    addTrees();
  };

  function startSnowfall() {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.textContent = "\u2744"; // Snowflake emoji

      const leftPosition = Math.random() * window.innerWidth + "px";
      const randomX = Math.random() * 300 - 150;
      const randomY = Math.random() * 300 + 550;
      const randomRotate = Math.random() * 360;

      snowflake.style.left = leftPosition;
      snowflake.style.top = "-50px";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.fontSize = Math.random() * 10 + 1 + "px";
      snowflake.style.setProperty('--random-x', randomX + 'px');
      snowflake.style.setProperty('--random-y', randomY + 'px');
      snowflake.style.setProperty('--random-rotate', randomRotate + 'deg');

      document.body.appendChild(snowflake);

      setTimeout(() => snowflake.remove(), 5000); // Remove snowflake after 5 seconds
    };

    setInterval(createSnowflake, 100);
  }

  function addTrees() {
    const numberOfTrees = 6;
    let lastPosition = -250;

    for (let i = 0; i < numberOfTrees; i++) {
      const gap = Math.random() * (250 - 150) + 150;
      const newPosition = lastPosition + gap;
      lastPosition = newPosition;

      if (newPosition > window.innerWidth - 100) break;

      const tree = document.createElement("img");
      tree.classList.add('tree');
      tree.src = "https://raw.githubusercontent.com/SravaniValivati/webserver/main/tree.png"; // Update with actual path
      tree.style.left = newPosition + "px";
      tree.style.bottom = "-55px";
      tree.style.height = Math.random() * 100 + 250 + "px";
      document.body.appendChild(tree);
    }
  }
