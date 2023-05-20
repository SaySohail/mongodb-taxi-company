// Names of drivers that are using roadworthy cars

 db.Car.aggregate([
    {$match: {description_status: 'roadworthy'}},
    {$lookup: {
        from: 'Drivers',
        localField: '_id',
        foreignField: 'cars.car_id',
        as: 'CarDriver'

    }},
    { $addFields: {
        "CarDriver_Name": "$CarDriver.name",
       }},
    {$project: {
        '_id': 0,
        'registration_number': 1,
        'model': 1,
        'description_status': 1,
        'CarDriver_Name': 1

    }}
 ])