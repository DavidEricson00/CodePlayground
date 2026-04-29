export default function BlogPost ({titulo, resumo}) {
  return(
    <article className="blog-post">
      <h3>{titulo}</h3>
      <p>{resumo}</p>
    </article>
  )
}