for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // ^ yes, you really need to type all of that ^ 
        // // now, ‘prop’ is not inherited 
    }
}
