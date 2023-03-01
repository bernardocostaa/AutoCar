export default function formFooter(){
  const btn = document.querySelector('#btn-email')
  const input = document.querySelector('.input-footer')

function verifcarEmail(e){
  e.preventDefault()
  console.log('oi');
}

  btn.addEventListener('click',verifcarEmail)
}