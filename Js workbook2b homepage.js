function openNavbar() {
            document.getElementById("navbar").style.width = "300px";
        }
    
        function closeNavbar() {
            document.getElementById("navbar").style.width = "0";
        }

         function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.width === "300px") {
        navbar.style.width = "0";
    } else {
        navbar.style.width = "300px";
    }
}

window.onload = function() {
    document.body.addEventListener('click', function(event) {
        var navbar = document.getElementById("navbar");
        var navbarButton = document.getElementById("navbarButton");
        if (!navbar.contains(event.target) && navbar.style.width === "300px" && event.target !== navbarButton) {
            navbar.style.width = "0";
        }
    });
}