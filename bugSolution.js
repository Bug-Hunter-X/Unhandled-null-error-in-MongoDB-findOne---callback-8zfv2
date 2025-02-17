```javascript
const query = { field: value };

db.collection('myCollection').findOne(query, (err, doc) => {
  if (err) {
    console.error('Error fetching document:', err);
  }
  if (!doc) {
    console.log('No document found.'); // Handle the case where no document matches
  } else {
    console.log('Document:', doc.someField); // Access properties only if doc is not null
  }
});
```