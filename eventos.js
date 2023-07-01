

//window.onload = function () {
    console.log("Hola");

    let box = document.querySelector('.box');
    let box2 = document.querySelector('.box2');

    box.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = "gray";
        console.log(box);
    })

    box.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = "white";
    })

    box2.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = "red";
    })


    let btn = document.querySelector('.btn');

    btn.addEventListener('click', (evento) => {
        console.log(evento);
        /*console.log(evento.y);
        console.log(evento.type); */
        let content = document.querySelector('.contenido');

        if (content.classList.contains('hide')) {
            content.classList.add('show');
            content.classList.remove('hide');
        } else {
            content.classList.remove('show');
            content.classList.add('hide');
        }

    })

    /* btn.addEventListener('dblclick', (evento) => {
        console.log(evento.x);
        console.log(evento.y);
        console.log(evento.type);
    }) */


    /* window.document.addEventListener('mousemove', (evento) => {
        console.log(`x: ${evento.x}, y: ${evento.y}`)
    }) */

    let form = document.querySelector('form');
    let name = document.querySelector('input[name=name]');
    name.addEventListener('keypress', (evento) => {
        let key = evento.keyCode;
        if (!(key >= 49 && key <= 58)) {
            console.log(key);
            return true;
        } else {
            console.log(key);
            return false;
        }
    })

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let lastname = document.querySelector('#lastname');
        console.log(lastname.value);

        let message = document.querySelector('.message');
        message.innerHTML = `Hola ${name.value} ${lastname.value}`;

        if (name.value !== '' && lastname.value !== '') {
            form.submit();
        }
    })


let rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'gray';
    })
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = 'white';
    })
})

let addUser = document.querySelector('.btnAddUser');
addUser.addEventListener('click', () => {
    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdLastname = document.createElement('td');

    tdId.innerHTML = 3;
    tdName.innerHTML = "Tommy";
    tdLastname.innerHTML = "Doe"

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdLastname);

    tr.addEventListener('mouseover', () => {
        tr.style.backgroundColor = 'gray';
    })
    tr.addEventListener('mouseout', () => {
        tr.style.backgroundColor = 'white';
    })

    table.appendChild(tr);
})

//}

