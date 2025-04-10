export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article
      className="prose prose-neutral mx-auto max-w-none
      prose-headings:mt-8 prose-headings:font-semibold dark:prose-headings:text-white
      prose-h1:text-5xl
      prose-h2:text-4xl
      prose-h3:text-3xl
      prose-h4:text-2xl
      prose-h5:text-xl
      prose-h6:text-lg
      dark:prose-p:text-muted-foreground
      prose-code:rounded-lg
      prose-code:p-1
      prose-em:bg-neutral-200
      dark:prose-em:bg-neutral-800
      prose-em:p-1
      prose-em:rounded-lg"
    >
      {children}
    </article>
  );
}
