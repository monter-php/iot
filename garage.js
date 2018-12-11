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
        timeout: 50,
        success: function(result) {
            console.log(ip);
        }
      })
}