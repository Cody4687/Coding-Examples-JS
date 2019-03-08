let responses = ['Yes', 'No', 'Not Likely', 'Very Likely', 'Unsure', 'It is certain'] //The responses.
function Ball() {
    let math = Math.floor(Math.random() * responses.length) //Calculating the response based on the number of responses in the array.
    return(responses[math]) //Returning the response.
}
/*Example
alert(Ball())
or
console.log(Ball())
*/
