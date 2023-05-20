const { Db } = require("mongodb");

// drivers with fixed and drivers with percentage
db.Drivers.aggregate([
    {
        $match: {
            "employment.type.percentage": true
        },
       
    },
    {
        $project: {
           name: 1,
           phone: 1,
           employment: 1 
        }
    }
]).pretty()

db.Drivers.aggregate([
    {
        $match: {
            "employment.type.fixed": true
        }
    },
    {
        $project: {
           name: 1,
           phone: 1,
           employment: 1 
        }
    }
]).pretty()