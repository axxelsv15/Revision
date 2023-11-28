// Función para alternar la visibilidad del menú al hacer clic en el ícono del menú
function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("active");
}

// Función para cerrar el menú cuando se hace clic en un enlace del menú
var menuLinks = document.querySelectorAll("#menuItems a");
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        var menuItems = document.getElementById("menuItems");
        menuItems.classList.remove("active");
    });
});

