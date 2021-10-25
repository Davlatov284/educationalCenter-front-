


http.get("/api/malumot/", function(ajax){
    let tbody = document.getElementById("selectBody")
    
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        if(element.status == true){
        tbody.innerHTML += `
        <option value = "${element.id}">${element.student.name} ${element.student.surname}</option>
        `}
    });
}, function (error) {
    console.log("xato");
})
http.get("/api/tulovTur/", function(ajax){
    let selectbody = document.getElementById("select")
    let studentlar = JSON.parse(ajax);
    studentlar.forEach(element => {
        selectbody.innerHTML += `
        <option value = "${element.id}">${element.tulovTur}</option>
        `
    });
}, function (error) {
    console.log("xato");
})
let params = new URLSearchParams(location.search);
let id = params.get('id');

http.get("/api/kursTulov/"+id, function(ajax){
    let malumot = JSON.parse(ajax);
    document.getElementById("date").value = malumot.date;
})

function edit(){
    let tbody = document.getElementById("selectBody")
    let selectbody = document.getElementById("select")    
    
    
    let form = new FormData( document.forms["editTulov"]);

        let newPost = {
            "kursStudent": {
                "id" : tbody.value
            },
            "tulovTur": {
                "id" : selectbody.value
            },
            "date": form.get('date'),
        }
    
        http.put("/api/kursTulov/" + id, JSON.stringify(newPost), function () {
            console.log("qushildi");
            if(confirm("yangi malumotlar qushildi orqaga qaytishni xoxlaysizmi")) history.back();
    
        });
    
}
function addTur(){
    let tur = document.getElementById("tur").innerHTML = `
    <label class="label">Yangi Tulov Turi</label>
    <div class="rs-select2 js-select-simple select--no-search">
        <input class="input--style-4" type="text" name="yangi" id="yangi">
        <div class="select-dropdown"></div>
    </div>
    <a type="button" class="btn btn--radius-2 btn--blue" style="line-height: 40px; margin-top: 15px; float: right;" onclick="qushish()">yangi tur qushish</a>
    `
}
function qushish(){
    let yangi = document.getElementById("yangi")
    let turi = document.getElementById("tur")
    let tur = {
    }
    tur.tulovTur = yangi.value;

    http.post("/api/tulovTur/" , JSON.stringify(tur), function(){
        turi.innerHTML = `
        <label class="label">Tulov Turi</label>
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="subject" id="select">
                                        <option disabled="disabled" selected="selected">Choose option</option>

                                    </select>
                                    <div class="select-dropdown"></div>
                                </div>
                                <a type="button" class="btn btn--radius-2 btn--blue" style="line-height: 40px; margin-top: 15px; float: right;" onclick="addTur()">yangi tur qushish</a>
        `;
        window.location.reload();
    }, function() {
        console.log("xato")
    })

    
}