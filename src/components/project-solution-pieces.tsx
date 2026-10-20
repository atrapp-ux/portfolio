export type SolutionPiece = {
  label: string;
  body: string;
};

export type ProjectSolutionPiecesContent = {
  title: string;
  pieces: SolutionPiece[];
};

export function ProjectSolutionPieces({ section }: { section: ProjectSolutionPiecesContent }) {
  const titleId = "solution-pieces-title";

  return (
    <section className="solution-pieces" aria-labelledby={titleId}>
      <h2 id={titleId} className="solution-pieces-title">
        {section.title}
      </h2>
      <div className="solution-pieces-list">
        {section.pieces.map((piece, index) => (
          <article className="solution-piece" key={`${piece.label}-${index}`}>
            <p className="solution-piece-label">{piece.label}</p>
            <p className="solution-piece-body">{piece.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
