let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-databse.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD6Gj2T6OHVwCDZNX4bJHrWuvAZdmvV7mE",
    authDomain: "pathway-c1e29.firebaseapp.com",
    projectId: "pathway-c1e29",
    storageBucket: "pathway-c1e29.appspot.com",
    messagingSenderId: "386556465858",
    appId: "1:386556465858:web:b58b5ae2142ef8e7bc615b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  document.getElementById("login").addEventListener("click",function(e){
    //e.preventDefault();
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        password: document.getElementById("pswd").value
    });
    alert("Login sucessfull")
  })
