$(window).ready(function () {
  //displays the modal
  $('#onLoad').modal('show');
 //hides the other pages
  $(".navbar").hide()
  $(".contact-box").hide()
  $(".page-footer").hide()
  $(".portfolio-content").hide()
  $(".about-me").hide()

//closes the modal on submit and calls the firebase function
$(document).on("click", ".submit", function (event) {
  event.preventDefault();
  $(".sectionHolder").show()
  $(".home").show()
  $(".modal").modal('toggle')
   firebaseCall()
})

//if contact on home page or in nav bar is clicked it loads the contact
// page and hides everything else
$(".contact").click(function () {
  $(".foot").addClass("foot-border")
  $(".home").hide()
  $(".sectionHolder").hide()
  $(".portfolio-content").hide()
  $(".about-me").hide()
  $(".navbar").show()
  $(".contact-box").show()
  $(".page-footer").show()
})
//if portfolio on home page or in nav bar is clicked it loads the portfolio
// page and hides everything else
$(".portfolio").click(function () {
  $(".foot").removeClass("foot-border")
  $(".home").hide()
  $(".sectionHolder").hide()
  $(".contact-box").hide()
  $(".about-me").hide()
  $(".page-footer").show()
  $(".navbar").show()
  $(".contact-box").hide()
  $(".portfolio-content").show()
  //slide show using carousel
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    // Changes project every 5 seconds
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
  }
})
//if about on home page or in nav bar is clicked it loads the about
// page and hides everything else
$(".about").click(function () {
  $(".foot").addClass("foot-border")
  $(".home").hide()
  $(".sectionHolder").hide()
  $(".page-footer").show()
  $(".navbar").show()
  $(".portfolio-content").hide()
  $(".about-me").show()
  $(".contact-box").hide()
})
//if home in the nav bar is clicked it loads the home
// page and hides everything else
$(".home-button").click(function () {
  $(".home").show()
  $(".sectionHolder").show()
  $(".about-me").hide()
  $(".contact-box").hide()
  $(".navbar").hide()
  $(".page-footer").hide()

  $(".portfolio-content").hide()
})
////////////////////////////////////////////////////////
//establishes variables for firebase
let googleTotal = 0;
let linkedinTotal = 0;
let businessCardTotal = 0;
let wordOfMouthTotal = 0;
let otherTotal = 0

let total = 0

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCwiZRIqs-yYDihiOh1sLAmZUfSKFdQww0",
  authDomain: "professional-portfolio-fdb8f.firebaseapp.com",
  databaseURL: "https://professional-portfolio-fdb8f.firebaseio.com",
  projectId: "professional-portfolio-fdb8f",
  storageBucket: "professional-portfolio-fdb8f.appspot.com",
  messagingSenderId: "609142857604"
};


//pull click picks from firebase as totals
firebase.initializeApp(config);

var database = firebase.database();

if (total != null) {
  database.ref().on("value", function (snapshot) {
    googleTotal = snapshot.val().google
    linkedinTotal = snapshot.val().linkedin
    businessCardTotal = snapshot.val().card
    wordOfMouthTotal = snapshot.val().word
    otherTotal = snapshot.val().other
    total = snapshot.val().totalVisits


  })

}

var firebaseCall = function(){

  //update totals to reflect user choice based on what the user clicked
  if ($('#defaultGroupExample1').is(':checked')) {
    googleTotal++
    total++
  }
  if ($('#defaultGroupExample2').is(':checked')) {
    linkedInTotal++
    total++
  }
  if ($('#defaultGroupExample3').is(':checked')) {
    businessCardTotal++
    total++
  }
  if ($('#defaultGroupExample4').is(':checked')) {
    wordOfMouthTotal++
    total++
  }
  if ($('#defaultGroupExample5').is(':checked')) {
    otherTotal++
    total++
  }



  //sets new totals in firebase based on user choice
  database.ref().set({

    google: googleTotal,
    linkedin: linkedinTotal,
    card: businessCardTotal,
    word: wordOfMouthTotal,
    other: otherTotal,
    totalVisits: total,

  })
}

})