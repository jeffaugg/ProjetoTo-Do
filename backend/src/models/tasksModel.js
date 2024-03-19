const connection = require('./connection');

const getAll = async() =>{ 
    const tasks =  await connection.execute('SELECT * FROM tasks');
    return tasks[0];
};


const createTask = async (task) =>{
    const  { title } = task;

    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)' 
    // o ? é um placeholder, que será substituido pelos valores do array, na ordem em que aparecem no array (title, status, created_at) VALUES (?, ?, ?) é o mesmo que (title, status, created_at) VALUES (task.title, task.status, task.created_at)
    const dateUTC =  new Date(Date.now()).toUTCString(); 
    // pega a data atual e converte para UTC
    const [createTask] = await connection.execute(query, [title, 'Pendente', dateUTC]); 
    // insere os valores title, status e created_at na tabela tasks, values são os valores que serão inseridos, 

    return {insertId: createTask.insertId};
};


const deleteTask = async (id) => {
   const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);	
    return removedTask;

};

const updateTask = async (id, task) => {
    const {title, status} = task;

    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    
    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};