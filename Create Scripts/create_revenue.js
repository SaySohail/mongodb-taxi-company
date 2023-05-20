db.createCollection('Revenue', {
    validator:{
        $jsonSchema: { 
            bsonType: 'object',
            required: ['driver_id', 'driver_wage', 'company_wage'],
            properties: {
                driver_id: {
                    bsonType: 'objectId',
                    description: 'Driver Id is a required field and must be of type objectid'
                },
                driver_wage: {
                    bsonType: 'number',
                    description: 'driver_wage is a required field and must be a number'
                },
                company_wage: {
                    bsonType: 'number',
                    description: 'company_wage is a required field and must be a number'
                }
            }
        }}

    });