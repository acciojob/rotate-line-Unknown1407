//your JS code here. If required.
const line = document.getElementById('line');
    let rotation = 0;

    function rotateLine() {
      rotation += 1;
      line.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(rotateLine);
    }

    rotateLine(); // Start the rotation