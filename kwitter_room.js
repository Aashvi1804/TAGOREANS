
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCU9m1A4APuT2SejmGEhNyK_zSEW9CyzCA",
      authDomain: "kwitter-test-cdd94.firebaseapp.com",
      projectId: "kwitter-test-cdd94",
      storageBucket: "kwitter-test-cdd94.appspot.com",
      messagingSenderId: "970893114848",
      appId: "1:970893114848:web:e77909141ff37aa2f5ff85",
      measurementId: "G-QCYPFEC85B"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
