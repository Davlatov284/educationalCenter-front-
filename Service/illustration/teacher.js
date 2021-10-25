let tbody = document.getElementById("tbody")


http.get("/api/teacher/", function(ajax){
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        tbody.innerHTML += `
        <tr scope="row">
              <td>${element.name}</td>
              <td>
                ${element.surname}
              </td>
              <td><a name="" id="" class="btn btn-primary" role="button" href="./../EditHTML/TeacherEdit/index.html?id=${element.id}" style="border-radius: 40px;">malumotni uzgartirish</a>
              <button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button></td>
              `
    });
}, function (error) {
    console.log("xato");
})
function ochirish(id) {
  http.delete("/api/teacher/" + id, function () {
      console.log("uchirildi");
      window.location.reload()
  }, function () {
      console.log("xato");
      console.log(error);
  })
  
}
function deleteAll() {
  if (window.confirm("siz rostan ham barcha malumotlarni uchirishni hohlaysizmi ?"))
      http.delete("/api/teacher/", function () {
          window.location.reload()
      }, function () {
          console.log("xato");
      })
      
}