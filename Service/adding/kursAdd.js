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

function add(){
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

    http.post("/api/kurs/", user, function(response){
        console.log("keldi");
        if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) history.back();
        
    }, function(error){
        console.log("xato");
    })
}