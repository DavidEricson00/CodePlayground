export default function PerfilUsuario () {
  const urlFoto = 'https://blog.portalpos.com.br/wp-content/uploads/2022/04/autonomia-do-aluno.jpg';
  const nomeAluno = 'Douglas';
  return(
    <div className="profile-card">
      <img src={urlFoto} alt={`Foto de ${nomeAluno}`} />
      <div className="profile-meta">
        <p className="eyebrow">Perfil</p>
        <p>{nomeAluno}</p>
        <p>Eu gosto de escrever e estudar</p>
      </div>
    </div>
  )
}