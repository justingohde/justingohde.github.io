function logOn() {
    
    var uName = document.getElementById("UserName").value;
    var pWord = document.getElementById("PassWord").value;

    
    var data = localStorage.getItem('usernames');
    var name = JSON.parse(data);
    var found = 0;
    
    if (name != null) {///a list of usernames already exist
        //1) go through each user to see if this username exists
        for(var i = 0; i<name.users.length; i++){
          alert(name.users[i].username);
            if(name.users[i].username === uName){
                    
                if(name.users[i].password === pWord){
                    alert("good to go!");
                    var d = new Date();
                    var n = d.toJSON();
                    name.users[i].date_last=n;
                }//passwords match
                else{
                    alert("try again!");
                }//paswords don't match
                
                found = 1;
            }//2)if username exsts, check for matching passwords
        }
        //3) if username doesn't exist, add to list
       if (found == 0){
        var d = new Date();
        var n = d.toJSON();
        //var newUser = '{"username": "'+uName+ '", "password": "'+pWord+'", "date_first": "'+n+'",  "date_last": "'+n+'"}';
        var newUser = {};
        newUser.username=uName;
        newUser.password=pWord;   
        newUser.date_first=d;
        newUser.date_last=d;
        name.users.push(newUser);
        localStorage.setItem("usernames", JSON.stringify(name));
       }
    }else{
      
        var d = new Date();
        var n = d.toJSON();
        var newUser = '{"users": [{"username": "'+uName+ '", "password": "'+pWord+'", "date_first": "'+n+'",  "date_last": "'+n+'"}]}';
        localStorage.setItem("usernames", newUser);
    }//empty list of users
    
    
}
