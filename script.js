function calculateTriangle() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const sideB = parseFloat(document.getElementById("sideB").value);
    const sideC = parseFloat(document.getElementById("sideC").value);
  
    if (sideA && sideB && sideC) {
      if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
        const perimeter = sideA + sideB + sideC;
        const area = Math.sqrt(perimeter / 2 * (perimeter / 2 - sideA) * (perimeter / 2 - sideB) * (perimeter / 2 - sideC));
        document.getElementById("result").textContent = `Perimeter: ${perimeter.toFixed(2)}, Area: ${area.toFixed(2)}`;
      } else {
        document.getElementById("result").textContent = "Invalid sides for a triangle";
      }
    } else {
      document.getElementById("result").textContent = "Please enter valid side lengths";
    }
  }
  