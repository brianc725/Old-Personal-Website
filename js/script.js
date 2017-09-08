window.onload = function () {
    var date = new Date();
    var hour = date.getHours(); //gets hour in 24 hour format 
    var greeting = document.getElementById("welcome");
    if (hour >= 18) { //6pm to midnight
        greeting.innerHTML = "Good Evening, I'm Brian!";
    } else if (hour >= 12) { //12pm to 6pm
        greeting.innerHTML = "Good Afternoon, I'm Brian!";
    } else if (hour >= 0) { //midnight to 12pm
        greeting.innerHTML = "Good Morning, I'm Brian!";
    } else { //if the date can't be accessed for whatever reason
        greeting.innerHTML = "Hello, I'm Brian!";
    }
}

/*the code below for smooth scrolling was implemented using w3schools.com as a reference */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#nav-list a").on('click', function(event) {
    if (this.hash !== "") {
      /*stop default event from clicking*/
      event.preventDefault();
      var hash = this.hash;

      /*jquery animate with time set to 1 second */
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        /*save back the hash*/
        window.location.hash = hash;
      });
    } // End if
  }); /*nav-list a scrolling*/

    /*scrolling for when name is clicked on the top*/
      $("#home-up a").on('click', function(event) {
    if (this.hash !== "") {
      /*stop default event from clicking*/
      event.preventDefault();
      var hash = this.hash;

      /*jquery animate with time set to 1 second */
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        /*save back the hash*/
        window.location.hash = hash;
      });
    } // End if
  }); /* home-up a scrolling*/
    
    /*close navbar when clicked */
     $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  $("#navbarToggle").click(function (event) {
    $(event.target).focus(); //forcing focus when click
  });
    
});
