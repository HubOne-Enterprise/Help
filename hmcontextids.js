var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return decodeURIComponent(hmContextIds[params["contextid"]]);
    else return "";
}

hmContextIds["100"]="adding-a-column-to-the-documen.html";
hmContextIds["100"]="adding-a-column-to-the-documen.html";
hmContextIds["100"]="adding-a-column-to-the-documen.html";
hmContextIds["100"]="adding-a-column-to-the-documen.html";
hmContextIds["100"]="adding-a-column-to-the-documen.html";
hmContextIds["100"]="adding-a-column-to-the-documen.html";
