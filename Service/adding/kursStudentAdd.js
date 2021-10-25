


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

function add(){
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
    
        http.post("/api/malumot/", JSON.stringify(newPost), function () {
            console.log("qushildi");
            if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) location.href= "./../../dashboard/basic-table.html"
    
        });
    
}