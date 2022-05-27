
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCS3626Awwl8u_6KdDLBsi8nZZfvY8aIiQ",
      authDomain: "kwitterdatabase-45764.firebaseapp.com",
      projectId: "kwitterdatabase-45764",
      storageBucket: "kwitterdatabase-45764.appspot.com",
      messagingSenderId: "979850630041",
      appId: "1:979850630041:web:d71bad3dab38ad936c3908",
      measurementId: "G-B3JL1K4KC0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData()
 {firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code


      //End code
      });});}
getData();
