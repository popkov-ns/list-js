const list = document.querySelector('.list');
const input = document.querySelector('.input');
const btnAdd = document.querySelector('.btn-add');

let tasks = [
    'Я хочу сделать список задач',
    'Выучить React'
];

const render = () => {
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = tasks[i];
        
        let del = document.createElement('button');
        del.className = 'del';
        del.innerHTML = 'X';

        li.appendChild(del);
        list.appendChild(li);
    }

    let dels = document.querySelectorAll('.del');

    for (let i = 0; i < dels.length; i++) {
        dels[i].addEventListener('click', (e) => {
            let index = tasks.findIndex(el => el === e.target.parentElement.innerText.slice(0, -1));
            handleClickRemove(index);
        })
    }
}

const handleClickAdd = () => {
    let inputValue = input.value.trim();

    if (inputValue) {
        tasks.push(inputValue);
    } else {
        alert('Введите данные!')
    }
}

const handleClickRemove = (index) => {
    tasks.splice(index, 1);
    list.innerHTML = '';
    render();
}

btnAdd.addEventListener('click', () => {
    handleClickAdd();
    input.value = '';
    list.innerHTML = '';
    render();
})

render();