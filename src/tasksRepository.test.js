const taskRepository = require("./taskRepository");

describe("pruebas", ()=>{

    // prueba unitaria
    test("Get all tasks", ()=>{
        // Arrage
        let tasks = [];

        // Act 
        tasks = taskRepository.getAll()

        // Assert
        expect(tasks.length).toBe(2)
        expect(tasks.length== 2).toBe(true)
        expect(typeof task == 'array')
    })
    
      test("Get one task by id", ()=>{
        // Arrage
        let tasks = {};

        // Act 
        task = taskRepository.getById(1)

        // Assert
        expect(task.title == 'Task 1').toBe(true)
        expect(task.title == 'Task 100').toBe(false)
    })
    
      test("Create a new task", () => {
        // Arrange
        const newTask = { id: 3, title: 'Task 3', description: 'Do something new' };
    
        // Act
        taskRepository.createTask(newTask);
        const createdTask = taskRepository.getById(newTask.id);
    
        // Assert
        expect(createdTask).toEqual(newTask);
      });
    
      test("Update a task", () => {
        // Arrange
        const taskId = 2;
        const updatedTask = { title: 'Updated Task', description: 'Updated description' };
        taskRepository.createTask({ id: taskId, title: 'Task 2', description: 'Do something else' });
    
        // Act
        const updated = taskRepository.updateTask(taskId, updatedTask);
        const retrievedTask = taskRepository.getById(taskId);
    
        // Assert
        expect(updated).toBeTruthy();
        expect(retrievedTask.title).toEqual(updatedTask.title);
        expect(retrievedTask.description).toEqual(updatedTask.description);
      });
    
      test("Delete a task", () => {
        // Arrange
        const taskId = 2;
        
    
        // Act
        taskRepository.deleteTask(taskId);
        const tasks = taskRepository.getAll();

        // Assert
       
        expect(tasks.find(task => task.id === taskId)).toBeUndefined();
      });
    });