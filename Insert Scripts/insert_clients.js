const { db, Timestamp } = require("mongodb");

db.Clients.insertOne(	{
    "client_type":
    {
        "private": false,
        "corporate": true
    },
    "name":"ACME Ltda.",
    "phone":"07474566665",
    "address":
    {
        "street":"Westminester Rd",
        "city":"Briston",
        "postcode":"W2-3ED"
    },
    "pickup_address": {
        "street": "93 Eric Street",
        "city": "London",
        "postcode": "E4 2ED"
     },
     "destination_address": {
            "street": "67 Breadboard Lane",
            "city": "London",
            "postcode": "B4 2ED"
     },
    "pickup_time": ISODate("2017-01-03T00:00:00"),
    "email":"logistics@acme.com",
    "active":true,
    "membership_date": ISODate("2017-01-03T00:00:00"),
    "frequency" : [1,2,3,4,5,6,7],

    "last_update": new Timestamp()
});


db.Clients.insertMany([
    {
        "client_type":
          {
            "private": true,
            "corporate": false
          },
        "name": "Albert taylor",
        "phone":"09696523123",
        "address":
          {
            "street":"Groover St",
            "city":"London",
            "postcode":"W3-3ED"
          },
        "pickup_address": {
            "street": "93 Goblet Street",
            "city": "London",
            "postcode": "E4-2ED"
         },
        "destination_address": {
            "street": "67 Sweetplace Lane",
            "city": "London",
            "postcode": "B4-2ED"
         },
        "pickup_time": ISODate("2017-01-06T00:00:00"),
        "email":"albert@gmail.com",
        "active": true,
        "membership_date": ISODate("2017-01-01T00:00:00"),
        "frequency" : [5,6,7],
        "last_update": new Timestamp()
    },
    {
        "client_type":
          {
            "private": true,
            "corporate": false
          },
        "name": "Joseph Button",
        "phone":"09696523123",
        "address":
          {
            "street":"High St",
            "city":"London",
            "postcode":"E5-2ZL"
          },
        "pickup_address": {
            "street": "21/b Baker Street",
            "city": "London",
            "postcode": "E4-2ED"
         },
        "destination_address": {
            "street": "67 Sweetplace Lane",
            "city": "London",
            "postcode": "B4-2ED"
         },
        "pickup_time": ISODate("2017-01-01T00:00:00"),
        "email":"joseph@gmail.com",
        "active": true,
        "membership_date": ISODate("2017-01-01T00:00:00"),
        "frequency" : [5,6,7],
        "last_update": new Timestamp()
    }

]);
