//Finding  expensive payments/ bookings by sorting it with amount and payment_date 

db.Payments.aggregate([
	{ $sort : {amount  : -1, payment_date: -1} },
    { $limit: 10 }
]);