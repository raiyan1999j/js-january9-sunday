function plastation(){
    var year = document.getElementById('imo').value;
    
        var d = new Date(year,0,9);
        var txt ="";
        txt +=""+year + "<br>";
        if(isNaN(year)){txt="input must be number";}
        else if(d.getDay()===4){
            txt ="yes! january 9 of this year is thursday";
        }
        else {txt="sorry!its not";}
    document.getElementById('demo').innerHTML=txt;
}