var Apply = (apply) => {
    // instantiate a headers object
    var myHeaders = new Headers();

    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({
        "apply": true
    });

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    contenturl = "https://7p76txd3xj.execute-api.us-east-2.amazonaws.com/dev/employees/" + apply

    fetch(contenturl, requestOptions)
};


var Accept = (accept) => {
    // instantiate a headers object
    var myHeaders = new Headers();

    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({
        "accepted": true
    });

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    contenturl = "https://7p76txd3xj.execute-api.us-east-2.amazonaws.com/dev/human_resource/" + accept

    fetch(contenturl, requestOptions)
};

var InsertHR = (apply) => {
    // instantiate a headers object
    var myHeaders = new Headers();

    // add content type header to object
    myHeaders.append("Content-Type", "application/json");

    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({
        "req_id": apply,
        "project_name": "Testing"
    });

    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // make API call with parameters and use promises to get response
    contenturl = "https://7p76txd3xj.execute-api.us-east-2.amazonaws.com/dev/human_resource"

    fetch(contenturl, requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
};

