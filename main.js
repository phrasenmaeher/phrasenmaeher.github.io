function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
      const wealthBars = document.querySelectorAll(".debt");
      wealthBars.forEach(bar => {
        if (!bar.dataset.scaled) {
          const amount = parseInt(bar.dataset.height) / 1000;
          const width = Math.min(Math.sqrt(amount), 400);
          const height = amount / width;
          bar.style.width = width + "px";
          bar.style.height = height + "px";
          bar.dataset.scaled = "true";

          if (bar.classList.contains("ruler")) {
            const markerSpacing = 10000 / width // 1pixel = €1000, so 1M = 1000 pixels
            const markerCount = 1000 // goes up to 10 billion, or 10000 million
            for (let i = 1; i <= markerCount; i++) { // Place a marker every 1 million
              const marker = document.createElement("div");
              marker.classList.add("marker");
              const markerPosition = i * markerSpacing;
              marker.style.top = markerPosition + "px";
          
              const label = document.createElement("div");
              label.classList.add("marker-label");
              label.style.top = markerPosition + "px";
              label.innerText = `€${i*10} M`;
          
              bar.appendChild(marker);
              bar.appendChild(label);
            }
          }
          
        }
      });
    });

document.addEventListener("DOMContentLoaded", function() {
      const topButton = document.querySelectorAll(".back-to-top");
    
      topButton.forEach(button => {
        button.addEventListener("click", function() {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    });