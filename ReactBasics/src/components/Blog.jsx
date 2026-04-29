import BlogPost from "./BlogPost"

export default function Blog() {
  const postText = [
    { titulo: 'Rotina de estudos mais leve', resumo: 'Pequenas escolhas para organizar o dia sem excesso de ruido.' },
    { titulo: 'Como organizar projetos pequenos', resumo: 'Separar por prioridade ajuda a dar foco e manter a tela limpa.' },
    { titulo: 'Boas praticas para uma tela limpa', resumo: 'Menos blocos, mais espaco e informacao direta.' }
  ]

  return (
    <div className="blog-list">
      {postText.map((post, index) => (
        <BlogPost key={index} titulo={post.titulo} resumo={post.resumo} />
      ))}
    </div>
  )
}
