const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    // Change icon (bars <-> close)
    hamburger.innerHTML = navLinks.classList.contains("nav-active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});
// Close nav when a link is clicked (for better UX on mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("nav-active")) {
            navLinks.classList.remove("nav-active");
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
);
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }
);
}
);
