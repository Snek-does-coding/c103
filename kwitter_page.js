
var firebaseConfig = {
    apiKey: "AIzaSyCVVuV1DHvjnHuMmHkn0-iYqV1lz1XaDWQ",
    authDomain: "c100-e9e32.firebaseapp.com",
    databaseURL: "https://c100-e9e32-default-rtdb.firebaseio.com",
    projectId: "c100-e9e32",
    storageBucket: "c100-e9e32.appspot.com",
    messagingSenderId: "827566015447",
    appId: "1:827566015447:web:b7a876e9f7eeb4aaacc192",
    measurementId: "G-75DJ1L9W20"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value="";
  }

  function logout() 
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
    }