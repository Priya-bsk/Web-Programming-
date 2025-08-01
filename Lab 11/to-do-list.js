const taskInput = document.querySelector('#taskInput');
        const addTaskButton = document.querySelector('#addTask');
        const taskList = document.querySelector('#taskList');
        const emptyMessage = document.querySelector('.empty-list');

        function createTask(taskText) {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';

            const taskContent = document.createElement('span');
            taskContent.className = 'task-text';
            taskContent.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';
            
            deleteButton.addEventListener('click', () => {
                taskItem.remove();
                if (taskList.children.length === 0) {
                    taskList.appendChild(emptyMessage);
                }
            });

            taskItem.appendChild(taskContent);
            taskItem.appendChild(deleteButton);

            return taskItem;
        }

        function addTask() {
            const taskText = taskInput.value.trim();
            
            if (taskText !== '') {
                if (taskList.contains(emptyMessage)) {
                    emptyMessage.remove();
                }
                
                const newTask = createTask(taskText);
                taskList.appendChild(newTask);
                taskInput.value = '';
                taskInput.focus();
            }
        }

        addTaskButton.addEventListener('click', addTask);
        
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });