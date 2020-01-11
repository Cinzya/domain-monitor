var domain = "cynthiaebert.de";
var apiKey = "at_XtU8CpRcPmD7AX6RWswtOOK0voVgH";

/* $(function () {
    $.ajax({
        url: "https://domain-availability-api.whoisxmlapi.com/api/v1",
        dataType: "jsonp",
        data: {apiKey: apiKey, domainName: domain},
        success: function(data) {
            $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
        }
    });
}); */

const getData = () => {
    fetch("https://domain-availability-api.whoisxmlapi.com/api/v1?apiKey=" + apiKey + "&domainName=" + domain).then(response => {
            return response.json();
        })
        .then(responseData => {
            console.log(responseData);
        });
};
