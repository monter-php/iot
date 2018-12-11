$(function() {
    for(i=1;i<=254;i++) {
        ip="192.168.0."+i;
        $("#info").append("<div>"+ip+"<div>");
    }
});