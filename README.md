<h3 align="center">🚩 Node Api Using Postgres 🚩</h3>

---

<p align="center"> This is an example of how to use Postgres + Validator to construct a REST application using Node JS
    <br> 
</p>

## 📝 Table of Contents

- [Build Requeriment](#built_req)
- [How to Start the Server](#how_start)
- [Data Structure](#data_type)
- [Request & Response](#reqres)

## ⛏️ Build Requeriment <a name = "built_req"></a>

- [PostgreSQL](https://www.mongodb.com/) - Database
- [Npm](https://www.npmjs.com/) - Package Management
- [Node](https://nodejs.org/en/) - Development Tool

## 💎 How to Start the Server <a name = "how_start"></a>

1. Clone the Repository
2. open your terminal and run `npm install`
3. start the server using the command `npm run start` or `npm run start-dev`

`npm run start` -> start using node

`npm run start-dev` -> start using nodemon

## ｛｝Data Structure <a name = "data_type"></a>

    {
      id: intenger,
      name: string
      email: string
    }

# HTTP Verbs

HTTP verbs, or methods, should be used in compliance with their definitions under the HTTP/1.1 standard. The action taken on the representation will be contextual to the media type being worked on and its current state. Here's an example of how HTTP verbs map to create, read, update, delete operations in a particular context:

| HTTP METHOD |       GET       |              POST | PUT               |            DELETE |
| ----------- | :-------------: | ----------------: | ----------------- | ----------------: |
| CRUD OP     |     CREATE      |              READ | UPDATE            |            DELETE |
| /users      | List all users  | Create a new User | Error             |             Error |
| /users/1    | Find the user 1 |             Error | Update the user 1 | Delete the user 1 |

## <strong> Request & Response </strong><a name = "reqres"></a>

### API Resources

- [GET /users](#get-users)
- [GET /users/[id]](#get-usersid)
- [POST /users](#post-users)
- [PUT /users/[id]](#put-usersid)
- [DELETE /users/[id]](#delete-usersid)

### 🔖 <strong>GET /users </strong><a name = "get-users"></a>

Full URL: https://myurl.com/users

    query = {
      offset: 0
      limit: 50
    }

#### Response

    {
      "statusCode": 200,
      "metadata": {
        "resultset": {
          "count": 2,
          "offset": 0,
          "limit": 50
        }
      },
      "results": [
        {
          "id": 1,
          "name": "Jerry",
          "email": "jerry@example.com"
        },
        {
          "id": 2,
          "name": "George",
          "email": "george@example.com"
        }
      ]
    }

### 🔖 <strong> GET /users/[id] </strong> <a name = "get-usersid"></a>

Full URL: https://myurl.com/users/1

    {
      "statusCode": 200,
      "results": [
        {
          "id": 1,
          "name": "Jerry",
          "email": "jerry@example.com"
        }
      ]
    }

### 🔖 <strong> POST /users </strong> <a name = "post-users"></a>

Full URL: https://myurl.com/users

#### Request Body

    {
      "name": "User 1",
      "email": "user1@example.com"
    }

#### Response

    {
      "statusCode": 200,
      "message": "User added with ID: 3",
      "results": [
        {
          "id": 3,
          "name": "User 1",
          "email": "user1@example.com"
        }
      ]
    }

### 🔖<strong> PUT /users/[id] </strong> <a name = "put-usersid"></a>

Full URL: https://myurl.com/users/1

#### Request Body

    {
    "name": "New Name",
    }

#### Response

    {
      "statusCode": 200,
      "message": "User modified with ID : 1",
      "results": []
    }

### 🔖 <strong> DELETE /users/[id] </strong> <a name = "delete-usersid"></a>

Full URL: https://myurl.com/users/2

    {
    "statusCode": 200,
    "message": "User deleted with ID 2"
    }
