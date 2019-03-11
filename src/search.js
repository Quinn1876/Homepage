document.getElementById("search-button").onclick = () => {
    var q = document.getElementById("search-box").value;
    window.open('http://google.com/search?q='+q);
};

$("#search-box").keydown(function(e){
    if(e.which === 13){
        $("#search-button").click();
    }
});