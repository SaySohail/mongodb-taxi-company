db.createCollection('Operator', {
    validator:{
        $jsonSchema: { 
            bsonType: 'object',
            required:['name', 'salary', 'branch_number', 'last_update', 'shift'],
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
                salary: {
                    bsonType: 'object',
                    required: ['price', 'currency'],
                    properties: {
                        price: {
                            bsonType: 'number',
                            description: 'Salary Amount is a required field and must be a number'
                        },
                        currency: {
                            bsonType: 'string',
                            description: 'Currency is a required field and must be a string'
                        }
                    }

                },
                branch_number: {
                    bsonType: 'number',
                    description: "Branch Number is a required field and must be a number"
                },
                'last_update': {
                    bsonType: 'timestamp',
                    description: 'last_update must be a timestamp'
                },
                shift: {
                    bsonType: 'object',
                    properties: {
                        first_shift: {
                            bsonType: 'bool',
                            description: 'First Shift can only be true or false'
                        },
                        second_shift: {
                            bsonType: 'bool',
                            description: 'Second Shift can only be true or false'
                        },
                        third_shift: {
                            bsonType: 'bool',
                            description: 'Third Shift can only be true or false'
                        },

                    }
                }
            }
        }
}
}
)