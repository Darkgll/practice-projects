from database import Base
from sqlalchemy import String, Column
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid


class Task(Base):
    __tablename__ = "tasks"
    task_uuid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    description = Column(String(255), nullable=False)
    params = Column(JSONB, nullable=False)

    def __repr__(self):
        return f"<task uuid={self.task_uuid} description={self.description} params={self.params}>"
