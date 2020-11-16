<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name      = filter_var($_POST["user-name"], FILTER_SANITIZE_STRING);
	$phone      = filter_var($_POST["user-phone"], FILTER_SANITIZE_STRING);
	$email      = filter_var($_POST["user-email"], FILTER_SANITIZE_EMAIL);
	$message      = filter_var($_POST["user-message"], FILTER_SANITIZE_STRING);
	$errors;
 
    if (empty($name)) {
			$errors .= "Заполните поле Имя";
    }  else {
        $user_name = $name;
    }
    if (empty($phone)) {
			$errors .= "Заполните поле Телефон";
    } else {
        $user_phone = $phone;
    }
    if (empty($email)) {
			$errors .= "Заполните поле Почта";
    } else {
            $user_email = $email;
    }
    if (empty($message)) {
			$errors .= "Заполните поле Сообщение";
    } else {
        $user_message = $message;
    }


	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "ren.kol.t@gmail.com";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Имя пользователя: " . $name . "\n";
	$mailBody .= "Почта пользователя: " . $email . "\n";
	$mailBody .= "Контактный номер пользователя: " . $phone . "\n";
	$mailBody .= "Сообщение пользователя: " . $message . "\n";
	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'JS. ДЗ номер 4', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>