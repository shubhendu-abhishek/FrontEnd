$("#txt").click(function () {
    console.log("Add Plain Text");
    var lel = prompt("Enter Text", " ")
    $(".formElement").append(lel);
});

$("#txtbox").click(function () {
    let $textBox = $('<input/>').attr({ type: 'text', value: 'Enter Name' });
    $(".formElement").append($textBox);
});

$("#chkbox").click(function () {
    var $chkbox = $('<input/>').attr({ type: 'checkbox', name: 'chk' }).addClass("chk");
    $(".formElement").append($chkbox);
});

$("#rdiobtn").click(function () {
    var $rdiobtn = $('<input/>').attr({ type: 'radio', name: 'rad' }).addClass("rad");
    $(".formElement").append($rdiobtn);
});
$("#bton").click(function () {
    let $bton = $('<button/>').attr({ class: "btn btn-warning", value: "Button" });
    $(".formElement").append($bton);
});