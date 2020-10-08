// $(document).ready(function () {
//   $("#search-btn").on("click", function () {
//     var searchText = $(this).attr("data-animal");
//     var queryURL =
//       "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=CBb7LVGrPEhaJfWgaRLRbKLVEAoJpGin";

//     $.ajax({
//       url: queryURL,
//       method: "GET",
//     }).then(function (response) {
//       console.log(response);
//     });
//   });

// });

$(document).ready(function () {
  $("#search-btn").click(function () {
    console.log("Submit button clicked");
    var searchVar = $("#search").val();
    var searchUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchVar +
      "&api-key=CBb7LVGrPEhaJfWgaRLRbKLVEAoJpGin";
    console.log(searchUrl);
    $.ajax({
      method: "GET",
      url: searchUrl,
      //   dataType: "jsonp",
      success: function (data) {
        console.log(data);
      },
    });
  });
});
