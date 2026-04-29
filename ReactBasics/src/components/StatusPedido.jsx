export default function StatusPedido({situacao}) {
  return(
    <div className="status-card">
      <p className="eyebrow">Pedido</p>
      <p>Seu pedido foi atualizado e segue para a proxima etapa.</p>
      <span className="status-chip">{situacao}</span>
    </div>
  )
}