

const square = document.querySelector('.square');
const navbar = document.querySelector('.navbars'); 
const square2 = document.querySelector('.square2'); 

  

navbar.classList.add('hidden')

square.addEventListener('click', function () {
  navbar.classList.add('hidden')
  square2.classList.remove('hidden')
})

square2.addEventListener('click',function(){
	 navbar.classList.remove('hidden')
	 square2.classList.add('hidden')
})
