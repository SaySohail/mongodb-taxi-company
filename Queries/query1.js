// Query to return all trips from a certain driver
driver_bradley = db.Drivers.findOne({name: {first_name:"Bradley", last_name:"Greer" }});
result = db.getCollection('Bookings').find({"driver_id": driver_bradley._id});