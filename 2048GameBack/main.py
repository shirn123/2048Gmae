from fastapi import FastAPI
import uvicorn
import pyodbc
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json
import numpy as np

app = FastAPI()

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:8080",
    "http://localhost.tiangolo.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};'
                      'SERVER=HP-7500U;'
                      'DATABASE=Projects Database;'
                      'UID=win10 User;'
                      'PWD=Shir0584322310;'
                      'Trusted_Connection=yes'
                      )

cursor = conn.cursor()


@app.get("/GetAll", tags=['Get All Data'])
async def GetAll():
    df = pd.read_sql('SELECT * FROM [Projects Database].[dbo].[UserDataNew]', conn)
    a = df.to_dict()
    return json.loads(df.to_json())


@app.post("/InsertToDB", tags=['Insert To DB'])
async def InsertToDB(FirstName: str, LastName: str, UserName: str, Password: str, BestScore: int):
    insert_sql = '  INSERT INTO [Projects Database].[dbo].[UserDataNew] (FirstName, LastName, UserName, Password,BestScore) values (?, ?,?,?,?)'
    data = (FirstName, LastName, UserName, Password, BestScore)
    cursor.execute(insert_sql, data)
    conn.commit()
    return {'message': 'Data inserted successfully.'}


@app.put("/updateUserName", tags=['update User Name'])
async def update_row(FirstName: str, new_value: str):
    update_a_row = f"UPDATE [Projects Database].[dbo].[UserDataNew] SET FirstName = '{new_value}' WHERE FirstName = '{FirstName}'"
    cursor.execute(update_a_row)
    conn.commit()
    return {"message": f"Row {FirstName} updated with new value: {new_value}"}


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8080)
