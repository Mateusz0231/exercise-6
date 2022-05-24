(function () {
 const ex1 = document.getElementById('ex1_button')
  const ex1c = document.getElementById('ex1_content')

  ex1.addEventListener("click", function () {
    var data ="";
    for (var i=0;i<10;i++){
      if(i!=0)
        data +=","
      data +=i.toString();
    }
    ex1c.innerHTML = data;
  })
const ex2 = document.querySelector('ex2_text')
  const ex2c = document.querySelector('ex2_content')
  
  ex2.addEventListener("focus", function () {
    ex2c.innerHTML = "";
  });
  ex2.addEventListener("blur",function(){
            ex2c.innerHTML = "";
        });
   
  
 
})();