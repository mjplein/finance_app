// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$(".add__btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newTrans = {
      type: $(".add__type").val().trim(),
      description: $(".add__description").val().trim(),
      amount: $(".add__value").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/expenses", newTrans)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $(".add__type").val("");
    $(".add__description").val("");
    $(".add__value").val("");
  });
  