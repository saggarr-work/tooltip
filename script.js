//this jquery code only used for button tooltips effect
$(function () {
    function isTouchDevice(){ //checks if the device is touchscreen or not
        return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    }
    if(isTouchDevice()===false) { //if device is not touchscreen then show the tooltip with those properties
        $('[data-toggle="tooltip"]').tooltip({
            html: true,
            Animation: true,
            delay: {"show": 500, "hide": 500},
            trigger: "hover",
            offset: [30, 0],
            flipVariations: true,
        });
    }
})