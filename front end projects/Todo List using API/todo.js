var todoListApp = (function (){
    let tasks = [];
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');
    
    console.log('Working');
    
    var a = 10;
    
    
    async function fetchTodo(){
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(data){
        //     tasks = data.slice(0,100);
        //     renderList();
        // })
        // .catch(function(error){
        //     console.log('error',error);
        // });
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks = data.slice(0,10);
            renderList();
        }
        catch(error){
                console.log(error);
        }

        

    }
    
    
    function addTaskToDom(task){
        const li = document.createElement('li');

        li.innerHTML = `
                
                <input type = "checkbox" id=${task.id} ${task.completed ? 'checked' : ''} >
                <label for=${task.id} > ${task.title}  </label>
                <img  src = "https://global-uploads.webflow.com/6077f96cf4fa19216396daaf/6257f162e384e60d17c7290e_LOGO%20ICON%20white%201.png" style="background-color: red;" class = "delete" data-id = ${task.id}  />
            
        `;

        taskList.append(li);
    }
    
    
    
    
    
    function renderList () {
        taskList.innerHTML= '';
        
        for(let i = 0 ; i< tasks.length ; i++){
            addTaskToDom(tasks[i]);
        }

        tasksCounter.innerHTML = tasks.length;
    }
    
    
    
    
    
    
    function toggleTask (taskId) {
        const task = tasks.filter(function(task){
            return task.id == Number(taskId);
        });
        if(task.length > 0){
            const currentTask = task[0];

            currentTask.completed = !currentTask.completed;
            renderList();
            showNotification('Task toggled successfully');
            return;
        }
        showNotification('Could not toggle the Task');
    }
    
    
    
    
    
    
    function deleteTask (taskId) {
        const newTasks = tasks.filter(function(task){
            return task.id !== Number(taskId);
        })
        tasks = newTasks;
        renderList();
        showNotification('Task deleted successfully');

    }
    
    
    
    
    
    
    
    function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification('Task added successfully');
        return;
    }
       showNotification('Task can not be empty');

    }
    
    //  to POST IN THROUGH THE API WE CAN DO ONE THING: 
    // function addTasks(task){
    //     if(task){
    //         fetch('https://jsonplaceholder.typicode.com/todos',{
    //             method: 'POST',
    //             headers : {
    //                 'Content-Type' : 'application/json',
    //             },
    //             body: JSON.stringify(task),
    //         }).then(function(response){
    //             return response.json();
    //         }).then(function(data){
    //             console.log(data);
    //             tasks.push(task);
    //             renderList();
    //             showNotification('Task added successfully');
    //         }).catch(function(error){
    //             console.log('error', error);
    //         });
    //     };
    // };
    
    
    
    
    
    
    
    function showNotification(text) {
        alert(text);
    }
    
    
    
    
    
    
    
    
    
    function handleInputKeypress(e){
        if(e.key == 'Enter'){
            const title = e.target.value;
            // console.log(title);

            if(!title){
                showNotification('Task text can not be empty');
                return;
            }

            const task = {
                title,
                id: Date.now(),
                completed:false
            };

            e.target.value = '';
            addTask(task);
        }
    }


    function handleClickListener(e){
        const target = e.target;
        if(target.className == 'delete'){
            const taskId = target.dataset.id;
            deleteTask(taskId);
            return;
        }
        else if(target.className == 'custom-checkbox'){
            const taskId = target.id;
            toggleTask(taskId);
            return;
        }

    }
    
    
    function  initialiseApp(){
        fetchTodo();
        addTaskInput.addEventListener('keyup', handleInputKeypress);
        document.addEventListener('click', handleClickListener);   
    }
    
    initialiseApp();
    return {
        initialise : initialiseApp,
        a: a,
    };
})();
