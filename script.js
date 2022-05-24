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
const ex2 = document.querySelector('ex2_text');
const ex2c = document.getElementById('values');

ex2.addEventListener('ex2_text', updateValue);

function updateValue(e) {
  ex2c.textContent = e.target.value;
}

   
  
 
})();