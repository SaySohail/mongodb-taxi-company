const { Timestamp } = require("mongodb")

bookingIds = db.Bookings.find({},{paid: 1}).toArray();





    db.Payments.insertMany([
        {
            "method":
                {
                    "cash":true,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 210,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[0]._id
        },
        {
            "method":
                {
                    "cash":true,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 110,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id":  bookingIds[1]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":true,
                    "debit_card":false
                },
            "amount": 210,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[2]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":true,
                    "debit_card":false
                },
            "amount": 2110,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[3]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":true,
                    "debit_card":false
                },
            "amount": 410,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[4]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":true,
                    "debit_card":false
                },
            "amount": 110,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[5]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 1410,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[6]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 2910,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[7]._id
        },
        {
            "method":
                {
                    "cash":true,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 2910,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[8]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 10,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[9]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 40,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[10]._id
        },
        {
            "method":
                {
                    "cash":false,
                    "credit_card":false,
                    "debit_card":false
                },
            "amount": 20,
            "payment_date": ISODate("2022-01-01T00:00:00"),
            "last_update": new Timestamp(),
            "booking_id": bookingIds[11]._id
        },

    ]);
