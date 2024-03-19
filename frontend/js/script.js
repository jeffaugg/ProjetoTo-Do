const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');


const fetchTasks = async () => {
    const response =  await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
 return tasks;
};

const addTask = async (event) =>{
    event.preventDefault();

    const task = {title: inputTask.value};
    
     await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
     });

     loadTasks();

     inputTask.value = '';  // limpar o campo input
}


const deleteTask = async (id) => {
    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'delete',
    });

    loadTasks();
}


const updateTask = async (task) => {
    const {id, status, title} = task;

    await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, status})
    });

    loadTasks();
}


const formatDate = (dateUTC) => { 
    const options = {
     dateStyle: 'long',
    timeStyle: 'short',
    };

    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
}


const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    
    if(innerText){
        element.innerText = innerText;// dentro do elemento html td, insere o texto do parametro innerText

    }
    
    if(innerHTML){
        element.innerHTML = innerHTML;
    }
    
    return element;
}


const createSelect = (value) => {
    const options = `
    <option value="Pendente">Pendente</option>
    <option value="Em andamento">Em andamento</option>
    <option value="Concluída">Concluída</option>
    `;
    const select = createElement('select', '' , options);
    select.value = value;
    return select;
}




const createRow = (task) => {
    const {id, title, created_at, status } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt = createElement('td', formatDate(created_at));
    const tdStatus = createElement('td');
    const tdAction = createElement('td');


    const select = createSelect(status);

    select.addEventListener('change', ({target}) => updateTask({ ...task, status: target.value}));

    
    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deletebutton = createElement('button', '','<span class="material-symbols-outlined">delete</span>')
    
    const editForm = createElement('form');
    const editInput = createElement('input');

    editInput.value = title;
    editForm.appendChild(editInput);

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateTask({ ...task, title: editInput.value});
    });
    
    editButton.addEventListener('click', () => {
        tdTitle.innerHTML = '';
        tdTitle.appendChild(editForm);
    }
    );
    editButton.classList.add('btn-action');
    deletebutton.classList.add('btn-action');

    deletebutton.addEventListener('click', () => deleteTask(id));
    
    tdStatus.appendChild(select);

    tdAction.appendChild(editButton); 
    tdAction.appendChild(deletebutton); 

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAction);
    
    return tr;
}


const loadTasks = async () => {
    const tasks = await fetchTasks();

    tbody.innerHTML = ''; // limpa a tabela


    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
}


addForm.addEventListener('submit', addTask);

loadTasks();




