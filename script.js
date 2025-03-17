// Testimonial Data
const testimonials = [
  {
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "John Smith",
    role: "Customer",
    text: "Dolor deserunt consectetur fugit molestiet quis velit fugiat laborum quis ut velit molestie",
  },
  {
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "Jane Smith",
    role: "Customer",
    text: "Dolor deserunt consectetur fugit molestiet quis velit fugiat laborum quis ut velit molestie",
  },
  {
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "Mike Smith",
    role: "Customer",
    text: "Dolor deserunt consectetur fugit molestiet quis velit fugiat laborum quis ut velit molestie",
  },
  {
    avatar: "https://i.pravatar.cc/100?img=4",
    name: "Sarah Smith",
    role: "Customer",
    text: "Dolor deserunt consectetur fugit molestiet quis velit fugiat laborum quis ut velit molestie",
  },
]

// Initialize testimonials
function initializeTestimonials() {
  const slider = document.getElementById("testimonialSlider")

  testimonials.forEach((testimonial) => {
    const testimonialCard = document.createElement("div")
    testimonialCard.className = "testimonial-card"
    testimonialCard.innerHTML = `
            <div class="stars">★★★★★</div>
            <p>${testimonial.text}</p>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}">
                <div>
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `
    slider.appendChild(testimonialCard)
  })
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
  } else {
    navbar.style.backgroundColor = "white"
    navbar.style.boxShadow = "none"
  }
})

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeTestimonials()
})
