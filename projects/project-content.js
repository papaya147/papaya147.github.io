document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".left-sidebar")
  sidebar.innerHTML = "<h1>Contents</h1>"
  const headings = document.querySelectorAll(".project-content h1, .project-content h2")

  let h1Counter = 1
  let h2Counter = 1

  headings.forEach(heading => {
    if (heading.tagName === "H1") {
      // Assign an ID to the h1 element
      heading.id = `${h1Counter}`

      // Create an anchor element
      const link = document.createElement("a")

      // Set the href attribute to the id of the heading
      link.href = `#${heading.id}`
      link.className = "section-heading"
      link.textContent = heading.textContent

      // Append the link to the sidebar
      sidebar.appendChild(link)

      // Increment the h1 counter and reset the h2 counter
      h1Counter++
      h2Counter = 1

    } else if (heading.tagName === "H2") {
      // Assign an ID to the h2 element
      heading.id = `${h1Counter - 1}-${h2Counter}`

      // Create an anchor element
      const link = document.createElement("a")

      // Set the href attribute to the id of the heading
      link.href = `#${heading.id}`
      link.className = "section-subheading"
      link.textContent = heading.textContent

      // Append the link to the sidebar
      sidebar.appendChild(link)

      // Increment the h2 counter
      h2Counter++
    }
  })
})