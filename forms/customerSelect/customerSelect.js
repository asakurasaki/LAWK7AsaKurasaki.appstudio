
let req = ""
let query = ""
let results = ""
let netID = "agk72546"
let pw = "Punahouio1"

customerSelect.onshow=function(){
  query = "SELECT * from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
   if (req.status == 200) { //transit trip worked.
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtArea1.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtArea1.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        txtArea1.textContent = "Error code: " + req.status
}


  
  
  
  
  

