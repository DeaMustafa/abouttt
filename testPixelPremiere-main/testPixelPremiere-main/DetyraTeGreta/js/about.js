// Shfaq ose fsheh përmbajtjen e dropdown kur klikohet titulli
document.querySelectorAll(".dropdown").forEach(function(dropdown) {
    var title = dropdown.querySelector(".dropdown-title");
    var content = dropdown.querySelector(".dropdown-content");

    title.addEventListener("click", function(event) {
        event.stopPropagation(); // Parandalon shfaqjen e dropdown-it nëse klikohet në dropdown-title

        // Kontrollon nëse dropdown-i është i hapur
        var isOpen = content.style.display === "block";

        // Mbyll të gjitha dropdown-et përpara se të hapni këtë dropdown
        closeAllDropdowns();

        // Nëse dropdown-i nuk është i hapur, hap atë
        if (!isOpen) {
            content.style.display = "block";
            title.classList.add("open"); // Shto klasën "open" për titullin
        } else {
            content.style.display = "none";
            title.classList.remove("open"); // Hiq klasën "open" për titullin
        }
    });
});

// Mbyll të gjitha dropdown-et kur klikohet kudo tjetër në dokument
document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
        closeAllDropdowns();
    }
});

function closeAllDropdowns() {
    document.querySelectorAll(".dropdown").forEach(function(dropdown) {
        var content = dropdown.querySelector(".dropdown-content");
        var title = dropdown.querySelector(".dropdown-title");
        content.style.display = "none";
        title.classList.remove("open"); // Hiq klasën "open" për të gjitha titujt
    });
}
