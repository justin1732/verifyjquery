console.log("API calling")
// $(document).getElementById('images1').hide();
// $(document).getElementById('images2').hide();

$(document).ready(function(){
    $("#hide").click(function(){
      $("#image1").hide();
    });
    $("#show").click(function(){
      $("#image1").show();
    });
  });

  
$(document).ready(function(){
    $("#hide2").click(function(){
      $("#image2").hide();
    });
    $("#show2").click(function(){
      $("#image2").show();
    });
  });
  (function (){
    var GoogleBooks = "https://www.googleapis.com/books/v1/volumes?q=bleach";
    $.getJSON( GoogleBooks, {
        kind: "any",
        id: "any",
        etag: "any"
    })
    .done(function(data){
        $.each(data.items, function (i, item, j){
            j = item.volumeInfo.title;    
            $("<div>").text("Title of Book: " + item.volumeInfo.title).appendTo("#books")
                window.localStorage.setItem('book', j, item.volumeInfo.title);
            if (i === 3){
                return false
            }
        });
    });
  
})();
(function (){
    var Anime= "https://api.jikan.moe/v4/anime?q=bleach";
    $.getJSON( Anime, {
        mal_id: "any",
        url: "any",
        type: "any"
    })
    .done(function(data){
        $.each(data.data, function (i, item, k){
                k = item.title;
                $("<div>").text("Title of Anime: " + item.title).appendTo("#anime")
                window.localStorage.setItem('anime', k, item.title);
            if (i === 3){
                return false
            
            }
        });
    });
  
})();

console.log(window.localStorage)

var anime = window.localStorage.getItem('anime');


var book = window.localStorage.getItem('book');
 

console.log("Book: ", book);
console.log("Anime: ", anime)

$(document).ready(function(){
    $("button").click(function(){
if (book === anime){
    $("#images1").show()
    $("#images2").hide()
}
else {
    $("#images1").hide()
    $("#images2").show()
}
    });
})

$(document).ready(function(){
    $("input").click(function(){
        window.localStorage.clear()
        $("#images2").hide()
        $("#images1").hide()
    })

})