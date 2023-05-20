//Query to find cars tht are not roadworthy
result = db.getCollection('Car').find({"description_status": {$ne : "roadworthy"}})