const request = require('supertest');
const app = require('./api'); 

// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); // Assuming there are 2 tasks initially
});

test('GET /tasks by id', async () => {
    const taskId = 1
    const response = await request(app).get(`/tasks/${taskId}`);
    expect(response.status).toBe(200);
  });

  test('POST /post tasks', async () => {
    const newTask = {id: 3, title: "New Task", description: "To do"};
    const response = await request(app).post(`/tasks/`).send({newTask});
    expect(response.status).toBe(201);
  });

// Test the /tasks PUT endpoint
test('PUT /put tasks', async () => {
    const updatedTask = { id: 1, title: 'Task put', description: 'Do  else' };
    const response = await request(app).put(`/tasks/1`).send({updatedTask});
    expect(response.status).toBe(200);
  });

  test('DELETE /delete tasks', async () => {
    const taskId = 1;
    const response = await request(app).delete(`/tasks/${taskId}`);
    expect(response.status).toBe(204);
  });

