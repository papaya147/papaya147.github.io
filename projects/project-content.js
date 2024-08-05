document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".left-sidebar")
  sidebar.innerHTML = "<h1>Contents</h1>"
  const headings = document.querySelectorAll(".project-content h1, .project-content h2")

  let h1Counter = 1
  let h2Counter = 1

  headings.forEach(heading => {
    if (heading.tagName === "H1") {
      heading.id = `${h1Counter}`

      const link = document.createElement("a")

      link.href = `#${heading.id}`
      link.className = "section-heading"
      link.textContent = heading.textContent

      sidebar.appendChild(link)

      h1Counter++
      h2Counter = 1

    } else if (heading.tagName === "H2") {
      heading.id = `${h1Counter - 1}-${h2Counter}`

      const link = document.createElement("a")

      link.href = `#${heading.id}`
      link.className = "section-subheading"
      link.textContent = heading.textContent

      sidebar.appendChild(link)

      h2Counter++
    }
  })
})