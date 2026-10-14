import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { buttonStyles } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

export default function NotFound() {
  return (
    <main
      id="conteudo"
      className="relative isolate grid min-h-svh place-items-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 opacity-60 mask-[radial-gradient(ellipse_60%_50%_at_50%_45%,#000,transparent_75%)]"
      />
      <div className="max-w-md">
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Página não <span className="text-gradient">encontrada.</span>
        </h1>
        <p className="mt-5 leading-relaxed text-muted">
          O endereço acessado não existe ou foi movido.
        </p>
        <Link href="/" className={cn(buttonStyles({ size: "lg" }), "mt-9")}>
          <ArrowLeft aria-hidden="true" className="size-4" />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
