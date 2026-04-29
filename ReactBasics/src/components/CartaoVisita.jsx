export default function CartaoVisita () {
  const nomeEmpresa = 'Blog do Gesso'
  const url = 'https://www.google.com'
  return(
    <div className="visit-card">
      <p className="eyebrow">Marca</p>
      <h1>{nomeEmpresa}</h1>
      <p>Acesse o blog dos nossos patrocinadores.</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visitar o site</a>
    </div>
  )
}