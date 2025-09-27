// Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
  sortProjectsAlphabetically();
});

function sortProjectsAlphabetically() {
  let grid = document.querySelector(".project-grid");
  let projects = Array.from(document.querySelectorAll(".project-card"));

  // Sort by the text inside <h3>
  projects.sort((a, b) => {
    let titleA = a.querySelector("h3").textContent.toLowerCase();
    let titleB = b.querySelector("h3").textContent.toLowerCase();
    return titleA.localeCompare(titleB);
  });

  // Append back in sorted order
  projects.forEach(project => grid.appendChild(project));
}

function filterProjects(category) {
  let projects = document.querySelectorAll(".project-card");
  let buttons = document.querySelectorAll(".filter-buttons button");

  // Remove 'active' from all buttons
  buttons.forEach(btn => btn.classList.remove("active"));

  // Add 'active' to clicked button
  event.target.classList.add("active");

  // Show/hide projects
  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block"; // show
    } else {
      project.style.display = "none"; // hide
    }
  });
}
