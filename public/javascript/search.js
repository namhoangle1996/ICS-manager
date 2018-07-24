$(document).ready(function(){
    
    $("#searchInput").keyup(function () {
    // Split the current value of the filter textbox
    var data = this.value.split(" ");
    // Get the table rows
    var rows = $("#fbody").find("tr");
    if (this.value == "") {
        rows.show();
        return;
    }
    
    // Hide all the rows initially
    rows.hide();

    // Filter the rows; check each term in data
    rows.filter(function (i, v) {
        for (var d = 0; d < data.length; ++d) {
            if ($(this).is(":contains('" + data[d] + "')")) {
                return true;
            }
        }
        return false;
    })
    // Show the rows that match.
    .show();
}).focus(function () { 
    this.value = "";
    $(this).css({
        "color": "snow"
    });
    $(this).unbind('focus');
}).css({
    "color": "#C0C0C0"
});

// make contains case insensitive globally
// (if you prefer, create a new Contains or containsCI function)
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
$(".account-tab").click(function(){
    $(".hide-account-tab").toggle(390);
});


})

    $(document).ready(function(){
            $(".ul").click(function(){
                console.log('OK');
                $(this).children('.li').toggle()

            });
        });
        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('txt').innerHTML =
            h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);






        }

        function checkTime(i) {
           if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
           return i;
       }

