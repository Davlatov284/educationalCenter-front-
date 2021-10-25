
http.get("/api/kurs/", function(ajax){
    let tbody = document.getElementById("courses")
    let studentlar = JSON.parse(ajax);
    for(var i = 0; i <= studentlar.length; i++){
        tbody.innerHTML = i;
    }
}, function (error) {
    console.log("xato");
})

http.get("/api/student/", function(ajax){
    let tbody = document.getElementById("student")
    let studentlar = JSON.parse(ajax);
    for(var i = 0; i <= studentlar.length; i++){
        tbody.innerHTML = i;
    }
}, function (error) {
    console.log("xato");
})
http.get("/api/teacher/", function(ajax){
    let tbody = document.getElementById("teacher")
    let studentlar = JSON.parse(ajax);
    for(var i = 0; i <= studentlar.length; i++){
        tbody.innerHTML = i;
    }
}, function (error) {
    console.log("xato");
})