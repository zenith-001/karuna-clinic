document.onscroll = function(){
if (window.pageYOffset <=10) {
    document.querySelector("#go-up").style.display="none";
}
else{
    document.querySelector("#go-up").style.display="block";
}}
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
  // Toggle the "dark" class on the <html> element
  htmlElement.classList.toggle("dark");
  
  // Optionally, save the theme choice to localStorage
  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load theme from localStorage on page load
if (localStorage.getItem("theme") === "dark") {
  htmlElement.classList.add("dark");
} else {
  htmlElement.classList.remove("dark");
}
