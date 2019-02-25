function setTab(id) {
    if (id == 1) {
        document.getElementById("phone").style.display = 'block';
        document.getElementById("phoneCode").style.display = 'none';
        document.getElementById("one1").className = 'current';
        document.getElementById("one2").className = '';
    }
    if (id == 2) {
        document.getElementById("phone").style.display = 'none';
        document.getElementById("phoneCode").style.display = 'block';
        document.getElementById("one1").className = '';
        document.getElementById("one2").className = 'current';
    }
}