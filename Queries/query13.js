// Number of people paid with credit Cards


db.Bookings.aggregate([
    {$match: {
        paid: true
    }},
    {
        
        $lookup: {
           from: 'Payments',
           localField: '_id',
           foreignField: 'booking_id',
           as: 'Payments_Bookings'
        }
    },
    { $addFields: {
        "paymentMethod": "$Payments_Bookings.method",
       }},
       { $unwind : "$paymentMethod" },
      {
        $project: {
            paymentMethod: 1
        }
      },
      {
        $match: {
            'paymentMethod.credit_card': true
        }
      },
      {
        $count: "number_of_credit_Card_Payments"
      }
    
])





