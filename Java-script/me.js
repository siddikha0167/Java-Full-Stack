// Code for page1.html
let form = document.getElementById("details");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        localStorage.setItem("name",
            document.getElementById("name").value);

        localStorage.setItem("mail",
            document.getElementById("mail").value);

        localStorage.setItem("phone",
            document.getElementById("phone").value);

        localStorage.setItem("age",
            document.getElementById("age").value);

        localStorage.setItem("gender",
            document.getElementById("gender").value);

        localStorage.setItem("address",
            document.getElementById("address").value);

        let image = document.getElementById("image").files[0];

        if (image) {
            let reader = new FileReader();

            reader.onload = function(e) {
                localStorage.setItem("photo", e.target.result);

                window.location.href = "licence.html";
            };

            reader.readAsDataURL(image);
        } else {
            window.location.href = "licence.html";
        }
    });
}


// Code for licence.html
if (document.getElementById("p1")) {

    document.getElementById("p1").innerText =
        "Name: " + localStorage.getItem("name");

    document.getElementById("p2").innerText =
        "Email: " + localStorage.getItem("mail");

    document.getElementById("p3").innerText =
        "Phone: " + localStorage.getItem("phone");

    document.getElementById("p4").innerText =
        "Age: " + localStorage.getItem("age");

    document.getElementById("p5").innerText =
        "Gender: " + localStorage.getItem("gender");

    document.getElementById("p6").innerText =
        "Address: " + localStorage.getItem("address");

    document.getElementById("dp").src =
        localStorage.getItem("photo");
}