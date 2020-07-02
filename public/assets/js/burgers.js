$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        const newBurger = {name: $("#burgerInput").val()};

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

    $(".devourButton").on("click", function(event) {
        event.preventDefault();
        const id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {devoured: true}
        }).then(function() {
            location.reload();
        });
    });
});