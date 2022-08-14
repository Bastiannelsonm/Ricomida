$(function(){
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado exitosamente")
    })
    $("h3").on("dblclick", function(){
        $(this).css({
            color: "#DC3545"
        })
    })
    $(".card-title").click(function(){
        $(".card-text").toggle('showOrhide')
    })
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})