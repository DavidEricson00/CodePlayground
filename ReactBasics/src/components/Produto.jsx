export default function Produto({nome, preco, categoria}) {
  return(
    <div className="product-card">
      <p className="eyebrow">Produto</p>
      <ul>
        <li className="product-name">{nome}</li>
        <li>Categoria: {categoria}</li>
        <li>Preco: R$ {preco.toFixed(2)}</li>
      </ul>
    </div>
  )
}