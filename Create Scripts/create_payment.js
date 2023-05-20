db.createCollection('Payments', {
    validator:{
        $jsonSchema: { 
            bsonType: 'object',
            required: [ 'method', 'amount', 'payment_date', 'booking_id', 'last_update'],
            properties: {
                method: {
                    bsonType: 'object',
                    required: ['cash', 'credit_card', 'debit_card'],
                    properties: {
                        cash: {
                            bsonType: 'bool',
                            description: 'Cash is a required Boolean field'
                        },
                        credit_card: {
                            bsonType: 'bool',
                            description: 'Credit Card is a required Boolean field'
                        },
                        debit_card: {
                            bsonType: 'bool',
                            description: 'Debit Card is a required Boolean field'
                        }
                    }
                },
                amount: {
                    bsonType: 'number',
                    description: 'Payment Amount is a required field and must be a number'
                },
                payment_date: {
                    bsonType: 'date',
                    description: 'Payment Date is a required field and must be a valid date'
                },
                booking_id:{
                    bsonType: 'objectId',
                    description: 'Booking Id is a required field and must be of type objectid'
                },
                last_update:{
                    bsonType: 'timestamp',
                    description: 'last_update must be a timestamp'
                },
                

            }
        }},
        validationAction: 'warn'
    })