import type { FabricaState, ScoreBreakdown, Gargalo } from "@/hooks/useFabricaContext";

const LEVEL_NAMES = [
  "Iniciante",
  "Em Desenvolvimento",
  "Em Crescimento",
  "Estabelecida",
  "Referência",
];

const LEVEL_DESC = [
  "Sua agência ainda não construiu presença digital sólida. Hora de profissionalizar.",
  "Você já começou, mas precisa consistência e estratégia para crescer.",
  "Você está no caminho certo. Otimização e escala são os próximos passos.",
  "Agência madura, com processos bem definidos. Foque em volume e autoridade.",
  "Top do mercado. Mantenha a inovação e diversifique fontes de venda.",
];

export function calculateScore(state: FabricaState): {
  digitalScore: number;
  scoreBreakdown: ScoreBreakdown;
  level: number;
  levelName: string;
  levelDescription: string;
  gargalos: Gargalo[];
} {
  // Presença (25%)
  let presenca = 0;
  if (state.followers === "10k+") presenca += 60;
  else if (state.followers === "2k-10k") presenca += 45;
  else if (state.followers === "500-2k") presenca += 25;
  else if (state.followers === "0-500") presenca += 10;
  if (state.hasHighlights) presenca += 25;
  if (state.instagram) presenca += 15;
  presenca = Math.min(100, presenca);

  // Conteúdo (25%)
  let conteudo = 0;
  if (state.postFrequency === "diario") conteudo += 50;
  else if (state.postFrequency === "semanal") conteudo += 35;
  else if (state.postFrequency === "mensal") conteudo += 15;
  if (state.usesReels) conteudo += 35;
  if (state.hasDepoimentos) conteudo += 15;
  conteudo = Math.min(100, conteudo);

  // Vendas (20%)
  let vendas = 0;
  const fechamentos = parseInt(state.fechamentosMes || "0", 10);
  if (fechamentos >= 20) vendas = 90;
  else if (fechamentos >= 10) vendas = 70;
  else if (fechamentos >= 5) vendas = 50;
  else if (fechamentos >= 1) vendas = 25;

  // Tráfego (15%)
  let trafego = state.investeAds ? 75 : 15;

  // Conversão (15%)
  let conversao = 0;
  const ticket = parseInt(state.ticketMedio || "0", 10);
  if (ticket >= 5000) conversao = 85;
  else if (ticket >= 2500) conversao = 65;
  else if (ticket >= 1000) conversao = 40;
  else if (ticket > 0) conversao = 20;
  if (state.hasDepoimentos) conversao = Math.min(100, conversao + 15);

  const breakdown: ScoreBreakdown = { presenca, conteudo, vendas, trafego, conversao };
  const digitalScore = Math.round(
    presenca * 0.25 + conteudo * 0.25 + vendas * 0.2 + trafego * 0.15 + conversao * 0.15
  );

  let level = 1;
  if (digitalScore >= 81) level = 5;
  else if (digitalScore >= 61) level = 4;
  else if (digitalScore >= 41) level = 3;
  else if (digitalScore >= 21) level = 2;

  const gargalos: Gargalo[] = [];
  const evaluate = (dim: string, value: number, msgs: { red: string; amber: string; green: string }) => {
    if (value < 35) gargalos.push({ dimension: dim, level: "red", text: msgs.red });
    else if (value < 65) gargalos.push({ dimension: dim, level: "amber", text: msgs.amber });
    else gargalos.push({ dimension: dim, level: "green", text: msgs.green });
  };

  evaluate("Presença Digital", presenca, {
    red: "Sua presença é praticamente invisível. Sem destaques e poucos seguidores — clientes não te encontram.",
    amber: "Você existe no Instagram mas precisa crescer audiência e estruturar destaques.",
    green: "Boa presença digital! Mantenha consistência e explore novos formatos.",
  });
  evaluate("Conteúdo", conteudo, {
    red: "Conteúdo escasso e sem Reels. O algoritmo do Instagram te está enterrando.",
    amber: "Você posta, mas falta frequência diária e mais Reels — o formato que mais alcança.",
    green: "Frequência ótima e usando Reels. Continue testando ganchos e CTAs.",
  });
  evaluate("Vendas", vendas, {
    red: "Volume muito baixo de fechamentos. Falta script comercial e funil estruturado.",
    amber: "Vendas acontecendo mas sem previsibilidade. Hora de processo de venda.",
    green: "Volume saudável de fechamentos! Foque em escalar e fidelizar.",
  });
  evaluate("Tráfego Pago", trafego, {
    red: "Sem investimento em ads, você depende 100% do orgânico — o crescimento é lento.",
    amber: "Já investe, mas pode otimizar campanhas e segmentação.",
    green: "Tráfego pago ativo. Acompanhe ROAS e escale o que funciona.",
  });
  evaluate("Conversão", conversao, {
    red: "Ticket baixo e sem prova social. Cliente pesquisa preço em vez de comprar de você.",
    amber: "Ticket razoável mas falta fortalecer prova social e ofertas premium.",
    green: "Conversão e ticket altos. Posicionamento premium funcionando.",
  });

  return {
    digitalScore,
    scoreBreakdown: breakdown,
    level,
    levelName: LEVEL_NAMES[level - 1],
    levelDescription: LEVEL_DESC[level - 1],
    gargalos,
  };
}

export function getChecklistByLevel(level: number) {
  const imediato = [
    { key: "bio", text: "Reescrever a bio do Instagram com proposta clara + CTA" },
    { key: "destaques", text: "Criar 4 destaques: Sobre, Pacotes, Depoimentos, Contato" },
    { key: "whatsapp", text: "Configurar WhatsApp Business com mensagem automática" },
    { key: "primeira-oferta", text: "Publicar primeira oferta de pacote no feed" },
  ];
  const quinzeDias = [
    { key: "reels-1", text: "Postar 3 Reels com gancho forte (dor → solução)" },
    { key: "depo", text: "Coletar 5 depoimentos reais de clientes anteriores" },
    { key: "carrossel", text: "Publicar 2 carrosséis educativos sobre destinos" },
    { key: "stories-diarios", text: "Subir stories diários com bastidores" },
  ];
  const mesDois = [
    { key: "ads-low", text: "Iniciar campanha de tráfego R$ 10/dia (mensagens)" },
    { key: "calendar", text: "Montar calendário editorial mensal" },
    { key: "blog", text: "Publicar 2 conteúdos educativos longos por mês" },
    { key: "upsell", text: "Criar upsell premium (transfer privativo, day-use, etc)" },
  ];
  return { imediato, quinzeDias, mesDois };
}
