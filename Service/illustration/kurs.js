let tbody = document.getElementById("tbody")


http.get("/api/kurs/", function(ajax){
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        tbody.innerHTML += `
        <tr scope="row">
              <td><a href="#">${element.name}</a></td>
              <td>
                ${element.yunalishi}
              </td>
              <td>${element.teacher.name}</td>
              <td>${element.level}</td>
              <td>${element.room}</td>
              <td>${element.cost}</td>
              <td>dan ${element.startTime} gacha ${element.endTime}</td>
              <td><a name="" id="" href="./../EditHTML/KursEdit/index.html?id=${element.id}" class="btn btn-primary" role="button" style="border-radius: 40px;">malumotni uzgartirish</a>
              <button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button></td>
            </tr>
        `
    });
}, function (error) {
    console.log("xato");
})
function ochirish(id) {
  http.delete("/api/kurs/" + id, function () {
      console.log("uchirildi");
      window.location.reload()
  }, function () {
      console.log("xato");
      console.log(error);
  })
  
}
function deleteAll() {
  if (window.confirm("siz rostan ham barcha malumotlarni uchirishni hohlaysizmi ?"))
      http.delete("/api/kurs/", function () {
          window.location.reload()
      }, function () {
          console.log("xato");
      })
      
}
