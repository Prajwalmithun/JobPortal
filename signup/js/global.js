(function ($) {
    'use strict';

    /*[ File Input Config ]
        ===========================================================*/

    try {

        var file_input_container = $('.js-input-file');

        if (file_input_container[0]) {

            file_input_container.each(function () {

                var that = $(this);

                var fileInput = that.find(".input-file");
                var info = that.find(".input-file__info");

                fileInput.on("change", function () {

                    var fileName;
                    fileName = $(this).val();

                    if (fileName.substring(3,11) == 'fakepath') {
                        fileName = fileName.substring(12);
                    }

                    if(fileName == "") {
                        info.text("No file chosen");
                    } else {
                        info.text(fileName);
                    }

                })

            });

        }



    }
    catch (e) {
        console.log(e);
    }

})(jQuery);

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

//password.onchange = validatePassword;
//confirm_password.onkeyup = validatePassword;
