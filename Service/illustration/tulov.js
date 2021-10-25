let tbody = document.getElementById("tbody")


http.get("/api/kursTulov/", function (ajax) {
  let studentlar = JSON.parse(ajax);
  studentlar.forEach(element => {
    if (element.kursStudent.status == true) {
      tbody.innerHTML += `
        <tr scope="row">
              <td>${element.kursStudent.student.name}</td>
              <td>
                ${element.kursStudent.kurs.yunalishi}
              </td>
              <td>
              ${element.kursStudent.kurs.teacher.name}
            </td>
            <td>
                ${element.date}
              </td>
              <td>
                ${element.tulovTur.tulovTur}
              </td>
              <td>
                ${element.kursStudent.kurs.cost}
              </td>
              <td style="color: green;">O'qimoqda</td>
              <td><a name="" id="" class="btn btn-primary" role="button" href="./../EditHTML/TulovEdit/index.html?id=${element.id}" style="border-radius: 40px;">malumotni uzgartirish</a>
              <button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button></td>
              `
    } else {
      tbody.innerHTML += `
        <tr scope="row">
              <td>${element.kursStudent.student.name}</td>
              <td>
                ${element.kursStudent.kurs.yunalishi}
              </td>
              <td>
              ${element.kursStudent.kurs.teacher.name}
            </td>
            <td>
                ${element.date}
              </td>
              <td>
                ${element.tulovTur.tulovTur}
              </td>
              <td>
                ${element.kursStudent.kurs.cost}
              </td>
              <td style="color: red;">Ketgan</td>
              <td><button name="" id="" class="btn btn-danger" role="button" style="border-radius: 40px;" onclick = "ochirish(${element.id})">uchirib yuborish</button></td>`
              }
    });
}, function (error) {
    console.log("xato");
})
function ochirish(id) {
  http.delete("/api/kursTulov/" + id, function () {
      console.log("uchirildi");
      window.location.reload()
  }, function () {
      console.log("xato");
      console.log(error);
  })
  
}
function deleteAll() {
  if (window.confirm("siz rostan ham barcha tulov malumotlarini uchirishni hohlaysizmi ?"))
      http.delete("/api/kursTulov/", function () {
          window.location.reload()
      }, function () {
          console.log("xato");
      })
      
}