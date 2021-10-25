let tbody = document.getElementById("tbody")


http.get("/api/student/", function(ajax){
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        tbody.innerHTML += `
        <tr scope="row">
              
              <td><a href="#">${element.name} ${element.surname}</a></td>
              <td>
                ${element.fatherName}
              </td>
              <td>${element.telNomer}</td>
              <td>${element.birthday}</td>
              <td><a name="" id="" class="btn btn-primary" href="./../EditHTML/StudentEdit/index.html?id=${element.id}" role="button" style="border-radius: 40px;">malumotni uzgartirish</a>
              <button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button></td>
        </tr>
        `
    });
}, function (error) {
    console.log("xato");
})
function ochirish(id) {
  http.delete("/api/student/" + id, function () {
      console.log("uchirildi");
      window.location.reload()
  }, function () {
      console.log("xato");
      console.log(error);
  })
  
}
function deleteAll() {
  if (window.confirm("siz rostan ham barcha malumotlarni uchirishni hohlaysizmi ?"))
      http.delete("/api/student/", function () {
          window.location.reload()
      }, function () {
          console.log("xato");
      })
      
}
