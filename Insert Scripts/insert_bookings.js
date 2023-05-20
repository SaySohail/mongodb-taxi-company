const { Timestamp } = require("mongodb");

operator_charde = db.Operator.findOne({
    name: {
            first_name: "Charde",
            last_name: "Marshall"
          }
});

driver_bradley = db.Drivers.findOne({
    name: {
              first_name:"Bradley",
              last_name:"Greer"
          }
});

driver_hermione = db.Drivers.findOne({
    name: {
              first_name:"Hermione",
              last_name:"Granger"
          }
});

driver_james = db.Drivers.findOne({
    name: {
              first_name:"JAMES",
              last_name:"Cameroon"
          }
});

driver_ronald = db.Drivers.findOne({
    name: {
              first_name:"Ronald",
              last_name:"Weasley"
          }
});

client_ACME = db.Clients.findOne({
    name: "ACME Ltda." });

db.Bookings.insertOne(
    {
        "travel_date": ISODate("2022-03-04T12:37:00"),
        "customer_info": {
            "name":
            {
              "first_name":"Cara",
              "last_name":"Stevens"
            },
            "phone_number": "04747955265",
            "pickup_address": {
                "street": "12 Whitechaple Rd",
                "city": "London",
                "postcode": "E4 2ED"
            },
            "destination_address": {
                "street": "67, Migglets Lane",
                "city": "London",
                "postcode": "G4 2ED"
            }
        },
        "observation": "Large Lugagges",
        "paid": true,
        "last_update": new Timestamp(),
        "operator_id": operator_charde._id ,
        "driver_id": driver_bradley._id,
        "client_id": client_ACME._id
    });


db.Bookings.insertOne(
        {
            "travel_date": ISODate("2022-11-09T11:00:00"),
            "customer_info": {
                "name":
                {
                  "first_name":"Martin",
                  "last_name":"Cavazos"
                },
                "phone_number": "04747222211",
                "pickup_address": {
                    "street": "25 Shoreditch Rd",
                    "city": "London",
                    "postcode": "E4 6ED"
                },
                "destination_address": {
                    "street": "14 Whitechappel Rd",
                    "city": "London",
                    "postcode": "E4 2ED"
                }
            },
            "observation": "Wheelchair",
            "paid": true,
            "last_update": new Timestamp(),
            "operator_id": operator_charde._id ,
            "driver_id": driver_hermione._id,
            "client_id": client_ACME._id

        });


db.Bookings.insertOne(
            {
                "travel_date": ISODate("2022-05-05T12:10:00"),
                "customer_info": {
                    "name":
                    {
                      "first_name":"Tom",
                      "last_name":"Riddle"
                    },
                    "phone_number": "04747956765",
                    "address": {
                        "street": "Wilcox Rd",
                        "city": "London",
                        "postcode": "E4 2ED"
                    },
                    "pickup_address": {
                        "street": "12 Sheren Rd",
                        "city": "London",
                        "postcode": "S4 2ED"
                     },
                    "destination_address": {
                        "street": "67, Queen Lane",
                        "city": "London",
                        "postcode": "Q4 2ED"
                     }
                },
                "observation": "",
                "paid": true,
                "last_update": new Timestamp(),
                "operator_id": operator_charde._id ,
                "driver_id": driver_hermione._id,
                "client_id": client_ACME._id
            });


            db.Bookings.insertOne(
                {
                    "travel_date": ISODate("2022-05-05T12:10:00"),
                    "customer_info": {
                        "name":
                        {
                          "first_name":"Tom",
                          "last_name":"Riddle"
                        },
                        "phone_number": "04747956765",
                        "address": {
                            "street": "Wilcox Rd",
                            "city": "London",
                            "postcode": "E4 2ED"
                        },
                        "pickup_address": {
                            "street": "12 Sheren Rd",
                            "city": "London",
                            "postcode": "S4 2ED"
                         },
                        "destination_address": {
                            "street": "67, Queen Lane",
                            "city": "London",
                            "postcode": "Q4 2ED"
                         }
                    },
                    "observation": "",
                    "paid": true,
                    "last_update": new Timestamp(),
                    "operator_id": operator_charde._id ,
                    "driver_id": driver_bradley._id,
                    "client_id": client_albert._id
                });


                db.Bookings.insertOne(
                    {
                        "travel_date": ISODate("2022-05-05T12:10:00"),
                        "customer_info": {
                            "name":
                            {
                              "first_name":"Tom",
                              "last_name":"Riddle"
                            },
                            "phone_number": "04747956765",
                            "address": {
                                "street": "Wilcox Rd",
                                "city": "London",
                                "postcode": "E4 2ED"
                            },
                            "pickup_address": {
                                "street": "12 Sheren Rd",
                                "city": "London",
                                "postcode": "S4 2ED"
                             },
                            "destination_address": {
                                "street": "67, Queen Lane",
                                "city": "London",
                                "postcode": "Q4 2ED"
                             }
                        },
                        "observation": "",
                        "paid": true,
                        "last_update": new Timestamp(),
                        "operator_id": operator_charde._id ,
                        "driver_id": driver_hermione._id
                    })



                    db.Bookings.insertOne(
                        {
                            "travel_date": ISODate("2022-11-09T11:00:00"),
                            "customer_info": {
                                "name":
                                {
                                  "first_name":"Martin",
                                  "last_name":"Cavazos"
                                },
                                "phone_number": "04747222211",
                                "pickup_address": {
                                    "street": "25 Shoreditch Rd",
                                    "city": "London",
                                    "postcode": "E4 6ED"
                                },
                                "destination_address": {
                                    "street": "14 Whitechappel Rd",
                                    "city": "London",
                                    "postcode": "E4 2ED"
                                }
                            },
                            "observation": "Wheelchair",
                            "paid": true,
                            "last_update": new Timestamp(),
                            "operator_id": operator_charde._id ,
                            "driver_id": driver_hermione._id
                        })

                        db.Bookings.insertOne(
                            {
                                "travel_date": ISODate("2022-11-09T11:00:00"),
                                "customer_info": {
                                    "name":
                                    {
                                      "first_name":"Martin",
                                      "last_name":"Senior"
                                    },
                                    "phone_number": "04712322211",
                                    "pickup_address": {
                                        "street": "215 Shoreditch Rd",
                                        "city": "London",
                                        "postcode": "E4 6ED"
                                    },
                                    "destination_address": {
                                        "street": "14 Whitechappel Rd",
                                        "city": "London",
                                        "postcode": "E4 2ED"
                                    }
                                },
                                "observation": "Wheelchair",
                                "paid": false,
                                "last_update": new Timestamp(),
                                "operator_id": operator_charde._id ,
                                "driver_id": driver_hermione._id
                            })

                            db.Bookings.insertOne(
                                {
                                    "travel_date": ISODate("2022-05-05T12:10:00"),
                                    "customer_info": {
                                        "name":
                                        {
                                          "first_name":"Tom",
                                          "last_name":"Moody"
                                        },
                                        "phone_number": "0472956765",
                                        "address": {
                                            "street": "Wilcox Rd",
                                            "city": "London",
                                            "postcode": "E4 2ED"
                                        },
                                        "pickup_address": {
                                            "street": "12 Brooklyn Rd",
                                            "city": "London",
                                            "postcode": "S4 1ED"
                                         },
                                        "destination_address": {
                                            "street": "67, Kings Lane",
                                            "city": "London",
                                            "postcode": "Q4 4ED"
                                         }
                                    },
                                    "observation": "",
                                    "paid": false,
                                    "last_update": new Timestamp(),
                                    "operator_id": operator_charde._id ,
                                    "driver_id": driver_bradley._id
                                });


                                db.Bookings.insertOne(
                                    {
                                        "travel_date": ISODate("2022-05-05T12:10:00"),
                                        "customer_info": {
                                            "name":
                                            {
                                              "first_name":"Tom",
                                              "last_name":"Riddle"
                                            },
                                            "phone_number": "04747956765",
                                            "address": {
                                                "street": "Wilcox Rd",
                                                "city": "London",
                                                "postcode": "E4 2ED"
                                            },
                                            "pickup_address": {
                                                "street": "12 Sheren Rd",
                                                "city": "London",
                                                "postcode": "S4 2ED"
                                             },
                                            "destination_address": {
                                                "street": "67, Queen Lane",
                                                "city": "London",
                                                "postcode": "Q4 2ED"
                                             }
                                        },
                                        "observation": "",
                                        "paid": true,
                                        "last_update": new Timestamp(),
                                        "operator_id": operator_charde._id ,
                                        "driver_id": driver_ronald._id,
                                        "client_id": client_albert._id
                                    });

                                    db.Bookings.insertOne(
                                        {
                                            "travel_date": ISODate("2022-06-05T12:10:00"),
                                            "customer_info": {
                                                "name":
                                                {
                                                  "first_name":"Tom",
                                                  "last_name":"Riddle"
                                                },
                                                "phone_number": "04747956765",
                                                "address": {
                                                    "street": "Wilcox Rd",
                                                    "city": "London",
                                                    "postcode": "E4 2ED"
                                                },
                                                "pickup_address": {
                                                    "street": "12 Sheren Rd",
                                                    "city": "London",
                                                    "postcode": "S4 2ED"
                                                 },
                                                "destination_address": {
                                                    "street": "67, Queen Lane",
                                                    "city": "London",
                                                    "postcode": "Q4 2ED"
                                                 }
                                            },
                                            "observation": "",
                                            "paid": false,
                                            "last_update": new Timestamp(),
                                            "operator_id": operator_charde._id ,
                                            "driver_id": driver_ronald._id,
                                            "client_id": client_ACME._id
                                        });

    
                                        db.Bookings.insertOne(
                                            {
                                                "travel_date": ISODate("2022-05-15T12:10:00"),
                                                "customer_info": {
                                                    "name":
                                                    {
                                                      "first_name":"Tom",
                                                      "last_name":"Moody"
                                                    },
                                                    "phone_number": "0472956765",
                                                    "address": {
                                                        "street": "Wilcox Rd",
                                                        "city": "London",
                                                        "postcode": "E4 2ED"
                                                    },
                                                    "pickup_address": {
                                                        "street": "12 Brooklyn Rd",
                                                        "city": "London",
                                                        "postcode": "S4 1ED"
                                                     },
                                                    "destination_address": {
                                                        "street": "67, Kings Lane",
                                                        "city": "London",
                                                        "postcode": "Q4 4ED"
                                                     }
                                                },
                                                "observation": "",
                                                "paid": false,
                                                "last_update": new Timestamp(),
                                                "operator_id": operator_charde._id ,
                                                "driver_id": driver_ronald._id
                                            });
            

                db.Bookings.insertOne(
                    {
                        "travel_date": ISODate("2022-05-11T12:10:00"),
                        "customer_info": {
                            "name":
                            {
                              "first_name":"Tom",
                              "last_name":"Riddle"
                            },
                            "phone_number": "04747956765",
                            "address": {
                                "street": "Wilcox Rd",
                                "city": "London",
                                "postcode": "E4 2ED"
                            },
                            "pickup_address": {
                                "street": "12 Sheren Rd",
                                "city": "London",
                                "postcode": "S4 2ED"
                             },
                            "destination_address": {
                                "street": "67, Queen Lane",
                                "city": "London",
                                "postcode": "Q4 2ED"
                             }
                        },
                        "observation": "",
                        "paid": false,
                        "last_update": new Timestamp(),
                        "operator_id": operator_charde._id ,
                        "driver_id": driver_james._id
                    })