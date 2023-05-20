// Money Owed from unpaid rides
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
    { $addFields: {
        "unpaidamount": "$UnPaidBookings.amount",
       }},
       { $unwind : "$unpaidamount" },
      {
        $project: {
            unpaidamount: 1
        }
      },
      {
        $group: {
            _id: null, 
            sum: {$sum: "$unpaidamount"}
        }
      }
    
])





