const { db, Timestamp } = require("mongodb");

db.Operator.insertOne(
    {
        "name": {
            "first_name": "Charde",
            "last_name": "Marshall"
        },
        "salary": {
            "price": 2900,
            "currency": "GBP"
        },
        "branch_number": 1011,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":false,
          "second_shift":true,
          "third_shift": false
        },
    }
);

db.Operator.insertMany([
    {
        "name": {
            "first_name": "Garret",
            "last_name": "Winter"
        },
        "salary": {
            "price": 3500,
            "currency": "GBP"
        },
        "branch_number": 1012,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":true,
          "second_shift":false,
          "third_shift": false
        }
    },
    {
        "name": {
            "first_name": "Gavin",
            "last_name": "Cortez"
        },
        "salary": {
            "price": 3000,
            "currency": "GBP"
        },
        "branch_number": 1013,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":false,
          "second_shift":true,
          "third_shift": false
        },
    },
    {
        "name": {
            "first_name": "Finn",
            "last_name": "Rios"
        },
        "salary": {
            "price": 2300,
            "currency": "GBP"
        },
        "branch_number": 1014,
        "last_update":new Timestamp(),
        "shift":
        {
          "first_shift":false,
          "second_shift":false,
          "third_shift": true
        },
    },
    {
        "name": {
            "first_name": "Gavin",
            "last_name": "Joyce"
        },
        "salary": {
            "price": 2500,
            "currency": "GBP"
        },
        "branch_number": 1015,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":true,
          "second_shift":false,
          "third_shift": false
        },
    },
    {
        "name": {
            "first_name": "Gabriel",
            "last_name": "Sousa"
        },
        "salary": {
            "price": 2600,
            "currency": "GBP"
        },
        "branch_number": 1016,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":false,
          "second_shift":true,
          "third_shift": false
        },
    },
    {
        "name": {
            "first_name": "Josef",
            "last_name": "Haskell"
        },
        "salary": {
            "price": 2800,
            "currency": "GBP"
        },
        "branch_number": 1017,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":false,
          "second_shift":false,
          "third_shift": true
        },
    },
    {
        "name": {
            "first_name": "Jone",
            "last_name": "Weak"
        },
        "salary": {
            "price": 3100,
            "currency": "GBP"
        },
        "branch_number": 1012,
        "last_update": new Timestamp(),
        "shift":
        {
          "first_shift":true,
          "second_shift":false,
          "third_shift": false
        },
    }
]);