// when enter button clicked
var input = document.getElementById("data");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("send").click();
    }
});

// when send button clicked
$("#send").on("click" , function () {
    $value = $("#data").val();

    // user message must not be an empty string
    if ($value != "") {

        // declaring message in the box
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>' + $value + '</p></div></div>';
        $(".form").append($msg);

        // set input field empty
        $("#data").val('');

        // ajax
        $.ajax({
            url: "./process/backProcess.php",
            type: "POST",

            // sending data
            data: {messageValue: $value},

            // response text
            success: function (result) {
                $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>' + result + '</p></div></div>';
                $(".form").append($reply);

                // scrolling down
                $(".form").scrollTop($(".form")[0].scrollHeight);
            }
        });
    }
});
