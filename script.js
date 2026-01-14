const cumpleanos = {
    Enero: [
        { nombre: "Ana Pérez", fecha: "05 de enero" },
        { nombre: "Luis Gómez", fecha: "18 de enero" }
    ],
    Febrero: [
        { nombre: "María Rodríguez", fecha: "02 de febrero" }
    ],
    Marzo: [
        { nombre: "Carlos Fernández", fecha: "12 de marzo" },
        { nombre: "Sofía Díaz", fecha: "28 de marzo" }
    ]
};

const contenedor = document.getElementById("contenedor-cumpleanos");

for (let mes in cumpleanos) {
    const divMes = document.createElement("div");
    divMes.className = "mes";

    const tituloMes = document.createElement("h2");
    tituloMes.textContent = "🎉 " + mes;
    divMes.appendChild(tituloMes);

    cumpleanos[mes].forEach(persona => {
        const divCumple = document.createElement("div");
        divCumple.className = "cumple";
        divCumple.textContent = `🎂 ${persona.fecha} – ${persona.nombre}`;
        divMes.appendChild(divCumple);
    });

    contenedor.appendChild(divMes);
}
