// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Add shadow to navbar on scroll
const nav = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const offsetTop = target.offsetTop - 70

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all sections and cards
const sections = document.querySelectorAll(".section")
const cards = document.querySelectorAll(".project-card, .skill-category, .stat-card")

sections.forEach((section) => {
  section.classList.add("fade-in")
  observer.observe(section)
})

cards.forEach((card) => {
  card.classList.add("fade-in")
  observer.observe(card)
})

// Animate skill bars when visible
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress")
      progressBars.forEach((bar) => {
        bar.style.width = bar.style.getPropertyValue("--progress")
      })
      skillObserver.unobserve(entry.target)
    }
  })
}, observerOptions)

const skillSections = document.querySelectorAll(".skill-category")
skillSections.forEach((section) => {
  skillObserver.observe(section)
})

// Contact Form Submission
const contactForm = document.querySelector(".contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Here you would typically send the data to a server
  console.log("Form submitted:", data)

  // Show success message (you can customize this)
  alert("Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.")

  // Reset form
  contactForm.reset()
})

// Add active state to navigation based on scroll position
const sections2 = document.querySelectorAll("section[id]")

function navHighlighter() {
  const scrollY = window.pageYOffset

  sections2.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 100
    const sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add("active")
    } else {
      document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", navHighlighter)

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load (optional)
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    // Uncomment the line below to enable typing effect
    // typeWriter(heroTitle, originalText, 50);
  }
})

// Add parallax effect to hero section (optional)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroContent = document.querySelector(".hero-content")
  const heroImage = document.querySelector(".hero-image")

  if (heroContent && heroImage) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`
  }
})

// Add cursor trail effect (optional, modern touch)
const coords = { x: 0, y: 0 }
const circles = document.querySelectorAll(".cursor-circle")

if (circles.length > 0) {
  circles.forEach((circle) => {
    circle.x = 0
    circle.y = 0
  })

  window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX
    coords.y = e.clientY
  })

  function animateCircles() {
    let x = coords.x
    let y = coords.y

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + "px"
      circle.style.top = y - 12 + "px"
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`

      circle.x = x
      circle.y = y

      const nextCircle = circles[index + 1] || circles[0]
      x += (nextCircle.x - x) * 0.3
      y += (nextCircle.y - y) * 0.3
    })

    requestAnimationFrame(animateCircles)
  }

  animateCircles()
}

window.addEventListener("componentsLoaded", initializeApp)

function initializeApp() {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Add shadow to navbar on scroll
  const nav = document.querySelector(".nav")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))

      if (target) {
        const offsetTop = target.offsetTop - 70

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all sections and cards
  const sections = document.querySelectorAll(".section")
  const cards = document.querySelectorAll(".project-card, .skill-category, .stat-card")

  sections.forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  cards.forEach((card) => {
    card.classList.add("fade-in")
    observer.observe(card)
  })

  // Animate skill bars when visible
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".skill-progress")
        progressBars.forEach((bar) => {
          bar.style.width = bar.style.getPropertyValue("--progress")
        })
        skillObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const skillSections = document.querySelectorAll(".skill-category")
  skillSections.forEach((section) => {
    skillObserver.observe(section)
  })

  // Contact Form Submission
  const contactForm = document.querySelector(".contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Here you would typically send the data to a server
    console.log("Form submitted:", data)

    // Show success message (you can customize this)
    alert("Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.")

    // Reset form
    contactForm.reset()
  })

  // Add active state to navigation based on scroll position
  const sections2 = document.querySelectorAll("section[id]")

  function navHighlighter() {
    const scrollY = window.pageYOffset

    sections2.forEach((current) => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 100
      const sectionId = current.getAttribute("id")

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add("active")
      } else {
        document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove("active")
      }
    })
  }

  window.addEventListener("scroll", navHighlighter)

  // Typing effect for hero title (optional enhancement)
  function typeWriter(element, text, speed = 100) {
    let i = 0
    element.innerHTML = ""

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Initialize typing effect on page load (optional)
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    // Uncomment the line below to enable typing effect
    // typeWriter(heroTitle, originalText, 50);
  }

  // Add parallax effect to hero section (optional)
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroContent = document.querySelector(".hero-content")
    const heroImage = document.querySelector(".hero-image")

    if (heroContent && heroImage) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
      heroImage.style.transform = `translateY(${scrolled * 0.2}px)`
    }
  })

  // Add cursor trail effect (optional, modern touch)
  const coords = { x: 0, y: 0 }
  const circles = document.querySelectorAll(".cursor-circle")

  if (circles.length > 0) {
    circles.forEach((circle) => {
      circle.x = 0
      circle.y = 0
    })

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX
      coords.y = e.clientY
    })

    function animateCircles() {
      let x = coords.x
      let y = coords.y

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px"
        circle.style.top = y - 12 + "px"
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`

        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.3
        y += (nextCircle.y - y) * 0.3
      })

      requestAnimationFrame(animateCircles)
    }

    animateCircles()
  }
}
