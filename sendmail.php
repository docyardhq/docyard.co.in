<? php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (
        !empty($_POST['firstname'])
        && !empty($_POST['lastname'])
        && !empty($_POST['email'])
        && !empty($_POST['number'])
        && !empty($_POST['message'])
    ) {
        $name = $_POST["firstname"];
        $email = $_POST["email"];
        $number = $_POST["number"];
        $message = $_POST["message"];


        $to = "rohanchaudhary.bkbiet2022@gmail.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$number}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}
?>