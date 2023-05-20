var pageNumber = 1;
var limitPerPage = 2;
db.Bookings.aggregate([
    {$skip: limitPerPage * (pageNumber - 1)},
    {$limit: limitPerPage}
])