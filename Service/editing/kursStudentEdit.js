let params = new URLSearchParams(location.search);
let id = params.get('id');


http.get("/api/student/", function(ajax){
    let tbody = document.getElementById("selectBody")
    
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        tbody.innerHTML += `
        <option value = "${element.id}">${element.name} ${element.surname}</option>
        `
    });
}, function (error) {
    console.log("xato");
})
http.get("/api/kurs/", function(ajax){
    let selectbody = document.getElementById("select")
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        selectbody.innerHTML += `
        <option value = "${element.id}">${element.yunalishi}</option>
        `
    });
}, function (error) {
    console.log("xato");
})
http.get("/api/malumot/"+id, function(ajax){
    let malumot = JSON.parse(ajax);
    document.getElementById("kelganVaqt").value = malumot.kelganVaqt;
})

function edit(){
    let tbody = document.getElementById("selectBody")
    let selectbody = document.getElementById("select")    
    
    
    let form = new FormData( document.forms["addKursStudent"]);

        let newPost = {
            "student": {
                "id" : tbody.value
            },
            "kurs": {
                "id" : selectbody.value
            },
            "kelganVaqt": form.get('kelganVaqt'),
            "status": true,
        }
    
        http.put("/api/malumot/" + id, JSON.stringify(newPost), function () {
            console.log("qushildi");
            if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) location.href= "./../../dashboard/basic-table.html"
    
        });
    
}