const db = require('../database/db');

const getUsers = async (request, response) => {
  try {
    const limit = request.query.limit ? parseInt(request.query.limit) : 50;
    const offset = request.query.offset ? parseInt(request.query.offset) : 0;

    const query = 'select * FROM users ORDER BY id ASC LIMIT $1 OFFSET $2';
    const params = [limit, offset];

    const { rowCount, rows } = await db.query(query, params);

    response.status(200).json({
      statusCode: 200,
      metadata: {
        resultset: {
          count: rowCount,
          offset: offset,
          limit: limit
        }
      },
      results: rows
    });
  } catch (e) {
    console.error(e);
    setImmediate(() => {
      throw e;
    });
  }
};

const getUserById = async (request, response) => {
  try {
    const id = parseInt(request.params.id);

    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];

    const { rowCount, rows } = await db.query(query, values);

    if (!rowCount) {
      return response.status(404).json({
        statusCode: 404,
        results: []
      });
    }

    response.status(200).json({
      statusCode: 200,
      results: rows
    });
  } catch (e) {
    response.status(400).json({
      errorCode: parseInt(e.code),
      detail: e.detail
    });
  }
};

const createUser = async (request, response) => {
  try {
    const { name, email } = request.body;

    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];

    const { rowCount, rows } = await db.query(query, values);

    response.status(201).json({
      statusCode: 200,
      message: `User added with ID: ${rows[0].id}`,
      results: rows
    });
  } catch (e) {
    response.status(400).json({
      errorCode: parseInt(e.code),
      detail: e.detail
    });
  }
};

const updateUser = async (request, response) => {
  try {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    let type;

    if (name && email) {
      type = 3;
    } else if (name) {
      type = 2;
    } else if (email) {
      type = 1;
    }

    let query;
    let values;

    switch (type) {
      case 3:
        query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';
        values = [name, email, id];
        break;
      case 2:
        query = 'UPDATE users SET name = $1 WHERE id = $2';
        values = [name, id];
        break;
      case 1:
        query = 'UPDATE users SET email = $1 WHERE id = $2';
        values = [email, id];
        break;
    }

    const { rowCount, rows } = await db.query(query, values);

    if (!rowCount) {
      return response.status(404).json({
        status: 'failed',
        errorCode: 404,
        message: `The user with id ${id} has not found`
      });
    }

    response.status(200).json({
      statusCode: 200,
      message: `User modified with ID : ${id}`,
      results: rows
    });
  } catch (e) {
    console.error(e);
    setImmediate(() => {
      throw e;
    });
  }
};

const deleteUser = async (request, response) => {
  try {
    const id = parseInt(request.params.id);

    const query = 'DELETE FROM users where id = $1';
    const values = [id];

    const { rowCount } = await db.query(query, values);

    if (!rowCount) {
      return response.status(404).json({
        status: 'failed',
        errorCode: 404,
        message: `The user with id ${id} has not found`
      });
    }

    response.status(200).json({
      status: 'success',
      message: `User deleted with ID ${id}`
    });
  } catch (e) {
    console.error(e);
    setImmediate(() => {
      throw e;
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
