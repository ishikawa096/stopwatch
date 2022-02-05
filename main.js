/* global $ */
$(document).ready(function(){
    let numberA,numberB,numberC,numberD;
    let reset_count = function(){
        numberA = 0;
        numberB = 0;
        numberC = 0;
        numberD = 0;
        $(".target_numberA").text(numberA);
        $(".target_numberB").text(numberB);
        $(".target_numberC").text(numberC);
        $(".target_numberD").text(numberD);
        $(".button_start").prop('disabled',false);
        $(".button_stop,.button_reset").prop('disabled',true);
    };
    reset_count();
    $(".button_start").click(function() {
        $(this).prop('disabled',true);
        $(".button_stop,.button_reset").prop('disabled',false);
        const countUp = () => {
            console.log(numberD++);
            $(".target_numberD").text(numberD);
            if(numberD >= 9){
                numberD = 0;
                numberC += 1;
                $(".target_numberC").text(numberC);
                $(".target_numberD").text(numberD);
            }
            if(numberC >= 60){
                numberC = 0;
                numberB += 1;
                $(".target_numberB").text(numberB);
                $(".target_numberC").text(numberC);
            }
            if(numberB >= 60){
                numberB = 0;
                numberA += 1;
                $(".target_numberA").text(numberA);
                $(".target_numberB").text(numberB);
            }
            if(numberA >= 99){
                clearInterval(timer);
            }
        };
        let timer = setInterval(countUp, 100);
        $(".button_stop").click(function() {
            clearInterval(timer);
            $(".button_start,.button_reset").prop('disabled',false);
            $(".button_stop").prop('disabled',true);
        });
        $(".button_reset").click(function() {
            clearInterval(timer);
            reset_count();
        });
    });
});