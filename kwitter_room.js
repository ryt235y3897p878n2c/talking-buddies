
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBqMeaB1Xyy-qks4VMRwOjP7XPuDmlEnjA",
      authDomain: "kwitter-bc30f.firebaseapp.com",
      databaseURL: "https://kwitter-bc30f-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc30f",
      storageBucket: "kwitter-bc30f.appspot.com",
      messagingSenderId: "913984287337",
      appId: "1:913984287337:web:cb6e3a672c1bb58fa4e8f8",
      
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    


    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
  

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}