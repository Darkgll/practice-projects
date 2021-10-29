from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

postgreqsql_db = ""

engine = create_engine(postgreqsql_db,
                       echo=True
                       )

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)
