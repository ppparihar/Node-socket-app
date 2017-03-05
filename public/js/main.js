(function () {
    "use strict";

// connect to the socket
	var socket = io();
    var replyContainer = document.getElementById("divReplyContainer");
    var btnSend = document.getElementById("btnSend");
    var txtdata = document.getElementById("txtdata");

    btnSend.addEventListener("click",function(e){
        e.preventDefault;
        var data = txtdata.value;
        txtdata.value = '';
        socket.emit("send",data);
    })
    
    socket.on("reply",function(data){
        var code = document.createElement("pre");
        code.innerText= JSON.stringify(data);
        replyContainer.appendChild(code);
    })
})();