let params = new URLSearchParams(location.search);
let id = params.get('id');

http.get("/api/teacher/"+id, function(ajax){
    let malumot = JSON.parse(ajax);
    document.getElementById("name").value = malumot.name;
    document.getElementById("surname").value = malumot.surname;
})

function edit(){
    let form = document.forms["editTeacher"];
    let newUser = {}

    newUser.name = form["name"].value;
    newUser.surname = form["surname"].value;

    let user = JSON.stringify(newUser)

    http.put("/api/teacher/" + id, user, function(){
        console.log("keldi");
        if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) history.back();
    }, function(){
        console.log("xato");
    })
}