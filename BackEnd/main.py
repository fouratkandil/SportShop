from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
import json
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/sport")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from chassures where genre='homme'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data
@app.get("/sport/accessoires")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from accessoires where genre='homme'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data
@app.get("/sport/vetement")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from vetements where genre='homme'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data

@app.get("/sport/femme")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from chassures where genre='femme'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data


@app.get("/sport/accessoires/femme")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from accessoires where genre='femme'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data
@app.get("/sport/vetement/femme")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from vetements where genre='femme'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data

@app.get("/sport/meilleur")
def gets():
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    try:
        mycursor.execute("select * from chassures where prix >'160'")
        row_headers=[x[0] for x in mycursor.description]
        rv = mycursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))
    except:
        mydb.rollback()
    return json_data

@app.post("/sport/add")
async def add(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    body =json.loads(await request.body())
    mycursor.execute(f"INSERT INTO `{body['produit']}` (`nom`,`type`,`prix`, `image`,`genre`) VALUES ( '{body['nom']}', '{body['desc']}', '{body['price']}'  , '{body['img']}','{body['genre']}');")
    mydb.commit()
    return("done")



@app.post("/sport/del")
async def dels(request:Request):
    mydb = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "sport")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    mycursor.execute(f"DELETE from `{body['produit']}` where id ={body['id']} ")
    mydb.commit()
    return {"done"}

      
  

