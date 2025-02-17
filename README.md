# Unhandled null error in MongoDB findOne() callback

This repository demonstrates a common error when using MongoDB's `findOne()` method: not handling the case where no document matches the query.  The provided code attempts to access a property of the returned document (`doc`) without checking if `doc` is null. If no matching document is found, `findOne()` returns null, leading to a runtime error.

## Solution

The solution involves adding a check to see if `doc` is null before attempting to access its properties.  The corrected code includes this check to prevent the error.