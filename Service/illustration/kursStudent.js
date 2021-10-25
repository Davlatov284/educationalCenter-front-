let tbody = document.getElementById("tbody")


http.get("/api/malumot/", function (ajax) {
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        if(element.status == true){
        tbody.innerHTML += `
        <tr>
              
              <td><a href="#">${element.student.name}</a></td>
              <td>${element.kurs.name}</td>
              <td>${element.kelganVaqt}</td>
              <td ><a name="" id="" class="btn btn-primary" role="button" style="border-radius: 40px;" href="./../EditHTML/KursStudentEdit/index.html?id=${element.id}">malumotni uzgartirish</a>
              <button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button>
              <button name="" id="" class="btn btn-warning" role="button" style="border-radius: 40px;" onclick = "ketgan(${element.id})">ketgan</button></td>
              
            </tr>
        `}else{
            tbody.innerHTML += `
            <tr>
              
              <td><a href="#">${element.student.name}</a></td>
              <td>${element.kurs.name}</td>
              <td>${element.kelganVaqt}</td>
              <td><button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button></td>
            </tr>
            `
        }
    });
}, function (error) {
    console.log("xato");
})
function ketgan(id){
    http.get("/api/malumot/" + id, function(ajax){
        let malumot = JSON.parse(ajax);
        
        let newPost = {
            "student": {
                "id" : malumot.student.id
            },
            "kurs": {
                "id" : malumot.kurs.id
            },
            "kelganVaqt": malumot.kelganVaqt,
            "status": false,
        }
    
        http.put("/api/malumot/" + id, JSON.stringify(newPost), function () {
            console.log("qushildi");
            if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) window.location.reload()
    
        });
    })
}

function ochirish(id) {
    http.delete("/api/malumot/" + id, function () {
        console.log("uchirildi");
        window.location.reload()
    }, function () {
        console.log("xato");
        alert("Malumot uchirishda xato bu malumotni boshqa sahifada foydalanilmoqda")
    })
    
}
function deleteAll() {
    if (window.confirm("siz rostan ham barcha malumotlarni uchirishni hohlaysizmi ?"))
        http.delete("/api/malumot/", function () {
            window.location.reload()
        }, function () {
            console.log("xato");
        })
        
}