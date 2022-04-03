function bottles(){
    var bottles;
    for(i=99; i>=1; i=i-1){
        if(i==1){
            bottles='bottle';
        }
        else{
            bottles='bottles'
        }
        document.getElementById("bottles").innerHTML+="<br>"+i+" "+bottles+" of beer on the wall. ";
        if(i<99){
            document.getElementById("bottles").innerHTML+=i+" "+bottles+" of beer on the wall. ";
        }
        document.getElementById("bottles").innerHTML+=i+" "+bottles+" of beer.<br> Take one down.<br>Pass it around. ";
        if(i==1){
            document.getElementById("bottles").innerHTML+="No bottles of beer on the wall.";
        }
    }
}