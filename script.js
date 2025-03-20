function runCode() 
{
    var html = document.getElementById("htmlCode").value;
    var css = "<style>" + document.getElementById("cssCode").value + "</style>";
    var js = "<script>" + document.getElementById("jsCode").value + "</script>";

    var output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(html + css + js);
    output.close();
}

//to centered content horizantally margin-left: auto and margin-right : auto .
//rem – A unit that is relative to the root element's font size.
//The root element in HTML is usually the <html> tag.
// starts slow speeds up slows down
// scale(1.05) increas font-size by 5%
// outline: none; removes  default outline
