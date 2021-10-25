function add(){
    let form = document.forms["addStudent"];
    let newUser = {}

    newUser.name = form["name"].value;
    newUser.surname = form["surname"].value;
    newUser.fatherName = form["fatherName"].value;
    newUser.birthday = form["birthday"].value;
    newUser.telNomer = form["telNumber"].value;

    let user = JSON.stringify(newUser)

    http.post("/api/student/", user, function(response){
        console.log("keldi");
        if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) history.back();
    }, function(error){
        console.log("xato");
    })
}