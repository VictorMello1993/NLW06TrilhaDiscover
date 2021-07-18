export default function copyRoomButton() {
  const button = document.querySelector('.buttons > .outlined')

  button.addEventListener('click', copyRoom)

  function copyRoom() {
    const roomId = document.getElementById('room-id').dataset.id

    //Se a versão do seu navegador não é compatível com Clipboard API, utilizar document.execCommand('copy') com o código abaixo     
    // try {
    //   const divRoomId = document.getElementById('room-id')
    //   const temp = document.createElement('input')
    //   temp.value = roomId

    //   divRoomId.appendChild(temp)
    //   temp.select()

    //   document.execCommand('copy')
    //   divRoomId.removeChild(temp)
    //   alert('Texto copiado para área de transferência!')

    // } catch (error) {
    //   alert('Erro inesperado ao copiar a sala.')
    //   console.log(error.message)
    // }
    //Referência: https://www.codegrepper.com/code-examples/javascript/copy+button+using+javascript

    /*Utilizando Clipboard API do próprio Javascript. É compatível com versões mais recentes dos navegadores*/
    navigator.clipboard.writeText(roomId)
      .then(() => alert('Texto copiado para área de transferência!'))
      .catch((error) => {
        alert('Erro inesperado ao copiar a sala.')
        console.log(error.message)
      })
  }

  return {
    copyRoom
  }
}

