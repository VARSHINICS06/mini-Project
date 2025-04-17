function updateClock() {
    const now = new Date();
  
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
  
    h = h % 12 || 12; // Convert to 12-hour format
  
    document.getElementById("hours").textContent = String(h).padStart(2, '0');
    document.getElementById("minutes").textContent = String(m).padStart(2, '0');
    document.getElementById("seconds").textContent = String(s).padStart(2, '0');
    document.getElementById("ampm").textContent = ampm;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Run once on load
