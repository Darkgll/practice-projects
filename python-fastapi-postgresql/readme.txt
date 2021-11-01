A testing task for an internship.


Write REST micro-service on Python with FastAPI framework

DB: PostgreSQL
ORM: SQLAlchemy
Data Validators(schemes) - Pydantic

Functionality:
1. POST /tasks/add - adding task to DB
{
"task_uuid": "UUID",
"description": "test task",
"params": {
"param_1": "1",
"param_2": 1
}
}
2. GET /tasks - to get all tasks
3. PUT /tasks/<task_sid> - updating task by sid
