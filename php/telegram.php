<?php

	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$question = $_POST['question'];
	$promo = $_POST['promo'];
	$token = "1099829941:AAFicYD6VNaL0udNirT5wY3CSorp-aIMa_M";
	$chat_id = "-469307070";
	$arr = array(
		'Имя пользователя: ' => $name,
		'Телефон: ' => $tel,
		'Вопрос: ' => $question,
		'Промокод: ' => $promo
	);

	foreach( $arr as $key => $value ) {
		$txt .= "<b>".$key."</b> ".$value."%0A";
	};

	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

	if ($sendToTelegram) {
		header('Location: /');
	}
	else {
		echo "Error";
	}
?>