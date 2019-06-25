document.addEventListener("DOMContentLoaded",function (event) {


    document.getElementById("add").onclick = function() {
        document.getElementById("wrapper").setAttribute("class", "displayoff");

        document.getElementById("add").onclick = function () {
            document.getElementById("wrapper").classList.toggle("displayoff");

        }
    }

    var btn = document.getElementById("plus");
    var inps = document.querySelectorAll("input");
    var infoDiv = document.getElementById("cont");
    var select = document.getElementById("select");

    var uName = inps[0];
    var owner = inps[1];
    var notes = inps[2];
    var date = inps[3];
    var time = inps[4];

    var dataArr = [];

    function getInfo() {
        var obj = {
            name: uName.value,
            owner: owner.value,
            notes: notes.value,
            date: date.value,
            time: time.value
        }

        dataArr.push( obj );

        uName.value = "";
        owner.value = "";
        notes.value = "";
        date.value = "";
        time.value = "";

        ///console.log(dataArr);

        createHtml(dataArr);

    }
    function createNote(name, owner, notes, data ,time , index){
        var newLi = document.createElement("li");

        newLi.onclick = function(){
            console.log(dataArr);
            createHtml(dataArr);

        }

        var nameli = document.createElement("h2");
        var ownerli = document.createElement("span");
        var notesli = document.createElement("span");
        var datali = document.createElement("span");
        var timeli = document.createElement("span");


        nameli.textContent = name;
        ownerli.textContent = owner;
        notesli.textContent = notes;
        datali.textContent = data;
        timeli.textContent = time;

        nameli.setAttribute("class", "head2");
        ownerli.setAttribute("class", "owner");
        notesli.setAttribute("class", "notes");
        datali.setAttribute("class", "date");
        timeli.setAttribute("class", "time");
        
        newLi.appendChild(nameli);
        newLi.appendChild(ownerli);
        newLi.appendChild(notesli);
        newLi.appendChild(datali);
        newLi.appendChild(timeli);

        infoDiv.appendChild(newLi);


    }
    function createHtml(arr){

        infoDiv.innerHTML = "";
        for(var i = 0; i < arr.length; i++) {
            createNote( arr[i].name, arr[i].owner, arr[i].notes,arr[i].data ,arr[i].time, i );
        }

    }
btn.onclick=getInfo;

    select.onchange=function () {
    }
});
