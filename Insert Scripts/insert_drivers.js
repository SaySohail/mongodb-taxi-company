const { Db, Timestamp } = require("mongodb");


var carsList = db.Car.find({},{_id:1,registration_number: 1}).toArray()
db.Drivers.insertOne({
    "name":
    {
        "first_name":"Bradley",
        "last_name":"Greer"
    },
    "phone":"04545256874",
    "email":"bradley@taxi_company.com",
    "admission_date":ISODate("2022-12-01T12:00:00"),
    "address":
    {
        "street":"Winterfell Lane",
        "city":"Godric's Hollow",
        "postcode":"W2-3RD"
    },
    "shift":
    {
		shift_start_time: '00:00',
        shift_end_time: '08:00'
		},
    "employment":{
        "type" : {
            "fixed": true,
            "percentage": false
        },
        "value" : 10000.000,
        "due_date" : ISODate("2022-12-22T12:00:00")
    },
    "last_update": new Timestamp(),
    "cars": [{
        "car_id":carsList[0]._id,
        "car_reg_number": carsList[0].registration_number
    },{
        "car_id": carsList[1]._id,
        "car_reg_number": carsList[1].registration_number
    }
    
        ]
})

db.Drivers.insertMany([
    {
	    "name":
	    {
	      "first_name":"Haley",
	      "last_name":"Kenedy"
	    },
	    "phone":"04545256874",
	    "email":"haley@taxi_company.com",
	    "admission_date":ISODate("2022-12-01T12:00:00"),
	    "address":
	    {
	      "street":"Brick Lane",
	      "city":"Godric's Hollow",
	      "postcode":"W5-3RD"
	    },
	    "shift":
	    {
            "shift_start_time": '16:00',
			"shift_end_time": '24:00'
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": false,
                "percentage": true
            },
            "value" : 0.2,
            "due_date" : ISODate("2022-12-22T12:00:00")
        },
	    "last_update": new Timestamp(),
        "cars": [{
            "car_id": carsList[1]._id,
            "car_reg_number": carsList[1].registration_number
        },{
            "car_id":  carsList[2]._id,
            "car_reg_number": carsList[2].registration_number
        }
        
        ],
        "percentage_receipt": 40
  	},
      {
	    "name":
	    {
	      "first_name":"Hermione",
	      "last_name":"Granger"
	    },
	    "phone":"04545279874",
	    "email":"hermione@taxi_company.com",
	    "admission_date":ISODate("2022-12-03T12:00:00"),
	    "address":
	    {
	      "street":"Muggles Rd",
	      "city":"Godric's Hollow",
	      "postcode":"G5-6TD"
	    },
        "shift":
	    {
            "shift_start_time": '8:00',
			"shift_end_time": '16:00'
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": true,
                "percentage": false
            },
            "value" : 8000,
            "due_date" : ISODate("2022-12-22T12:00:00")
        },
	    "last_update": new Timestamp(),
        "cars": [{
            "car_id": carsList[2]._id,
            "car_reg_number": carsList[2].registration_number
        },{
            "car_id": carsList[3]._id,
            "car_reg_number":carsList[3].registration_number
        }
        
        ],
        "percentage_receipt": 40

  	},
      {
	    "name":
	    {
	      "first_name":"Ronald",
	      "last_name":"Weasley"
	    },
	    "phone":"04545256874",
	    "email":"ronald@taxi_company.com",
	    "admission_date":ISODate("2022-12-03T12:00:00"),
	    "address":
	    {
	      "street":"Centaurian St",
	      "city":"London",
	      "postcode":"W5-3RD"
	    },
	    "shift":
	    {
            "shift_start_time": '8:00',
			"shift_end_time": '16:00'
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": false,
                "percentage": true
            },
            "value" : 0.4,
            "due_date" : ISODate("2022-12-22T12:00:00")
        },
	    "last_update": new Timestamp(),
        "cars": [{
            "car_id": carsList[3]._id,
            "car_reg_number": carsList[3].registration_number
        },{
            "car_id": carsList[4]._id,
            "car_reg_number": carsList[4].registration_number
        }
        
        ]
  	},
      {
	    "name":
	    {
	      "first_name":"JAMES",
	      "last_name":"Cameroon"
	    },
	    "phone":"045121274",
	    "email":"james@taxi_company.com",
	    "admission_date":ISODate("2022-12-03T12:00:00"),
	    "address":
	    {
	      "street":"Centaurian St",
	      "city":"London",
	      "postcode":"W5-1RD"
	    },
	    "shift":
	    {
            "shift_start_time": '00:00',
			"shift_end_time": '16:00'
	    },
        "employment":
        {
            "type" : 
            {
                "fixed": false,
                "percentage": true
            },
            "value" : 0.4,
            "due_date" : ISODate("2022-12-22T12:00:00")
        },
	    "last_update": new Timestamp(),
        "cars": [{
            "car_id": carsList[4]._id,
            "car_reg_number": carsList[4].registration_number
        },{
            "car_id": carsList[1]._id,
            "car_reg_number": carsList[1].registration_number
        }
        
        ]
  	}
])