

// PARA MOSTRAR LA CONTRASEÑA
function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let checkbox = document.getElementById("showPasswordCheckbox");

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

//VALIDAR INICIO DE SESIÓN
const expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function iniciarSesion() {
    let c = document.getElementById('email').value;
    c = c.toLowerCase();
    const validar = expresion.test(c);
    let p = document.getElementById('password').value;

    if (validar == false) {
        alert('El correo electronico no es valido');
        document.getElementById('email').value = "";
        document.getElementById('email').focus();

    }
    else if (p.length < 8) {
        alert('Error..debe ingresar una contraseña válida');
        document.getElementById('password').value = "";
        document.getElementById('password').focus();
    }
    else {
        alert('Has iniciado sesión correctamente...')
    }

}


// LUKAS REGISTRO

function registrarUsuario() {
    let nom = document.getElementById('name').value;
    let usu = document.getElementById('uname').value;
    let em = document.getElementById('email').value;
    let tel = document.getElementById('telefono').value;
    let con = document.getElementById('contraseña').value;
    let concon = document.getElementById('confirmarContraseña').value;

    em = em.toLowerCase();
    const validar = expresion.test(em);


    if (nom.length < 20) {
        alert('Error..debe ingresar el nombre completo');
        document.getElementById('name').value = "";
        document.getElementById('name').focus();
    }
    else if (usu.length < 4) {
        alert('Error..debe ingresar un nombre de usuario mayor a 3 caracteres');
        document.getElementById('uname').value = "";
        document.getElementById('uname').focus();

    }
    else if (validar == false) {
        alert('El correo electronico no es valido');
        document.getElementById('email').value = "";
        document.getElementById('email').focus();

    }
    else if (tel.length < 8) {
        alert('Error..debe ingresar un telefono correcto');
        document.getElementById('telefono').value = "";
        document.getElementById('telefono').focus();
    }
    else if (con.length < 8) {
        alert('Error..debe ingresar una contraseña de 8 caracteres o más');
        document.getElementById('contraseña').value = "";
        document.getElementById('contraseña').focus();
    }
    else if (concon !== con) {
        alert('Error..las contraseñas no coinciden');
        document.getElementById('contraseña').value = "";
        document.getElementById('confirmarContraseña').value = "";
        document.getElementById('contraseña').focus();
    }
    else {
        alert('Te has registrado correctamente!')
    }

}

//API FERIADOS: LUKAS
fetch('https://api.boostr.cl/holidays.json')
    .then(response => response.json())
    .then(data => {
        // Manipular los datos recibidos y mostrarlos en el elemento holidays
        const holidaysElement = document.getElementById('holidays');
        holidaysElement.innerHTML = '<h2>Días festivos</h2>';
        data.forEach(holiday => {
            holidaysElement.innerHTML += `<p>${holiday.date}: ${holiday.name}</p>`;
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


//API CAMIONES (SERIVICIOS) :VALE

function getCamion(done) {
    let url = 'http://localhost:3300/camiones';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getCamion(data => {
    console.log(data);
    data.forEach(camiones => {
        const html = `
         <DIV class="COL-3" >
            <div class="card custom-card d-flex ">
                        <img class="card-img-top" src="${camiones.img}" alt="Camion" style="height: 300px;">
                        <div class="card-body text-left">
                            <h4 class="card-title" >Camión ${camiones.marca}</h4>
                            <button type="button" class="btn btnservicios" data-bs-toggle="collapse" data-bs-target="#${camiones.id}">Descripción</button>
                            <div id="${camiones.id}" class="collapse">
                                <p class="cuerpocarta">Capacidad: ${camiones.capacidad}</p>
                                <hr>
                                <p class="cuerpocarta">Valor: ${camiones.valorxruta}</p>
                            </div>
                        </div>
            </div>
        </DIV>
            
         
        
      

        `;

        const main = document.getElementById("camiones-row");
        main.insertAdjacentHTML('beforeend', html);
    });
});

//con rampla

function getRampla(done) {
    let url = 'http://localhost:3300/conrampla';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getRampla(data => {
    console.log(data);
    data.forEach(conrampla => {
        const html = `
               
        <div class="card custom-card d-flex ">
                <img class="card-img-top" src="${conrampla.img}" alt="CamionRampla" style="height: 300px;">
                <div class="card-body text-left">
                    <h4 class="card-title" >Rampla de ${conrampla.metros}</h4>
                    <button type="button" class="btn btnservicios" data-bs-toggle="collapse" data-bs-target="#r${conrampla.id}">Descripción</button>
                    <div id="r${conrampla.id}" class="collapse">
                        <p class="cuerpocarta">Capacidad: ${conrampla.capacidad}</p>
                        <hr>
                        <p class="cuerpocarta">Precio por Ciudad: </p>
                        <ul class="ulservicio">
                            <li>Santiago: ${conrampla.cityxvalor.santiago}</li>
                            <li>Rancagua: ${conrampla.cityxvalor.rancagua}</li>
                        </ul>
                    </div>
                </div>
            </div>
        
      

        `;

        const main = document.getElementById("rampla-row");
        main.insertAdjacentHTML('beforeend', html);
    });
});