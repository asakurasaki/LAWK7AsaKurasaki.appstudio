
let req = ""
let query = ""
let results = ""
let netID = "agk72546"
let pw = "Punahouio1"

customerUpdate.onshow=function(){
  query = "SELECT * from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
   if (req.status == 200) { //transit trip worked.
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtNames3.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
          txtNames3.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        txtNames3.textContent = "Error code: " + req.status
}

btnChange.onclick=function(){
    let newName = inptNew.value
    let oldName = inptOld.value
            
    query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the update succeeded
            lblMessage2.textContent = "You have successfully updated the customer!"
            // reset controls to blank
            inptOld.value = ""
            inptNew.value = ""
        } else
            lblMessage2.textContent = "There was a problem with updating the customer in the database."
    } else 
        // transit error
       lblMessage2.textContent = "Error: " + req.status
}
