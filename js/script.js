$(document).ready(function() {
    $("#bookingButton").click(function() {
        window.location.href = "bookings.html";
    });

    $(".timeButton").click(function() {
        var selectedTime = $(this).data("time");
        $("#timeSelected").text("Вы выбрали время: " + selectedTime);

        $("#datepicker").datepicker({
            minDate: 0,
            dateFormat: 'yy-mm-dd',
            defaultDate: new Date(),
            onSelect: function(dateText) {
                alert("Вы выбрали дату: " + dateText + " и время: " + selectedTime);
            }
        });
    });
});
