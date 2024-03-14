const fetchTasks = async () => {
    const response =  await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
 return tasks;
};

const createELement = (tag, innerText = '') => {
    const element = document.createElement(tag)
    element.innerText = innerText;// dentro do elemento html td, insere o texto do parametro innerText

    return element;
}

const createRow = (task) => {
    const {id, title, created_at, status } = task;


    const tr = createELement('tr');
    const tdTitle = createELement('td', title);
    
}