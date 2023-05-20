db.createCollection('Drivers', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'phone', 'email',  'admission_date', 'address', 'shift', 'last_update', 'cars'],
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
                phone: {
                    bsonType: 'string',
                    description: 'Phone Number is a required field and must be a string'
                },
                email: {
                    bsonType: 'string',
                    minLength: 6,
                    maxLength: 40,
                    pattern: '[a-z0-9._%+!$&*=^|~#%{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,22})',
                    description: 'It is required and it must be a string with length between 6 and 40 (regular expression pattern)'
                },
                admission_date: {
                    bsonType: 'date',
                    description: 'Admission must be a valid date'
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
                            description: 'Postcode must be a string with length between 1 and 6'
                        }

                    }
                },
                shift: {
                    bsonType: 'string',
                    properties: {
                        shift_start_time: {
                            bsonType: 'string',
                            description: 'Shift start time is stored as a string'
                        },
                        shift_end_time: {
                            bsonType: 'string',
                            description: 'Shift end time is stored as a string'
                        }
                    }
                },
                employment: {
                    bsonType:['object', 'null'],
                    properties: {
                        type: {
                            bsonType: ['object'],
                            required: ['fixed', 'percentage'],
                            properties: {
                                fixed: {
                                    bsonType: 'bool',
                                    description: 'Can be true or false'
                                },
                                percentage: {
                                    bsonType: 'bool',
                                    description: 'Can be true or false'
                                }
                            }
                        },
                        due_date: {
                            bsonType: 'date',
                            description: 'Due Date must be a valid date'
                        }
                    }
                },
                last_update:{
                    bsonType: 'timestamp',
                    description: 'last_update must be a timestamp'
                },
                percentage_receipt:{
                    bsonType: ['number', 'null'],
                    description: 'Percentage the driver receives, if there is no such field then the driver receives fixed salary'
                },
                cars: {
                    bsonType: 'array',
                    description: 'must be an array and is required',
                    items: {
                        bsonType: 'object',
                        required: ['car_id', 'car_reg_number'],
                        properties: {
                            car_id: {
                            bsonType: 'objectId',
                            description: 'must be a objectid and is required'
                          },
                          car_reg_number: {
                            bsonType: 'string',
                            description: 'must be an  string and is required'
                          }
                        }
                      }
                }
            }
        }
    },
  validationAction: 'warn'
});