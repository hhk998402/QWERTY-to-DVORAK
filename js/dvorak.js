$(document).ready(function() {
// Function to get input value.
document.getElementById("textarea").disabled = true;
var dvorak="`~1!2@3#4$5%6^7&8*9(0)[{]}"
dvorak+="'";
//dvorak+='"';
dvorak+=",.pyfgcrl/?=+aoeuidhtns-_;qjkxbmwvz";
var qwerty="`~1!2@3#4$5%6^7&8*9(0)-_=+qwertyuiop[{]}asdfghjkl;:'";
qwerty+="\"";
qwerty+="zxcvbnm";
var textin="";
var textout="";
var invalid="";
var forS=";:";
var forW=",<";
var forV=".>";
var forZ="/?";
var slash="|";
slash+=String.fromCharCode(92);
var exceptions=[8,46,37,38,39,40,13,16,17,18,20,27,33,34,36,45];
var counter;
var flag;

$('#text').keydown(function(){
    var $field = $(this);
    var KeyID = event.keyCode;
    flag=false;
    if($.inArray(KeyID,exceptions)!=-1)
        flag=true;
    //alert(String.fromCharCode(92));
    // this is the value before the keypress
    setTimeout(function() {
        //
        //lert(KeyID);
        // this is the value after the keypress
        textin = $field.val();
        //var textin=$("#text").val().toLowerCase();
    //alert(dvorak);
    textin=textin.toLowerCase();
    textout="";
    invalid="";
    counter=0;
    for(i=0;i<textin.length;i++)
    {
        if(textin[i]==' ')
        {
            textout+=textin[i];
        }
        //else if(qwerty.indexOf(textin[i])<=-1 and (KeyID!=8 and KeyID!=46))
        else if(qwerty.indexOf(textin[i])>-1)
        {
            if(forS.indexOf(textin[i])>-1)
                textout+="s";
            else
                textout+=dvorak.charAt(qwerty.indexOf(textin[i]));
        }
        else if(forW.indexOf(textin[i])>-1)
            textout+="w";
        else if(forV.indexOf(textin[i])>-1)
            textout+="v";
        else if(forZ.indexOf(textin[i])>-1)
            textout+="z";
        else
        {
            if(slash.indexOf(textin[i])>-1)
                textout+=textin[i];
            else
            {
                invalid+=textin[i];
                counter++;
            }

        }
        /*else (KeyID==8)
        {
            alert("Invalid Character Entered");
            continue;
        }*/
    }
    //alert(textout);
    //$("#textarea").value('');
    if(counter>0)
    {
        if(!flag)
        {
            invalid="Invalid Character(s) Used: "+invalid;
            alert(invalid);
        }
    }
    var elem = document.getElementById("textarea");
    elem.innerHTML="";
    elem.innerHTML += textout;
    //$("#textarea").prepend(textout);
    }, 0);
});
/*$('#text_value').click(function() {
var text_value = $("#text").val();
if(text_value=='') {
alert("Enter Some Text In Input Field");
}else{
alert(text_value);
}
});
$('#text_reset').click(function() {
$("#text").val('');
});*/
});