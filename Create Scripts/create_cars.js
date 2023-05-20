db.createCollection('Car', { 
    validator:{
        $jsonSchema: { 
            bsonType: 'object',
            required: ['registration_number', 'model', 'year', 'lastMot_test', 'description_status', 'car_insurance', 'car_owner'],
            properties: {
                registration_number: {
                    bsonType: 'string',
                    description: 'Registration Number is a required field'
                },
                model: {
                    bsonType: 'string',
                    description: 'Car model is a required field'
                },
                year: {
                    bsonType: 'number',
                    description: 'Car Manufacturing Year is a required field and must be a number'
                },
                lastMot_test: {
                    bsonType: 'number',
                    description: 'Last MOT Test is a required field and must be a number'
                },
                description_status:{
                    bsonType: 'string',
                   description: 'car status can be either roadworthy, in for service , awaiting repair, written off and must be string'
                },
                car_insurance: {
                    bsonType: 'string',
                    description: 'Car insurance is a required field'
                },
                special_features: {
                    bsonType: 'string'
                },
                car_owner: {
                    bsonType: 'object',
                    required: ['name', 'phone_no', 'address'],
                    description: 'Car owner details include Name , Phone_NO, Address',
                    properties: {
                        name: {
                            bsonType: 'string',
                            description: 'Car owner name is a required field'
                        },
                        phone_no: {
                            bsonType: 'string',
                            description: 'Car owner Phone Number is a required field and is a string'
                        },
                        address: {
                            bsonType: 'object',
                            required: ['street', 'city', 'postcode'],
                            properties: {
                                street: {
                                    bsonType: 'string',
                                    description: 'Street must be a string'
                                },
                                city: {
                                    bsonType: 'string',
                                    description: 'City must be a string'
                                },
                                postcode: {
                                    bsonType: 'string',
                                    minLength: 1,
                                    maxLength: 6,
                                    description: 'Postcode must be a string'
                                }
                            }
                        }
                    }
                },
                last_update:{
                    bsonType: 'timestamp',
                    description: 'last_update must be a timestamp'
                }

            }
        }
    }
})