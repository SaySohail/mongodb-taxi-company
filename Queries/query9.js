//Find a driver and operator for a booking
// For Example find booking made my Tom Riddle on 11/05/2022
var selectedBooking = db.Bookings.findOne({
    'travel_date': ISODate("2022-05-11T12:10:00.000Z"),
    'customer_info.name.first_name': 'Tom',
    'customer_info.name.last_name': 'Riddle'
 });


 db.Operator.find({
    '_id': selectedBooking.operator_id,
 });
 db.Drivers.find({
    '_id': selectedBooking.driver_id,
 });