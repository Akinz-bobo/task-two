# task-two
## Collection for the task two of the HNG bootcamp.
This API allows you to perform basic CRUD operation on a person service.
#To run the app;
Make sure node is installed on your machine,
Clone this repo with git clone command then
Run npm install to install required depencies
and then run 
npm start to launch the app.

It contains the following requests:
   Action          |              Endpoints
-------------------|-----------------------------------------
    Create User:   | https://task-two-2zmv.onrender.com/api/
    Get All Users: | https://task-two-2zmv.onrender.com/api/
    Get A User:    | https://task-two-2zmv.onrender.com/api/user_id
    Update User:   | https://task-two-2zmv.onrender.com/api/user_id
    Delete user:   | https://task-two-2zmv.onrender.com/api/user_id 

#Create User:
Endpoint: https://task-two-2zmv.onrender.com/api/

Request:
```json
{
"name": "John Doe",
"email": "john.doe@yahoo.com",
"age":30
}
```
Method: post

e.g: axios.post("https://task-two-2zmv.onrender.com/api/",
```json
{
"name": "John Doe",
"email": "john.doe@yahoo.com",
"age":30
}
```
)

Success code: 201 created

Response:
```json
{
    "data": {
        "name": "John Doe",
        "email": "john.doe@yahoo.com",
        "age": 30,
        "_id": "65047d43904ac1bfa7f8d960",
        "createdAt": "2023-09-15T15:50:27.494Z",
        "updatedAt": "2023-09-15T15:50:27.494Z",
        "__v": 0
    }
}
```


#Get all users:
Endpoint: https://task-two-2zmv.onrender.com/api/
Request: get
It accepts query parameter and filters
e.g get all users without a parameter
axios.get("https://task-two-2zmv.onrender.com/api/")
Response:
```json
{
    "data": [
        {
            "_id": "65047082f46acc616b27f637",
            "name": "Mark Essien",
            "email": "mark234@gmail.com",
            "age": 34,
            "createdAt": "2023-09-15T14:56:02.029Z",
            "updatedAt": "2023-09-15T14:56:02.029Z",
            "__v": 0
        },
        {
            "_id": "65047d43904ac1bfa7f8d960",
            "name": "John Doe",
            "email": "john.doe@yahoo.com",
            "age": 23,
            "createdAt": "2023-09-15T15:50:27.494Z",
            "updatedAt": "2023-09-15T15:50:27.494Z",
            "__v": 0
        }
    ]
}
```


get all users with specific age greater than 30
axios.get("https://task-two-2zmv.onrender.com/api/?age[gte]=30")
Response:
```json
{
    "data": [
        {
            "_id": "65047082f46acc616b27f637",
            "name": "Mark Essien",
            "email": "mark234@gmail.com",
            "age": 34,
            "createdAt": "2023-09-15T14:56:02.029Z",
            "updatedAt": "2023-09-15T14:56:02.029Z",
            "__v": 0
        }
    ]
}

```
#Update user information
This require the specific id of the user to be updated and a parameter
and also the body should contain the field to update and the new value.

Endpoint: https://task-two-2zmv.onrender.com/api/user_id
Regest:
```json
{

"age":33
}
```

Method: patch
Success code: 200
Response:
```json
{
    "data": {
        "name": "John Doe",
        "email": "john.doe@yahoo.com",
        "age": 33,
        "_id": "65047d43904ac1bfa7f8d960",
        "createdAt": "2023-09-15T15:50:27.494Z",
        "updatedAt": "2023-09-15T15:50:27.494Z",
        "__v": 0
    }
}
```

#Delete user
Endpoint: https://task-two-2zmv.onrender.com/api/user_id
Method: delete
Response: 
```json
{
    "message": "User deleted successfully!"
}
```
