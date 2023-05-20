// Total Comapny Revenue
db.Revenue.aggregate([
    {
        $group: {
            '_id': null,
            'totalCompanyRevenue': { $sum: '$company_wage' },
        }
    }
]);