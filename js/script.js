$(document).ready(function() {
    $("#bookingButton").click(function() {
        window.location.href = "bookings.html";
    });

    var selectedMonth = new Date().getMonth();
    var selectedYear = new Date().getFullYear();
    var selectedDay = "";
    var selectedTime = "";

    $(".timeButton").click(function() {
        selectedTime = $(this).data("time");
        $("#timeSelected").text("Вы выбрали время: " + selectedTime);
    });

    $("#datepicker").datepicker({
        minDate: 0,
        dateFormat: 'yy-mm-dd',
        defaultDate: new Date(),
        onSelect: function(dateText) {
            var selectedDate = new Date(dateText);
            selectedDay = selectedDate.getDate();
            var weekDays = new Array('Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб');
            var dayOfWeek = weekDays[selectedDate.getDay()];
            

            $("#timeSelected").text("Вы выбрали дату: " + selectedDay + "." + (selectedMonth + 1) + "." + selectedYear + " (" + dayOfWeek + ")");
            $(".timeButtons").html(""); // Очистка предыдущего выбора времени
            
            for (let i = 11; i < 22; i++) { // Генерация кнопок времени (для примера 3 кнопки)
                var newTimeButton = $("<button>").addClass("timeButton").text((i + 1) * 1 + ":00").data("time", (i + 1) * 3 + ":00");
                $(".timeButtons").append(newTimeButton);
                    
            }
        }
    });
});

