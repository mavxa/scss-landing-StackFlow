document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector("i");
  
    // Initialize theme
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    
    htmlElement.classList.toggle("dark-theme", isDark);
    themeIcon.className = isDark 
      ? "bi bi-sun-fill px-2" 
      : "bi bi-moon-fill px-2";
  
    // Toggle handler
    themeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isDark = htmlElement.classList.toggle("dark-theme");
      
      // Update icon
      themeIcon.className = isDark 
        ? "bi bi-sun-fill px-2" 
        : "bi bi-moon-fill px-2";
      
      // Save to storage
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });