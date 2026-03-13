function switchLang(lang) {
    document.querySelectorAll("[data-th]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}

function openPDF(file){

if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){

let link = document.createElement("a")
link.href = file
link.download = file
link.click()

}else{

window.open(file, "_blank")

}

}