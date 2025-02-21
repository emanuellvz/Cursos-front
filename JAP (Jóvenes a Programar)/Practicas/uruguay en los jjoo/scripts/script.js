const medallas_url = "https://danikho2020.github.io/json/medallas.json";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cargar").addEventListener("click", function () {

        
        const medallas = ["<img src='img/oro.png' style='width: 12px'></img>", "<img src='img/plata.png' style='width: 12px'></img>", "<img src='img/bronce.png' style='width: 12px'></img>"];
        fetch(medallas_url)
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById("data");
            for (let iterator of data) {
                let info = "";
                info += `
                <tr>
                    <td>` + iterator.anio + `</td>
                    <td>`+ iterator.sede +`</td>
                    <td>`+ iterator.deporte +`</td>
                    <td>`+ medallas[iterator.posicion-1] +`</td>
                </tr>
                `;
                tbody.innerHTML += info;
            }
        });
    });
});


    
