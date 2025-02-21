const END_POINT = `https://63607b8d67d3b7a0a6af9922.mockapi.io/users/`;
const inputBuscar = document.getElementById("inputGet1Id");
const inputPostNombre = document.getElementById("inputPostNombre");
const inputPostApellido = document.getElementById("inputPostApellido");
const inputPutId = document.getElementById("inputPutId");
const inputDelete = document.getElementById("inputDelete");
const results = document.getElementById("results");
const nombreModal = document.getElementById("nombreModal");
const apellidoModal = document.getElementById("apellidoModal");
const alertError = document.getElementById("alert-error");

// En caso de pasar por parametro un array de objetos, muestra todos los objetos en pantalla.
const mostrarResultados = (data) => {
	let contenidoHTMLaAgregar = "";
	for (let i = 0; i < data.length; i++) {
		contenidoHTMLaAgregar += `ID: ${data[i].id} <br> NAME: ${data[i].name} <br> LASTNAME: ${data[i].lastname} <br><br>`;
	}
	results.innerHTML = contenidoHTMLaAgregar;
};

// En caso de pasar por parametro un unico objeto, muestra el respectivo objeto en pantalla.
const mostrarUnSoloResultado = (data) => {
	results.innerHTML = `ID: ${data.id} <br> NAME: ${data.name} <br> LASTNAME: ${data.lastname} <br>`;
};

// Mediante esta funcion traemos todos los datos de la base de datos para posteriormente mostrarlos.
const fetchData = (END_POINT, ID) => {
	fetch(END_POINT + ID)
		.then((response) => {
			if (!response.ok) {
				alertError.style.display = "block";
				results.innerHTML = "";

				setTimeout(() => {
					alertError.style.display = "none";
				}, 5000);

				throw new Error("No se ha encontrado al usuario solicitado");
			}
			return response.json();
		})
		.then((data) => {
			if (ID == "") {
				mostrarResultados(data);
			} else {
				mostrarUnSoloResultado(data);
			}
		})
		.catch((error) => console.error(error));
};

// Mediante esta funcion insertamos un nuevo registro en la base de datos, el cual es pasado por parametro.
const insertarRegistro = (END_POINT, nuevoUsuario) => {
	fetch(END_POINT, {
		method: "POST",
		body: JSON.stringify(nuevoUsuario),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then(() => fetchData(END_POINT, ""));
};

// Mediante esta funcion obtenemos todos los datos de un usuario en especifico para posteriormente mostrar dichos datos en un modal.
const obtenerDatosAntesDeModificacion = (END_POINT, ID) => {
	fetch(END_POINT + ID)
		.then((response) => {
			if (!response.ok) {
				alertError.style.display = "block";
				results.innerHTML = "";

				setTimeout(() => {
					alertError.style.display = "none";
				}, 5000);

				throw new Error("No se ha encontrado al usuario solicitado");
			}
			return response.json();
		})
		.then((data) => {
			nombreModal.value = data.name;
			apellidoModal.value = data.lastname;
		})
		.catch((error) => console.error(error));
};

//Mediante esta funcion modificamos un registro en particular a partir de un ID.
const modificarRegistro = (END_POINT, ID, datosModificados) => {
	fetch(END_POINT + ID, {
		method: "PUT",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify(datosModificados),
	})
		.then((response) => {
			if (!response.ok) {
				alertError.style.display = "block";
				results.innerHTML = "";

				setTimeout(() => {
					alertError.style.display = "none";
				}, 5000);

				throw new Error("No se ha podido modificar al usuario ingresado");
			}
		})
		.then(() => fetchData(END_POINT, ""));
};

// Mediante esta funcion eliminamos un registro en especifico, el cual es pasado por parametro.
const eliminarRegistro = (END_POINT, ID) => {
	fetch(END_POINT + ID, {
		method: "DELETE",
	})
		.then((response) => {
			if (!response.ok) {
				alertError.style.display = "block";
				results.innerHTML = "";

				setTimeout(() => {
					alertError.style.display = "none";
				}, 5000);

				throw new Error("No se ha podido borrar al usuario ingresado");
			}
		})
		.then(() => fetchData(END_POINT, ""));
};

//Validaciones
inputPostNombre.addEventListener("input", () => {
	if (inputPostNombre.value == "" || inputPostApellido.value == "") {
		document.getElementById("btnPost").setAttribute("disabled", "");
	} else {
		document.getElementById("btnPost").removeAttribute("disabled");
	}
});

inputPostApellido.addEventListener("input", () => {
	if (inputPostNombre.value == "" || inputPostApellido.value == "") {
		document.getElementById("btnPost").setAttribute("disabled", "");
	} else {
		document.getElementById("btnPost").removeAttribute("disabled");
	}
});

inputPutId.addEventListener("input", () => {
	if (inputPutId.value == "") {
		document.getElementById("btnPut").setAttribute("disabled", "");
	} else {
		document.getElementById("btnPut").removeAttribute("disabled");
	}
});

inputDelete.addEventListener("input", () => {
	if (inputDelete.value == "") {
		document.getElementById("btnDelete").setAttribute("disabled", "");
	} else {
		document.getElementById("btnDelete").removeAttribute("disabled");
	}
});
//Final de las Validaciones

//Eventos por cada Boton
document.getElementById("btnGet1").addEventListener("click", () => {
	fetchData(END_POINT, inputBuscar.value);
});

document.getElementById("btnPost").addEventListener("click", () => {
	let nuevoUsuario = {
		name: inputPostNombre.value,
		lastname: inputPostApellido.value,
	};

	insertarRegistro(END_POINT, nuevoUsuario);
});

document.getElementById("btnPut").addEventListener("click", () => {
	obtenerDatosAntesDeModificacion(END_POINT, inputPutId.value);
	nombreModal.value = "";
	apellidoModal.value = "";
});

document.getElementById("putRequest").addEventListener("click", () => {
	let datosModificados = {
		name: nombreModal.value,
		lastname: apellidoModal.value,
	};

	modificarRegistro(END_POINT, inputPutId.value, datosModificados);
});

document.getElementById("btnDelete").addEventListener("click", () => {
	eliminarRegistro(END_POINT, inputDelete.value);
});
