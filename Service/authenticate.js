function login() {
    let form = document.forms['loginForm'];
    let check = {}

    check.username = form["username"].value;
    check.password = form["password"].value;

    let user = JSON.stringify(check)

    http.post("/api/auth", user, function (response) {
        console.log("keldi");
        console.log(response);

        let res = JSON.parse(response);
        localStorage.setItem('token', res.token);
        location.href = "./../dashboard/dashboard.html";

    }, function (error) {
        console.log("xato");
    })
}
function register() {
    let form = document.forms['registerForm'];
    let check = {}


    check.username = form["username"].value;
    check.password = form["password"].value;
    check.name = form["name"].value;
    check.surname = form["surname"].value;
    check.email = form["email"].value;


    if (localStorage.getItem("token")) {
        localStorage.removeItem("token")
    }
    let checkbox = document.getElementById("checkbox")

    if (form["password"].value == form["comfirm_password"].value && checkbox.checked == true) {
        http.post("/api/register", JSON.stringify(check), function (responce) {
            document.getElementById("span").innerHTML = `
                <div class="alert alert-success">
                    <strong>Success!</strong> Yangi akkaunt yaratildi.
                </div>`
        }, function (error) {
            console.log("xato");
            console.log(error);
        })
    }else{
        document.getElementById("span").innerHTML = `
        <div class="alert alert-danger">
            <strong>Wrong!</strong> parolni tasdiqlashda xatolik yoki oferta shartlariga rozi bo'lish shart
        </div>`
    }
}
