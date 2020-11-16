let phoneFields = document.querySelectorAll(".phoneInput");
let im = new Inputmask("+38 (099) 99-99-99");
im.mask(phoneFields);

new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Как Вас зовут?",
            minLength:"Минимальная длина 2 символа"
        },
        email: {
            required: "Как с Вами связаться?",
            email:"Это не email. Попробуйте еще раз"
        },
        phone: {required: "Укажите контактный номер телефона"},
        message:{required: "Расскажите, о чём хотите узнать"}
    },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "mail.php", true);

        let formData = new FormData(form);
        
        xhr.addEventListener("load", function () {
            if (xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        console.log("Form is send");
                        form.reset();
                        break;
                    case 404:
                        console.log("Oops! Smth went wrong :(");
                        break;
                    default:
                        console.log("Error");
                        break;
                }
            }
        });
        xhr.send(formData);
    },
  });

