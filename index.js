app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
    });


function sendd(){
    console.log("send");
    w();
    send_sms("hii hapa sas")
}
function w(){
    console.log("2nd method")
}
function send_sms(msg){
//     const phone = document.getElementById('phone');
    const phonenumber = "+254722687259";//phone.value;
    //const msg ="hi error";
//     console.log(phonenumber)
console.log("gsgsdgsd"+phonenumber+"  sjhjeh"+msg);
var message =msg;
var numbers = ['+254722687259'];

    const credentials = {
        apiKey: '1aef450787199bd819166a5aef455ef6c794320048db7e2d6487cccb4654513c',
        username: 'mysmsivy'
    };
    const AfricasTalking = require('africastalking')(credentials);

    const sms = AfricasTalking.SMS;

    const options = {
        to: numbers, 
        message: message
    }

    sms.send(options)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
//});




// document.getElementById('myForm').addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log(event) 

// //   var phone = document.getElementById('phone').value;
// //   var msg = document.getElementById('msg').value;
// //   console.log(phone+" "+msg);
//    send_sms("hii hapa 123"); 

// });


//send_sms();
