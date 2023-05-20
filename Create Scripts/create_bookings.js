db.createCollection('Bookings', {
    validator:{
        $jsonSchema: { 
            bsonType: 'object',
            required: ['travel_date', 'customer_info', 'observation', 'paid', 'operator_id', 'driver_id', 'last_update'],
            properties: {
                travel_date: {
                    bsonType: 'date',
                    description: 'Travel Date is a required field and must be a valid ISO date'
                },
                customer_info:{
                    bsonType: 'object',
                    required: ['name', 'phone_number', 'pickup_address', 'destination_address'],
                    properties: {
                        name: {
                            bsonType: 'object',
                            required: ['first_name', 'last_name'],
                            properties: {
                                first_name: {
                                    bsonType: 'string',
                                    description: 'First Name is required and must be a string'
                                },
                                last_name: {
                                    bsonType: 'string',
                                    description: 'Last Name is required and must be a string'
                                }
                            }
                        },
                        phone_number: {
                            bsonType: 'string',
                            description: 'Phone Number is a required field and must be a string'
                        },
                        pickup_address: {
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
                                    description: 'Postcode must be a string with length between 1 and 6'
                                }
        
                            }
                        },
                        destination_address: {
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
                                    description: 'Postcode must be a string with length between 1 and 6'
                                }
        
                            }
                        }

                    }
                },
                observation: {
                    bsonType: 'string',
                    description: 'Observation is a required field and must be a string'
                },
                paid: {
                    bsonType: 'bool',
                    description: 'Paid is a required and a boolean field'
                }, 
                operator_id: {
                    bsonType: 'objectId',
                    description: 'Operator Id is a required field and must be of type objectid'
                },
                driver_id: {
                    bsonType: 'objectId',
                    description: 'Driver Id is a required field and must be of type objectid'
                },
                client_id: {
                    bsonType: 'objectId',
                    description: 'Client Id is a required field and must be of type objectid'
                },
                last_update:{
                    bsonType: 'timestamp',
                    description: 'last_update must be a timestamp'
                }
            }
        }},
        validationAction: 'warn'
    })