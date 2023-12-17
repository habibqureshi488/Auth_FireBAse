// Assuming you have already included the Firebase SDK script

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZcRqDgqFcZIniHxEjDoY3xBsgpwMpQ_Y",
    authDomain: "fir-smit-3b561.firebaseapp.com",
    projectId: "fir-smit-3b561",
    storageBucket: "fir-smit-3b561.appspot.com",
    messagingSenderId: "959560622234",
    appId: "1:959560622234:web:5a72bfcaaf77b05b8a3f23",
    measurementId: "G-Q85GND57WW"
  });
  
  // Check if Firebase is initialized successfully
  if (firebaseApp) {
    console.log("Firebase initialized successfully");
  } else {
    console.error("Firebase initialization failed");
  }
  
  const auth = firebase.auth(); // Get the auth object after Firebase initialization
  const db = firebase.firestore();
  
  // Get the auth object after Firebase initialization
  function signupcel() {
    let email = document.getElementById('#email').value;
    let pass = document.getElementById('#pass').value;
  
    console.log('email', email);
    console.log('password', pass);
  
    auth.createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
        console.log("Wrong Statement Error", error);
      });
  }
  
  function login() {
    let old_email = document.getElementById("old-email");
    let old_password = document.getElementById("old-password");
  
    firebase.auth().signInWithEmailAndPassword(old_email.value, old_password.value)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  function craetedata() {
    let email = document.getElementById('#email').value;
    let name = document.getElementById('#name').value;
    let pass = document.getElementById('#pass').value;
  
    console.log('email', email);
    console.log('password', pass);
  
    db.collection('users')
    .add({
        name :name,
        email:email,
        pass:pass,
    })
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  function readdata() {
    
    db.collection('users')
    .get()
    
    .then((res) => {
        // console.log(res.docs)
        console.log(res.docs.map((item) => {
            return {...item.data() , id : item.id}
        }))
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
  }
  
  function Deletedata() {
    
    db.collection('users')
    doc('h454b3k6bkb6b45k6bjk54b6')
    .delete()
    .then((res) => {
        // console.log(res.docs)
        console.log(res)
        // console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  function Updatedata() {
    
    db.collection('users')
    doc('h454b3k6bkb6b45k6bjk54b6')
    .Update({
        name : "xyz",
        email :"xyz@gmail.com",
        pass :"123123"
    })
    .then((res) => {
        // console.log(res.docs)
        console.log(res)
        // console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
  }













 
  