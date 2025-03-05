document.addEventListener("DOMContentLoaded", function () {
    // 🌟 Navbar Scroll Effect
    let navbar = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // 🌟 Skills Dropdown Toggle
    let skillsBtn = document.getElementById("skills-btn");
    let skillsList = document.getElementById("skillsList");

    skillsBtn.addEventListener("click", function (event) {
        event.preventDefault();
        skillsList.style.display = skillsList.style.display === "block" ? "none" : "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!skillsBtn.contains(event.target) && !skillsList.contains(event.target)) {
            skillsList.style.display = "none";
        }
    });

    // 🌟 Typing Animation
    let typedText = document.getElementById("typing-text");
    let words = ["Frontend Developer", "Web Designer", "JavaScript Expert"];
    let wordIndex = 0;
    let letterIndex = 0;

    function typeEffect() {
        if (letterIndex < words[wordIndex].length) {
            typedText.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => eraseEffect(), 1000);
        }
    }

    function eraseEffect() {
        if (letterIndex > 0) {
            typedText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    observer.observe(item);
});
// 🚀 Scroll Animation - Projects Smoothly Appear on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const projectsSection = document.querySelector("#projects");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    projectsSection.style.opacity = "1";
                    projectsSection.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(projectsSection);
});

// 🚀 3D Tilt Effect on Mouse Move
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0) rotateX(0)";
    });
});

// 🚀 Auto-Slide Client Reviews Every 3 Seconds
let reviews = document.querySelectorAll(".review");
let currentReview = 0;

function changeReview() {
    reviews.forEach((review, index) => {
        review.style.opacity = "0";
    });

    reviews[currentReview].style.opacity = "1";

    currentReview = (currentReview + 1) % reviews.length;
}

// Start Auto-Review Slide
setInterval(changeReview, 3000);
document.addEventListener("mousemove", (e) => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.querySelector(".bubbles-container").appendChild(bubble);

    let x = e.clientX;
    let y = e.clientY;

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    let randomSize = Math.random() * 10 + 5;
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;

    setTimeout(() => {
        bubble.style.transform = `scale(1.5)`;
        bubble.style.opacity = "0";
        setTimeout(() => {
            bubble.remove();
        }, 500);
    }, 50);
});
function createBubbles() {
    const container = document.querySelector(".bubbles-container");

    for (let i = 0; i < 20; i++) {  // Increase bubble count if needed
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 20 + 10; // Random size
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.bottom = `-${size}px`; // Start from bottom
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Different speeds

        container.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 10000); // Remove bubble after 10s
    }
}

// Generate bubbles every 2 seconds
setInterval(createBubbles, 2000);
function createBubbles() {
    const container = document.querySelector(".bubbles-container");

    for (let i = 0; i < 40; i++) { // Increase bubbles count if needed
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 30 + 10; // Random size (10px to 40px)
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        bubble.style.animationDuration = `${Math.random() * 8 + 5}s`; // Different speeds
        bubble.style.animationDelay = `${Math.random() * 5}s`; // Staggered delay

        container.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 13000); // Remove bubble after 13s to prevent overload
    }
}

// Generate bubbles every 1.5 seconds
setInterval(createBubbles, 1500);
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const aboutButton = document.querySelector("a[href='#about']");

    aboutButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump
        aboutSection.classList.toggle("show"); // Toggle visibility
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");
    const aboutButton = document.querySelector("a[href='#about']");

    aboutButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page jump

        if (aboutSection.classList.contains("show")) {
            aboutSection.classList.remove("show");
            setTimeout(() => {
                aboutSection.style.display = "none";
            }, 500); // Hide after animation
        } else {
            aboutSection.style.display = "block";
            setTimeout(() => {
                aboutSection.classList.add("show");
            }, 10); // Add animation
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");
    const aboutButton = document.querySelector("a[href='#about']");

    aboutButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page jump

        if (aboutSection.classList.contains("show")) {
            aboutSection.style.opacity = "0";
            aboutSection.style.transform = "translateY(30px)";
            setTimeout(() => {
                aboutSection.style.display = "none";
                aboutSection.classList.remove("show");
            }, 500); // Hide after animation
        } else {
            aboutSection.style.display = "block";
            setTimeout(() => {
                aboutSection.classList.add("show");
                aboutSection.style.opacity = "1";
                aboutSection.style.transform = "translateY(0)";
            }, 10); // Show animation
        }
    });
});
document.querySelector('a[href="#about"]').addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact-btn").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("contact-popup").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("contact-popup").style.display = "none";
});

// Agar koi bahar click kare toh popup close ho jaye
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("contact-popup")) {
        document.getElementById("contact-popup").style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact-form-container");
    const contactButton = document.querySelector("a[href='#contact']");
    const closeButton = document.querySelector(".close-btn");

    // Open form on button click
    contactButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior
        contactForm.classList.add("show");
        document.body.classList.add("form-open");
    });

    // Close form on close button click
    closeButton.addEventListener("click", function () {
        contactForm.classList.remove("show");
        document.body.classList.remove("form-open");
    });
});
const contactForm = document.querySelector("#contact-form-container");
const contactButton = document.querySelector("#contact-btn"); // ID use ki hai
const closeButton = document.querySelector(".close-btn");

contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    contactForm.classList.add("show");
});

closeButton.addEventListener("click", function () {
    contactForm.classList.remove("show");
});
function forceDownload() {
    let cvLink = "https://drive.google.com/file/d/1aZAkuoV6Pxoe726IISVPzP491-X0Z6G2/view?usp=sharing";
    let downloadLink = cvLink + "&rand=" + new Date().getTime(); // Unique URL
    let newTab = window.open(downloadLink, "_blank"); // Open in new tab

    if (!newTab || newTab.closed || typeof newTab.closed == "undefined") { 
        alert("Popup Blocked! Allow pop-ups for this site.");
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
function createBubbles() {
    const container = document.querySelector(".bubbles-container");
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff00ff", "#00ffee"]; // Red, Green, Blue, Yellow, Pink, Cyan

    for (let i = 0; i < 20; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 30 + 10; // Random size
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;

        // Random color selection
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(bubble);

        // Remove bubble after 10 seconds
        setTimeout(() => {
            bubble.remove();
        }, 10000);
    }
}

// Generate bubbles every 2 seconds
setInterval(createBubbles, 2000);
