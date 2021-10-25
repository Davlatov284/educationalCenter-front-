function adding(){
    let form = document.forms["addTeacher"];
    let newUser = {}

    newUser.name = form["name"].value;
    newUser.surname = form["surname"].value;

    let user = JSON.stringify(newUser)

    http.post("/api/teacher/", user, function(response){
        console.log("keldi");
        if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) history.back();
    }, function(error){
        console.log("xato");
    })
}