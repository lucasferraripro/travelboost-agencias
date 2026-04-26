import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ExclusaoDados = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Exclusão de Dados do Usuário
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Última atualização: março de 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Como solicitar a exclusão dos seus dados
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Você tem o direito de solicitar a exclusão completa de todos os dados pessoais
              que a Canva Viagem possui sobre você, em conformidade com a Lei Geral de
              Proteção de Dados (LGPD — Lei nº 13.709/2018) e o Regulamento Geral de
              Proteção de Dados (GDPR).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              O que será excluído
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao solicitar a exclusão, removeremos permanentemente:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Sua conta e dados de cadastro (nome, e-mail, senha).</li>
              <li>Histórico de uso da plataforma.</li>
              <li>Preferências e configurações salvas.</li>
              <li>Dados associados ao login via Facebook/Meta.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Dados de transações financeiras podem ser retidos pelo prazo legal exigido
              (até 5 anos conforme legislação fiscal brasileira).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Como solicitar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Envie um e-mail para{" "}
              <a
                href="mailto:privacidade@canvaviagem.com"
                className="text-primary hover:underline"
              >
                privacidade@canvaviagem.com
              </a>{" "}
              com o assunto <strong>"Exclusão de Dados"</strong> e informe o e-mail
              associado à sua conta. Processaremos sua solicitação em até{" "}
              <strong>15 dias úteis</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Exclusão via Facebook/Meta
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você usou o login com o Facebook, também pode solicitar a exclusão
              diretamente pelas configurações do Facebook:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Acesse as configurações do Facebook.</li>
              <li>Vá em <strong>Aplicativos e Sites</strong>.</li>
              <li>Localize <strong>Canva Viagem</strong> e clique em <strong>Remover</strong>.</li>
              <li>Selecione a opção de excluir também os dados associados ao app.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              Após remover o app pelo Facebook, envie-nos também um e-mail para
              confirmarmos a exclusão dos dados em nossos servidores.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Contato
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dúvidas sobre exclusão de dados ou privacidade:{" "}
              <a
                href="mailto:privacidade@canvaviagem.com"
                className="text-primary hover:underline"
              >
                privacidade@canvaviagem.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExclusaoDados;
