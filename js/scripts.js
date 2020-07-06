
$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
$('#loginButton').on("click", function () {
    $('#loginModal').modal('show');
});
$('#loginModal').on('shown.bs.modal', function () {

    $('#myInput1').click(function () {
        $('#loginModal').modal('hide');
    });
    $('#myInput2').click(function () {
        $('#loginModal').modal('hide');
    });

});
$('#reserveButton').on("click", function () {
    $('#reserveModal').modal('show');
});
$('#reserveModal').on('shown.bs.modal', function () {
    $('#cancel1').click(function () {
        $('#reserveModal').modal('hide');
    });
    $('#cancel2').click(function () {
        $('#reserveModal').modal('hide');
    });

});
