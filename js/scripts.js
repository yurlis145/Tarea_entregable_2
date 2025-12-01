/* ---------- PLATOS ---------- */
const platos = [
    {
        nombre: "Bandeja Paisa",
        imagen: "img/bandeja-paisa-1616.gif",
        precio: 25000,
        ingredientes: "Frijoles, arroz, carne molida, chicharrón, huevo frito, tajada, aguacate."
    },
    {
        nombre: "Sancocho de Pollo",
        imagen: "img/tipos-sancocho-colombia-896963.jpg",
        precio: 18000,
        ingredientes: "Pollo, yuca, papa, plátano, mazorca, cebolla, cilantro."
    },
    {
        nombre: "Ajiaco",
        imagen: "img/ajiaco-receta.jpg",
        precio: 20000,
        ingredientes: "Pollo, papa criolla, guascas, crema de leche, alcaparras."
    },
    {
        nombre: "Sobrebarriga",
        imagen: "img/imagenes de sobrebarriga.jpg",
        precio: 18000,
        ingredientes: "Carne, cebolla, tomate, ajo, comino, papa."
    }
];

/* ---------- CARGAR NOMBRES EN EL SELECT ---------- */
const selectMenu = document.getElementById("select-menu");

platos.forEach(plato => {
    const option = document.createElement("option");
    option.value = plato.nombre;
    option.textContent = plato.nombre;
    selectMenu.appendChild(option);
});

/* ---------- MOSTRAR PLATO ---------- */
selectMenu.addEventListener("change", () => {
    const seleccionado = platos.find(p => p.nombre === selectMenu.value);

    const contenedor = document.getElementById("mostrar-plato");

    if (seleccionado) {
        contenedor.innerHTML = `
            <div class="tarjeta">
                <h3>${seleccionado.nombre}</h3>
                <img src="${seleccionado.imagen}">
                <p><strong>Precio:</strong> $${seleccionado.precio}</p>
                <p><strong>Ingredientes:</strong> ${seleccionado.ingredientes}</p>
            </div>
        `;
    } else {
        contenedor.innerHTML = "";
    }
});

/* ---------- FORMULARIO ---------- */
document.getElementById("form-contacto").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("msg-enviado").textContent = "Mensaje enviado correctamente ✔";
    e.target.reset();
});
