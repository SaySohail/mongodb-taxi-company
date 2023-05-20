db.Car.insertOne({
        "registration_number": "GB90SEP",
        "model": "Honda",
        "year": 2012,
        "lastMot_test": 2018,
        "description_status": "written off",
        "car_insurance": "CAR1234A",
        "special_features": "Cameras around your car, not just behind it. GPS.",
        "car_owner": {
            "name": "Sefa Bolge",
            "phone_no": "+44 4326776543",
            "address": {
                "street": "Mile End Rd",
                "city": "London",
                "postcode": "E2-3DE"
            }
        },
        "last_update": new Timestamp()
  
})

db.Car.insertMany([
    {
        "registration_number": "GB83FRP",
        "model": "Ford - Gol",
        "year": 2011,
        "lastMot_test": 2017,
        "description_status": "awaiting repair",
        "car_insurance": "CAR3454A",
        "special_features": "",
        "car_owner": {
            "name": "Harry Potter",
            "phone_no": "044426541235",
            "address": {
                "street": "Diagon Alley",
                "city": "London",
                "postcode": "E2-3MG"
            }
        },
        "last_update": new Timestamp()
    },
    {
        "registration_number": "GB7XXRP",
        "model": "Volkswagen",
        "year": 2009,
        "lastMot_test": 2017,
        "description_status": "roadworthy",
        "car_insurance": "CAR1234QA",
        "special_features": "",
        "car_owner": {
            "name": "Jesus Garza",
            "phone_no": "044423141299",
            "address": {
                "street": "Sherren House",
                "city": "London",
                "postcode": "E1-5AF"
            }
        },
        "last_update": new Timestamp()
    },
    {
        "registration_number": "GB90TGH",
        "model": "Volkswagen",
        "year": 2012,
        "lastMot_test": 2016,
        "description_status":"written off",
        "car_insurance": "CAR123Q4A",
        "special_features": "Cameras around your car, not just behind it. GPS.",
        "car_owner": {
            "name": "Gina Weasley",
            "phone_no": "044426541235",
            "address": {
                "street": "Gringots Bank Lane",
                "city": "London",
                "postcode": "E2-3MG"
            }
        },
        "last_update": new Timestamp()
    },
    {
        "registration_number": "GB90TDH",
        "model": "Volkswagen POLO GT",
        "year": 2012,
        "lastMot_test": 2016,
        "description_status":"roadworthy",
        "car_insurance": "CARQ1234A",
        "special_features": "Cameras around your car, not just behind it. GPS.",
        "car_owner": {
            "name": "Gina Weasley",
            "phone_no": "044426541235",
            "address": {
                "street": "Gringots Bank Lane",
                "city": "London",
                "postcode": "E2-3MG"
            }
        },
        "last_update": new Timestamp()
    }


])