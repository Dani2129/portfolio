// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
})

// Typing Effect
const typingText = document.getElementById("typing-text")
const phrases = ["Full Stack Developer", "UI/UX Designer"]
let phraseIndex = 0
let letterIndex = 0
let currentPhrase = ""
let isDeleting = false
let isEnd = false

function typeEffect() {
  isEnd = false

  // Current phrase from array
  currentPhrase = phrases[phraseIndex]

  // If in deleting state, remove a letter
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, letterIndex - 1)
    letterIndex--
  } else {
    // If typing, add a letter
    typingText.textContent = currentPhrase.substring(0, letterIndex + 1)
    letterIndex++
  }

  // If word is complete
  if (!isDeleting && letterIndex === currentPhrase.length) {
    // Pause at end of typing
    isEnd = true
    isDeleting = true
    setTimeout(() => {
      typeEffect()
    }, 2000)
    return
  }

  // If deleting is complete
  if (isDeleting && letterIndex === 0) {
    isDeleting = false
    // Move to next phrase
    phraseIndex = (phraseIndex + 1) % phrases.length
  }

  // Typing speed
  let typeSpeed = isDeleting ? 50 : 100

  // If at end of word, pause longer
  if (isEnd) typeSpeed = 2000

  setTimeout(typeEffect, typeSpeed)
}

// Start the typing effect
typeEffect()

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 50) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }

  // Update active navigation link based on scroll position
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-links a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Animate skill bars when they come into view
const skillLevels = document.querySelectorAll(".skill-level")
const skillSection = document.getElementById("skills")
let skillsAnimated = false

// Check if skills section is in viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
}

// Animate skills when scrolled into view
const handleSkillAnimation = () => {
  if (isInViewport(skillSection) && !skillsAnimated) {
    skillsAnimated = true // Set flag to true so animation only happens once

    skillLevels.forEach((skill, index) => {
      const width = skill.getAttribute("data-level")
      skill.style.width = "0%"

      // Stagger the animations with a slight delay between each skill
      setTimeout(
        () => {
          skill.style.width = width
        },
        300 + index * 100,
      ) // 300ms base delay + 100ms per skill
    })

    // Remove event listener after animation is triggered
    window.removeEventListener("scroll", handleSkillAnimation)
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleSkillAnimation)

// Also trigger on page load in case skills section is already in viewport
document.addEventListener("DOMContentLoaded", handleSkillAnimation)

// Form Validation
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  // Simple validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all required fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // If validation passes, you would normally send the form data to a server
  // Since this is a frontend-only project, we'll just show a success message
  alert("Thank you for your message! I will get back to you soon.")
  contactForm.reset()
})

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle")
const themeIcon = document.getElementById("theme-icon")

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme")
  themeIcon.classList.remove("fa-moon")
  themeIcon.classList.add("fa-sun")
}

themeToggle.addEventListener("click", () => {
  // Toggle dark theme
  document.body.classList.toggle("dark-theme")

  // Update icon
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("fa-moon")
    themeIcon.classList.add("fa-sun")
    localStorage.setItem("theme", "dark")
  } else {
    themeIcon.classList.remove("fa-sun")
    themeIcon.classList.add("fa-moon")
    localStorage.setItem("theme", "light")
  }
})
