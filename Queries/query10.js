const { Db } = require("mongodb");

// Getting list of all drrivers and their payment 
db.Bookings.aggregate([
    {$match: {
        paid: true
    }},
    {
        
        $lookup: {
           from: 'Payments',
           localField: '_id',
           foreignField: 'booking_id',
           as: 'PaidBookings'
        }
    },
    { $addFields: {
        "paidamount": "$PaidBookings.amount",
       }},
       { $unwind : "$paidamount" },
      {
        $project: {
            paidamount: 1,
            driver_id: 1
        }
      },
      {
        $lookup: {
           from: 'Drivers',
           localField: 'driver_id',
           foreignField: '_id',
           as: 'DriverDetails'
        }
      },
      { $addFields: {
        "driver_first_Name": "$DriverDetails.name.first_name",
        "driver_last_Name": "$DriverDetails.name.last_name"
       }},
       {
        $unwind: "$driver_first_Name",
        
       },
       {
        $unwind: "$driver_last_Name",
        
       },
       {
        $project: {
            driver_Name: { $concat: ["$driver_first_Name", " ", "$driver_last_Name"] },
            paidamount: 1
        }
       },

    {$group: {
        '_id': { driverName: '$driver_Name' },
        "TotalAmountOfBooking": {$sum: '$paidamount'}
    }}
])