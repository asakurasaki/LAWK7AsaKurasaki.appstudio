
let req = ""
let query = ""
let results = ""
let netID = "agk72546"
let pw = "Punahouio1"

customerAdd.onshow=function(){
  query = "SELECT * from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
   if (req.status == 200) { //transit trip worked.
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtNames2.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
          txtNames2.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        txtNames2.textContent = "Error code: " + req.status
}

btnAdd.onclick=function(){
    
    query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178');"
    // look at how the query is rendered by the code and use this form to test with database
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage.textContent = "You have successfully added the customer!"
        else
            lblMessage.textContent = "There was a problem with adding the customer to the database."
    } else   // transit error
        lblMessage.textContent = "Error: " + req.status
}

