document.addEventListener("DOMContentLoaded", () => {
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)
  }

  function getBaseUrl(imageUrl) {
    const url = new URL(imageUrl)

    const pathname = url.pathname

    // removing the 'filename.svg'
    let basePath = pathname.substring(0, pathname.lastIndexOf("/"))
    // removing the 'rendered'
    basePath = basePath.substring(0, basePath.lastIndexOf("/"))

    return `${url.protocol}//${url.host}${basePath}`
  }

  const imageUrl = getQueryParam("img")
  const projectUrl = imageUrl ? getBaseUrl(imageUrl) : "/projects";
  if (imageUrl) {
    document.getElementById("project-image").src = imageUrl
    document.getElementById("project-link").href = projectUrl
  } else {
    document.getElementById("project-image").alt = "No image provided"
    document.getElementById("project-link").href = "/projects"
  }
})