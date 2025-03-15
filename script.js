// Form submission handling
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("Form submitted!")
})

// Carousel functionality
class Carousel {
  constructor(element) {
    this.carousel = element
    this.items = Array.from(
      this.carousel.getElementsByClassName("carousel-item")
    )
    this.totalItems = this.items.length
    this.currentIndex = 0

    // Create dots
    this.dotsContainer = document.querySelector(".carousel-dots")
    this.createDots()

    // Add controls
    const controls = document.querySelectorAll(".carousel-control")
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        const direction = control.dataset.direction
        this.slide(direction === "next" ? 1 : -1)
      })
    })

    // Auto-play
    this.startAutoPlay()
  }

  createDots() {
    for (let i = 0; i < this.totalItems; i++) {
      const dot = document.createElement("div")
      dot.classList.add("dot")
      if (i === 0) dot.classList.add("active")
      dot.addEventListener("click", () => this.goToSlide(i))
      this.dotsContainer.appendChild(dot)
    }
  }

  updateDots() {
    const dots = this.dotsContainer.getElementsByClassName("dot")
    Array.from(dots).forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  slide(direction) {
    this.currentIndex =
      (this.currentIndex + direction + this.totalItems) % this.totalItems
    this.updateCarousel()
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateCarousel()
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100
    this.carousel.style.transform = `translateX(${offset}%)`
    this.updateDots()
  }

  startAutoPlay() {
    setInterval(() => {
      this.slide(1)
    }, 5000)
  }
}

// Initialize carousel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = new Carousel(document.getElementById("testimonialCarousel"))
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add animation class on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".grid-item, .step, .testimonial-card"
  )

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("animate")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)
document.addEventListener("DOMContentLoaded", animateOnScroll)
