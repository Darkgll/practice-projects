from fastapi import FastAPI, status
from pydantic import BaseModel, Field
from typing import List
from database import SessionLocal
from uuid import UUID, uuid4
import models


app = FastAPI()


class Task(BaseModel):
    task_uuid: UUID = Field(default_factory=uuid4)
    description: str
    params: dict

    class Config:
        orm_mode = True


db = SessionLocal()


@app.get('/tasks', response_model=List[Task], status_code=status.HTTP_200_OK)
def get_all_tasks():
    tasks = db.query(models.Task).all()
    return tasks


@app.post('/tasks/add', response_model=Task, status_code=status.HTTP_201_CREATED)
def create_task(task: Task):
    new_task = models.Task(
        description=task.description,
        params=task.params
    )

    db.add(new_task)
    db.commit()
    return new_task


@app.put('/tasks/{task_sid}', response_model=Task, status_code=status.HTTP_200_OK)
def update_task(task_sid: str, task:Task):
    task_to_update = db.query(models.Task).filter(models.Task.task_uuid == task_sid).first()
    task_to_update.description = task.description
    task_to_update.params = task.params
    db.commit()
    return task_to_update

