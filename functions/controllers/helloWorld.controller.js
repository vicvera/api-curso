'use strict';

const postHello = async(req, res) => {
    console.log('En un POST');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el POST correctamente.'
    });
};

const getHello = async(req, res) => {
    console.log('En un GET');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el GET correctamente.'
    });
};

const getAllHello = async(req, res) => {
    console.log('En un GET All');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el GET All correctamente.'
    });
};

const putHello = async(req, res) => {
    console.log('En un PUT');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el PUT correctamente.'
    });
};

const delHello = async(req, res) => {
    console.log('En un DELETE');
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    return res.status(200).send({
        message: 'Se hizo el DELETE correctamente.'
    });
};

module.exports = {
    postHello,
    getAllHello,
    getHello,
    putHello,
    delHello
};