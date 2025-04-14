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

let currentTestimonial = 0

// Initialize testimonials
function initializeTestimonials() {
  updateTestimonialSlide()

  const prevButton = document.createElement("button")
  prevButton.className = "testimonial-nav prev"
  prevButton.innerHTML = "❮"
  prevButton.onclick = previousTestimonial

  const nextButton = document.createElement("button")
  nextButton.className = "testimonial-nav next"
  nextButton.innerHTML = "❯"
  nextButton.onclick = nextTestimonial

  const navigation = document.createElement("div")
  navigation.className = "testimonial-navigation"
  navigation.appendChild(prevButton)
  navigation.appendChild(nextButton)

  const slider = document.getElementById("testimonialSlider")
  slider.parentElement.appendChild(navigation)

  // Add dots navigation
  const dotsContainer = document.createElement("div")
  dotsContainer.className = "testimonial-dots"

  testimonials.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.className = `testimonial-dot ${
      index === currentTestimonial ? "active" : ""
    }`
    dot.onclick = () => goToTestimonial(index)
    dotsContainer.appendChild(dot)
  })

  slider.parentElement.appendChild(dotsContainer)

  // Auto advance slides
  setInterval(nextTestimonial, 5000)
}

function updateTestimonialSlide() {
  const slider = document.getElementById("testimonialSlider")
  slider.innerHTML = ""

  // Show 3 testimonials at a time
  for (let i = 0; i < 3; i++) {
    const index = (currentTestimonial + i) % testimonials.length
    const testimonial = testimonials[index]

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
  }

  // Update dots
  const dots = document.querySelectorAll(".testimonial-dot")
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonial)
  })
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  updateTestimonialSlide()
}

function previousTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length
  updateTestimonialSlide()
}

function goToTestimonial(index) {
  currentTestimonial = index
  updateTestimonialSlide()
}

// Form validation
function validateForm(event) {
  event.preventDefault()
  const form = event.target
  const name = form.name.value
  const email = form.email.value
  const message = form.message.value

  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address")
    return
  }

  // Here you would typically send the form data to a server
  alert("Thank you for your message! We will get back to you soon.")
  form.reset()
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
