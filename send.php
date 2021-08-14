<?php
    ini_set('display_errors','On');
    error_reporting('E_ALL');

    $fio = $_POST['fio'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $fio = htmlspecialchars($fio);
    $email = htmlspecialchars($email);
    $number = htmlspecialchars($number);
    $comment = htmlspecialchars($comment);

    $fio = urldecode($fio);
    $email = urldecode($email);
    $number = urldecode($number);
    $comment = urldecode($comment);

    $fio = trim($fio);
    $email = trim($email);
    $number = trim($number);
    $comment = trim($comment);

    if (mail("nikam2341@gmail.com", "Заявка с сайта", "ФИО: " . $fio."\r\n" . "Номер: ".$number."\r\n". "Вопрос или пожелание: ".$comment."\r\n"."E-mail: ".$email ,"From: info@spbrokers.uz \r\n"))
    {   echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }
?>