
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute("rel", "noopener noreferrer");
});
