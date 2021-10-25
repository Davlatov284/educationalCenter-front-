let params = new URLSearchParams(location.search);
let id = params.get('id');

http.get("/api/teacher/", function(ajax){
    let tbody = document.getElementById("select")
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        tbody.innerHTML += `
            <option value="${element.id}">${element.name} ${element.surname}</option>
              `
    });
}, function (error) {
    console.log("xato");
})
http.get("/api/kurs/" + id, function(ajax){
    let kurs = JSON.parse(ajax);
    document.getElementById("name").value = kurs.name;
    document.getElementById("major").value = kurs.yunalishi;
    document.getElementById("level").value = kurs.level;
    document.getElementById("cost").value = kurs.cost;
    document.getElementById("room").value = kurs.room;
    document.getElementById("startTime").value = kurs.startTime;
    document.getElementById("endTime").value = kurs.endTime;
})
function edit(){
    let tbody = document.getElementById("select")
    let form = new FormData( document.forms["addKurs"]);
    
    
    let newPost = {
        "name" : form.get("name"),
        "yunalishi": form.get("major"),
        "level": form.get("level"),
        "cost": form.get("cost"),
        "room": form.get("room"),
        "teacher": {
            "id" : tbody.value
        },

        "startTime" : form.get('startTime'),
        "endTime": form.get("endTime")
    }

    let user = JSON.stringify(newPost)

    http.put("/api/kurs/"+ id, user, function(){
        console.log("keldi");
        if(confirm("malumotlar uzgartirildi orqaga qaytishni xoxlaysizmi ?")) history.back();
        
    }, function(){
        console.log("xato");
    })
}