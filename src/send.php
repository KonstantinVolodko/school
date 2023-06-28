<?php

if ($_POST) {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $email = ($_POST['mail']);
    $selectedOption = ($_POST['selectedOption']);
    $formName = ($_POST['formName']);

    if (trim($name) === '' || trim($phone) === '' || trim($email) === '' || trim($selectedOption) === '' || trim($formName) === '') {
        echo "Ошибка: Все поля формы должны быть заполнены";
        exit;
    }

    $HTTP_HOST = $_SERVER["HTTP_HOST"];
    $message = "Письмо об обратном звонке с сайта " . $HTTP_HOST . "\n";
    $message .= "-------------------------------------- \n\n";
    $message .= "Форма: " . substr(htmlspecialchars($formName), 0, 62) . "\n";
    $message .= "Имя: " . substr(htmlspecialchars($name), 0, 62) . "\n";
    $message .= "Телефон: " . substr(htmlspecialchars($phone), 0, 62) . "\n";
    $message .= "Email: " . substr(htmlspecialchars($email), 0, 62) . "\n";
    $message .= "Выбранная группа: " . substr(htmlspecialchars($selectedOption), 0, 62) . "\n";
    $message .= "-------------------------------------- \n\n";
    $message .= "Дата: " . date("d.m.Y h:i") . "\n";
    $message .= "IP: " . htmlspecialchars($_SERVER['REMOTE_ADDR']);
    $body = $message;

    if (mail("oyhepo@mailto.plus", "Письмо об обратном звонке с сайта " . $HTTP_HOST, $body, "From: info@infa.ru\r\n")) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "Ошибка при отправке сообщения";
    }
}
?>