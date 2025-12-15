// Component Loader - Load HTML components into page
class ComponentLoader {
  constructor() {
    this.components = [
      { path: "components/nav.html", container: "nav-container" },
      { path: "components/hero.html", container: "hero-container" },
      { path: "components/about.html", container: "about-container" },
      { path: "components/skills.html", container: "skills-container" },
      { path: "components/projects.html", container: "projects-container" },
      { path: "components/contact.html", container: "contact-container" },
      { path: "components/footer.html", container: "footer-container" },
    ]
  }

  async loadComponent(path, containerId) {
    try {
      const response = await fetch(path)
      if (!response.ok) {
        throw new Error(`Failed to load ${path}`)
      }
      const html = await response.text()
      const container = document.getElementById(containerId)
      if (container) {
        container.innerHTML = html
      }
    } catch (error) {
      console.error(`Error loading component from ${path}:`, error)
    }
  }

  async loadAll() {
    // Load all components in parallel
    const loadPromises = this.components.map((component) => this.loadComponent(component.path, component.container))

    await Promise.all(loadPromises)

    // Dispatch custom event when all components are loaded
    window.dispatchEvent(new Event("componentsLoaded"))
  }
}

// Initialize and load components
const loader = new ComponentLoader()
loader.loadAll()
