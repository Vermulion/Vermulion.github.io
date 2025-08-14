BX.addCustomEvent('onAjaxSuccess', function(){


    $('.custom-tabs button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        $(e.target).find('input').prop('checked', true).change();
    });

    $('.slot-radio-item input').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parents('.slot-radio-items').find('.slot-radio-item').removeClass('open');
            $(this).parents('.slot-radio-item').addClass('open');
        }
    });

    if (jQuery.fn.inputmask) {
        $('.phone-mask input').inputmask({ "mask": "+7 (999) 999-9999", showMaskOnHover: false, });
        $('input.phone-mask').inputmask({ "mask": "+7 (999) 999-9999", showMaskOnHover: false, });
    }

    if (jQuery.fn.selectpicker) {
        $("select.selectpicker").selectpicker();
    }

    if (AirDatepicker) {
        const datepickElements = document.querySelectorAll('.datepick');

        datepickElements.forEach(element => {

            if (!element.hasAttribute("readonly")) {

                new AirDatepicker(element, {
                    autoClose: true,
                });
            }
        });
    }

    if (jQuery.fn.inputmask) {
        // $('[name="REGISTER[PERSONAL_MOBILE]"]').inputmask({ "mask": "+", showMaskOnHover: false, });
        // $('[name="REGISTER[UF_CONTACT_PHONE]"]').inputmask({ "mask": "+", showMaskOnHover: false, });
        
    }

    /*
    if (jQuery.fn.inputmask) {
        $('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
    }

     */

    /*file name*/
    $('.input-item__file input').change(function (event) {
        files = event.target.files;
        $(this).parents('.input-item__file').find('.file-input__text').text($(this).val().replace(/.+[\\\/]/, ""));
    });
    /*end file name*/

});
