const cumpleanos = {
    Enero: [
        { nombre: "Yohanny Javier", fecha: "03 de enero" },
        { nombre: "Wisbraunny Agramonte", fecha: "08 de enero" },
        { nombre: "Nicol Franco", fecha: "14 de enero" }
        
    ],
    Febrero: [
        { nombre: "Mariel Fernandez", fecha: "09 de febrero" },
        { nombre: "Wisbrianny Agramonte", fecha: "11 de febrero"},
        { nombre: "Cristal De Los Santos", fecha: "12 de febrero"},
        { nombre: "Aldrin hijo", fecha: "21 de febrero" }

    ],
    Marzo: [
        { nombre: "Victor", fecha: "10 de marzo" },
        { nombre: "Nícolas Taveras", fecha: "16 de marzo" },
        { nombre: "Rosanny Javier", fecha: "18 de marzo " },
        { nombre: "Lorianni", fecha: "26 de marzo"}

    ],
    Abril: [
        { nombre: "Franchelis Arias", fecha: "07 de abril"}

    ],
    Mayo: [
        { nombre: "Yulianny Agramonte", fecha: "12 de mayo" },
        { nombre: "Elimena Boneti", fecha: "15 de mayo" },
        { nombre: "Maleny", fecha: "16 de mayo"},
        { nombre: "Cristal Tavares", fecha: "25 de mayo"},
        { nombre: "Josue nieto Felicia", fecha: "28 de mayo"},
        { nombre: "Grisel", fecha:"30 de mayo"}
    ],
    Junio: [
        { nombre: "Yanfry Brioso", fecha: "02 de junio" },
        { nombre: "Rafaelina Agramonte", fecha: "13 de junio" },
        { nombre: "Aldrin Padre", fecha: "13 de junio" },
        { nombre: "Bella Familia", fecha: "26 de junio" }

    ],
    Julio: [
        { nombre: "Juana Peralta", fecha: "21 de julio" }
        
    ],
    Agosto: [
        { nombre: "Josue Taveras", fecha: "04 de agosto" },
        { nombre: "Brenda Martínez", fecha: "06 de agosto" },
        { nombre: "Santa Sanchez", fecha: "12 de agosto "},
        { nombre: "Wisbreilin Agramonte", fecha: "26 de agosto"},
        { nombre: "Tereza Dizla", fecha: "27 de agosto"}

    ],
    Septiembre: [
        { nombre: "Gabriel", fecha: "01 de septiembre" },
        { nombre: "Luisa", fecha: "07 de septiembre"},
        { nombre: "Jeiden Luis", fecha: "09 de septiembre" },
        { nombre: "Lisanny", fecha: "12 de septiembre"},
        { nombre: " Robert Sanchez", fecha: "21 de septiembre"}
        
    ],
    Octubre: [
        { nombre: "Ruth Javier", fecha: "09 de octubre" },
        { nombre: "Yuleika de La Cruz", fecha: "09 de octubre" },
        { nombre: "Edi", fecha: "10 de octubre"},
        { nombre: "Edison", fecha: "10 de octubre"},
        { nombre: "Yuleiny Agramonte", fecha: "12 de octubre"}

    ],
    Noviembre: [
        { nombre: "Nelson Luis Agramonte", fecha: "04 de noviembre" },
        { nombre: "Franchesca Agramonte", fecha: "09 de noviembre" },
        { nombre: "Rhina Felix", fecha: "13 de noviembre" },
        { nombre: "Felicita Montero", fecha: "19 de noviembre" },
        { nombre: "Yenifer Cruz", fecha: "25 de noviembre "},
        { nombre: "Gregorio", fecha: "28 de noviembre"}

    ],
    Diciembre: [
        { nombre: "Yoli", fecha: "10 de diciembre" },
        { nombre: "Alvaro Luis Dizla", fecha: "12 de diciembre" },
        { nombre: "Rafael Agramonte", fecha: "16 de diciembre" },
        { nombre: "Luz Medina", fecha: "16 de diciembre "},
        { nombre: "Darleni", fecha: "18 de diciembre" },
        { nombre: "Bernardo", fecha: "19 de diciembre "},
        { nombre: "Domingo Agramonte", fecha: "24 de diciembre "}

    ],

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

