db.createCollection('Clients', {
    validator:{
        $jsonSchema: { 
            bsonType: 'object',
            required: ['client_type', 'name', 'phone', 'address', 'pickup_address', 'destination_address', 'pickup_time', 'email', 'active', 'membership_date', 'frequency', 'last_update'],
            properties: {
                client_type: {
                    bsonType: 'object',
                    required: ['corporate', 'private'],
                    properties: {
                        corporate: {
                            bsonType: 'bool',
                            description: 'corporate is a required Boolean field'
                        },
                        private: {
                            bsonType: 'bool',
                            description: 'private is a required Boolean field'
                        },

                    }
                },
                name: {
                    bsonType: 'string',
                    description: 'Client Name Must be a string and is a required field'
                },
                phone: {
                    bsonType: 'string',
                    description: 'Phone Number is a required field and must be a string'
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
                            minLength: 1,
                            maxLength: 6,
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
                            minLength: 1,
                            maxLength: 6,
                            description: 'Postcode must be a string with length between 1 and 6'
                        }

                    }
                }, 
                pickup_time: {
                    bsonType: 'date',
                    description: 'Pick Up time must be a valid ISO datetime'
                },
                email: {
                    bsonType: 'string',
                    minLength: 6,
                    maxLength: 40,
                    pattern: '[a-z0-9._%+!$&*=^|~#%{}/-]+@([a-z0-9-]+.){1,}([a-z]{2,22})',
                    description: 'It is required and it must be a string with length between 6 and 40 (regular expression pattern)'
                },
                active: {
                    bsonType: 'bool',
                    description: 'Is Active is a required Boolean field'
                },
                membership_date: {
                    bsonType: 'date',
                    description: 'Membership Date is a required field and must be a valid ISO date'
                },
                frequency: {
                    bsonType: 'array',
                    description: 'Frequency must be an array and is required',
                },
                last_update:{
                    bsonType: 'timestamp',
                    description: 'last_update must be a timestamp'
                }

            }
        }}})