// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCGC5yVCOM2viIHXz-xDznlIvynkO0NDw",
  authDomain: "details-e63d4.firebaseapp.com",
  databaseURL: "https://details-e63d4.firebaseio.com",
  projectId: "details-e63d4",
  storageBucket: "details-e63d4.appspot.com",
  messagingSenderId: "1008495032219"
};
firebase.initializeApp(config);

var firestore = firebase.firestore();
const docRef = firestore.doc("bank/details");
const outsame = document.querySelector("name");
const outphone = document.querySelector("phone");
const outaccount = document.querySelector("account");
const outamount = document.querySelector("amount");
const outtransaction = document.querySelector("transaction");
const outdate = document.querySelector("date");
const outsubmit = document.querySelector("Submit");
const subemphasis = document.querySelector("emphasis")

outsubmit.addEventListener("click", function(){
const subName = outsame.value;
const subPhone = outphone.value;
const subAccount = outaccount.value;
const subAmount = outamount.value;
const subTransaction = outtransaction.value;
const subDate = outdate.value;
console.log("save if valid" + outsubmit+ "to Firestore");

docRef.set({
  outDetails: subName
  outDetails: subPhone
  outDetails: subAccount
  outDetails: subAmount
  outDetails: subTransaction
  outDetails: subDate

}).then(function(){
  console.log("Details saved!");
}).catch(function(Error){
  console.log("Invalid detail:", error);
});

})
