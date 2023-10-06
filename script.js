function run(){
    var htmlCode = document.getElementById("html-code").value;
    var cssCode = document.getElementById("css-code").value;
    var jsCode = document.getElementById("js-code").value;
    var result = document.getElementById("result")

    result.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    result.contentWindow.eval(jsCode);
}