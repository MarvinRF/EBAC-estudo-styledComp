import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

function Teste() {
  return (
    <>
      <Botao fontSize="24px" principal>
        Enviar
      </Botao>{' '}
      <br />
      <br />
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
    </>
  )
}
export default Teste
