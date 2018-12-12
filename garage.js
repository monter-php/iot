$(function() {
    var ip=0;
    for(var i=1;i<=254;i++) {
        ip="192.168.0."+i;
        checkIp(ip);
    }
});

function checkIp(ip) {
    $.ajax({
        url: "http://"+ip+"/ping",
        timeout: 2000,
        crossDomain : true,
        xhrFields: {
           withCredentials: false
        },
        success: function(result) {
            
        }
      })
}