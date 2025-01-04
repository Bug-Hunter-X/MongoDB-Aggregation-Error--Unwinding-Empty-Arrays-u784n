```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $lookup: {
      from: "anotherCollection",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments"
    }
  },
  {
    $unwind: "$relatedDocuments" //Error prone if no related documents exist
  },
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: "$relatedDocuments"
      }
    }
  }
])
```