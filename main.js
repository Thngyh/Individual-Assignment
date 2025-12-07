// Header HTML with burger button
const headerHTML = `
<header>
    <div class="logo">YH</div>
    <nav>
        <div class="burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul id="nav-links">
            <li><a href="index.html" id="homeLink">Home</a></li>
            <li><a href="about.html" id="aboutLink">About</a></li>
            <li><a href="portfolio.html" id="portfolioLink">Portfolio</a></li>
            <li><a href="contact.html" id="contactLink">Contact</a></li>
        </ul>
    </nav>
</header>
`;

// Footer HTML
const footerHTML = `
<footer>
    <p>&copy;BTPR2113 Web Development. 2025. Thng Yi Hui.</p>
</footer>
`;

// Inject header and footer
document.getElementById("header").innerHTML = headerHTML;
document.getElementById("footer").innerHTML = footerHTML;

// Highlight active page link
const page = window.location.pathname.split("/").pop();
if (page.includes("index.html")) document.getElementById("homeLink").classList.add("active");
if (page.includes("about.html")) document.getElementById("aboutLink").classList.add("active");
if (page.includes("portfolio.html")) document.getElementById("portfolioLink").classList.add("active");
if (page.includes("contact.html")) document.getElementById("contactLink").classList.add("active");

// Burger menu toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
});
