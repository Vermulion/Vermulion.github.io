$(function () {
	var ajaxInitialize = (function () {
		if (jQuery.fn.selectpicker) {
			$("select.selectpicker").selectpicker();
		}

		if (jQuery.fn.inputmask) {
			$('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});

			// $('[name="REGISTER[PERSONAL_MOBILE]"]').inputmask({ "mask": "+", showMaskOnHover: false, });
			//$('[name="REGISTER[UF_CONTACT_PHONE]"]').inputmask({ "mask": "+", showMaskOnHover: false, });
		}
	});

	$(document).ajaxComplete(ajaxInitialize);

	if (jQuery.fn.selectpicker) {
		$("select.selectpicker").selectpicker();
	}

	if (jQuery.fn.inputmask) {
		$('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});

		// $('[name="REGISTER[PERSONAL_MOBILE]"]').inputmask({ "mask": "+", showMaskOnHover: false, });
        //$('[name="REGISTER[UF_CONTACT_PHONE]"]').inputmask({ "mask": "+", showMaskOnHover: false, });


	}

	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});

	/*oform-input valid*/
	$(document).on('keyup', '.input-item', function () {
		if ($(this).find('input').length > 0) {
			if ($(this).find('input').val().length === 0) {
				$(this).removeClass('valid');
			} else {
				$(this).addClass('valid');
			}
		}
		if ($(this).find('textarea').length > 0) {
			if ($(this).find('textarea').val().length === 0) {
				$(this).removeClass('valid');
			} else {
				$(this).addClass('valid');
			}
		}
	});
	/*end oform-input valid*/

	/*file name*/
	$('.input-item__file input').change(function (event) {
		files = event.target.files;
		$(this).parents('.input-item__file').find('.file-input__text').text($(this).val().replace(/.+[\\\/]/, ""));
	});
	/*end file name*/

	if ($('[data-fancybox]').length > 0) {
		$('[data-fancybox]').fancybox({
			loop: true,
			thumbs: {
				autoStart: true
			}
		});
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

	$('.header-burger__btn').on('click', function () {
		$(this).parents('.header-burger').toggleClass('open');
		$('body').toggleClass('burger-open');
	});

	$('.custom-tabs button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		$(e.target).find('input').prop('checked', true).change();
	});

	$('.slot-radio-item input').on('change', function () {
		if ($(this).is(':checked')) {
			$(this).parents('.slot-radio-items').find('.slot-radio-item').removeClass('open');
			$(this).parents('.slot-radio-item').addClass('open');
		}
	});


});

document.addEventListener("DOMContentLoaded", function () {
	if (typeof yall === "function") {
		yall({
			observeChanges: true
		});
	}
});