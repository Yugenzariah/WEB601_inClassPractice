/* Main parts of AJAX 
part 1: Asynchronous - 
part 2: JavaScript - 
part 3: XML - 
part 4: XHR (XMLHttpRequest) Object - 

How does it work?
// end-user action(function)
*/

// This function will be called when we click on the upload button.
function uploadButton() {
    // Create a new XHR object.
    let xhr = XMLHttpRequest();

    // Configure: GET-request for the URL.

    xhr('GET','https://jsonplaceholder.typicode.com/todos/1',true)

    //Setup a function that is called when the request is completed.
    xhr.onload = function() {
        if(this.status >= 200 && this.status < 300) {
            // If successful then parse the JSON response.
            let response = JSON.parse(this.responseText);

            // Create a string to hold our res html.
            let html = '';
            html += '<h1>' + response.title + '</h1>';
            html += '<p>' + response.body + '</p>';

            // Insert the HTML into the div 
            document.getElementById('post').innerHTML = html;
        } else {
            // If it returned an error.
            console.error('The request failed');
        }
    }
    // Send the request.
    xhr.send();
}

// On click button adding a click event listener to it.
document.getElementById('uploadButton').addEventListener('click', uploadButton);