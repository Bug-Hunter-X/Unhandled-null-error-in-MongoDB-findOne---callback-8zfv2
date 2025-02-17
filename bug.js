```javascript
const query = { field: value };

db.collection('myCollection').findOne(query, (err, doc) => {
  if (err) {
    console.error('Error fetching document:', err);
  }
  if (!doc) {
    // This is where the error is likely to occur.
    // If the document does not exist and you try to access a property of doc
    // it will cause an error
    console.log(doc.someField); 
  } else {
    console.log('Document:', doc);
  }
});
```