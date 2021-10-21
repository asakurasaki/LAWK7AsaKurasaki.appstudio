

let req = ""
let query = ""
let results = ""
let netID = "agk72546"
let pw = "Punahouio1"

customerDelete.onshow=function(){
  query = "SELECT * from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
   if (req.status == 200) { //transit trip worked.
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           txtNames.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
          txtNames.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        txtNames.textContent = "Error code: " + req.status
}

btnDel.onclick=function(){
  let deleteCustomer = inptNames.value
  let found = false
    for (i = 0; i <= results.length - 1; i++) {
       console.log(`in loop, results[i][1] is ${results[i][1]}`)
       if (deleteCustomer == results[i][1])
            found = true
    }
    console.log(`found is ${found}`)
    if (found == false) 
       txtNames.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + deleteCustomer + '"'
      alert(query)
      
      // send Delete query - replace my netID with yours
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                txtNames.textContent = `You have successfully deleted the customer named ${deleteCustomer}.`
            else
                txtNames.textContent = `There was a problem deleting ${deleteCustomer} from the database.`
      else
        // transit error
        txtNames.textContent = `Error: ${req.status}`
      } // found is true
}
