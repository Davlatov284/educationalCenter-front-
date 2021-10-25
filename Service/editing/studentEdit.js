let params = new URLSearchParams(location.search);
let id = params.get('id');

http.get("/api/student/"+id, function(ajax){
    let malumot = JSON.parse(ajax);
    document.getElementById("name").value = malumot.name;
    document.getElementById("surname").value = malumot.surname;
    document.getElementById("fatherName").value = malumot.fatherName;
    document.getElementById("birthday").value = malumot.birthday;
    document.getElementById("telNumber").value = malumot.telNomer;
})

function edit(){
    let form = document.forms["editStudent"];
    let newUser = {}

    newUser.name = form["name"].value;
    newUser.surname = form["surname"].value;
    newUser.fatherName = form["fatherName"].value;
    newUser.birthday = form["birthday"].value;
    newUser.telNomer = form["telNumber"].value;

    let user = JSON.stringify(newUser)

    http.put("/api/student/" + id, user, function(){
        console.log("keldi");
        if(confirm("malumotlar o'zgartirildi orqaga qaytishni xoxlaysizmi")) history.back();
    }, function(){
        console.log("xato");
    })
}