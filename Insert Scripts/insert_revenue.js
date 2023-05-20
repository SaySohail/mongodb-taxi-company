const { Db } = require("mongodb");

driver_ronlad = db.Drivers.findOne({
    "name.first_name": "Ronald",
    "name.last_name": "Weasley"
});
driver_hermoine = db.Drivers.findOne({
    "name.first_name": "Hermione",
    "name.last_name": "Granger"
})
driver_bradely= db.Drivers.findOne({
    "name.first_name": "Bradley",
    "name.last_name": "Greer"
});


db.Revenue.insertMany([
    {
        "driver_id": driver_ronlad._id,
        "driver_wage": 1314,
        "company_wage": 876
    },
    {
        "driver_id": driver_hermoine._id,
        "driver_wage": 504,
        "company_wage": 336
    },
    {
        "driver_id": driver_bradely._id,
        "driver_wage": 1392,
        "company_wage": 928
    },

])