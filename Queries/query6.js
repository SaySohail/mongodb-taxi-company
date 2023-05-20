const { Db } = require("mongodb");

// Find Number of Unpaid rides
db.Bookings.aggregate([
    {$match: {
        paid: false
    }},
    {
        
        $lookup: {
           from: 'Payments',
           localField: '_id',
           foreignField: 'booking_id',
           as: 'UnPaidBookings'
        }
    },
    {
        $count: "number_of_unpaid_rides"
      }
])