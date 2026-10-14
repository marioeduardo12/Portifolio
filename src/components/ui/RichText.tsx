import { Fragment } from "react";

type RichTextProps = {
  text: string;
  strongClassName?: string;
};

/** Converte trechos entre **asteriscos** em destaques, mantendo o conteúdo como texto simples nos dados. */
export function RichText({
  text,
  strongClassName = "font-medium text-foreground",
}: RichTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className={strongClassName}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
