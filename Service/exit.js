function chiqish(){
    if(window.confirm("chiqishni xoxlaysizmi?")){
        localStorage.removeItem("token");
        location.href = "./../Login_v1/index.html"
    }
}