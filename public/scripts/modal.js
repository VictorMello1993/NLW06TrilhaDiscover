export default function Modal(){

  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.modal-wrapper .buttons .cancel')

  cancelButton.addEventListener('click', event => close())

  function open(){
    modalWrapper.classList.add('active')
  }
  function close(){
    modalWrapper.classList.remove('active')
  }

  return{
    open,
    close
  }
}