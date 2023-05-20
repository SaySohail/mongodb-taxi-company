// Query to get list of available drivers
db.Drivers.find({ 'shift.shift_start_time': { $lte: '16:15' }, 'shift.shift_end_time': { $gte: '09:00' } });


//Driver available now
db.Drivers.find({
	'shift.shift_start_time': {$lte: new Date().getHours() + ':' + new Date().getMinutes()}, 
	'shift.shift_end_time': {$gte: new Date().getHours() + ':' + new Date().getMinutes()}
});

