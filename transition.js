    // Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("fade-in");
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            if (href && !href.startsWith("#") && href !== "javascript:void(0)") {
                event.preventDefault(); // Stop immediate navigation
                document.body.classList.remove("fade-in"); // Trigger fade-out
                setTimeout(() => {
                    window.location.href = href; // Navigate after delay
                }, 500); // Match transition duration
            }
        });
    });