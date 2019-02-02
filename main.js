document.getElementById("submit").addEventListener("click" , function(e){
    e.preventDefault() ;
    add(e) ;
} ) ;

var config = {
    apiKey: "AIzaSyD1gjhj6aQz9TWbstMsi2EjIEkeBqgZnpE",
    authDomain: "beta1-2018.firebaseapp.com",
    databaseURL: "https://beta1-2018.firebaseio.com",
    projectId: "beta1-2018",
    storageBucket: "beta1-2018.appspot.com",
    messagingSenderId: "749626943516"
  };
firebase.initializeApp(config);

var database = firebase.database() ;

var ref = database.ref("names") ;


function add(e){
    var name = document.getElementById("name").value ;
    //alert(name) ;
    ref.push({name : name }) ;
} 