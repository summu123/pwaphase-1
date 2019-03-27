function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status== "200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}


loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  Career(data.Career);
  Education(data.Education);
  skills(data.skills);

})
  var left=document.querySelector(".left");
function profile(p){

  var h2=document.createElement("h2");
  h2.textContent="profile";
  left.append(h2);

  var hr=document.createElement("hr");
  left.append(hr);

  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);


var h2=document.createElement("h2");
h2.textContent=p.Name;
left.append(h2);

var h2=document.createElement("h2");
h2.textContent=p.Designation;
left.append(h2);

var h2=document.createElement("h2");
h2.textContent=p.Gender;
left.append(h2);

var h2=document.createElement("h2");
h2.textContent=p.Address;
left.append(h2);

var h2=document.createElement("h2");
h2.textContent=p.Email;
left.append(h2);
}

var right=document.querySelector(".right");
function Career(c){

  var h1=document.createElement("h1");
      h1.textContent="Career";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var h3=document.createElement("h3");
  h3.textContent=c.information;
  right.append(h3);
}

function Education(e){

  var h1=document.createElement("h1");
  h1.textContent="Education";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
  right.append(table);

  var tr1="<tr><th>Sno</th><th>Degree</th><th>institution</th><th>percentage</th><th>year_of_passing</th></tr>";
  var tr2="";
  for(var i=0;i<e.length;i++)
  {
    tr2=tr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].Degree+"</td><td>"+e[i].institution+"</td><td>"+e[i].percentage+"</td><td>"+e[i].year_of_passing+"</td></tr>";
  }
  table.innerHTML=tr1+tr2;
  right.append(table);
}

function skills(s){
  var h1=document.createElement("h1");
  h1.textContent="Skills";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

   var ul=document.createElement("ul");
  var l1="";

  for(var i in s){
    l1=l1+"<ul><li>"+s[i].name+":"+s[i].information+"</li></ul>";
  }
  ul.innerHTML=l1;
  right.append(ul);
}
