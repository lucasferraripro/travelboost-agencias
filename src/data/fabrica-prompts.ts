export type StrategyId = "ancora" | "vitrine" | "matriz" | "gancho";

export interface StrategyMeta {
  id: StrategyId;
  name: string;
  badge: string;
  badgeColor: string;
  description: string;
  emoji: string;
}

export const STRATEGIES: StrategyMeta[] = [
  {
    id: "ancora",
    name: "Âncora de Benefícios",
    badge: "BENEFÍCIO",
    badgeColor: "blue",
    description: "Painel dividido focando conforto, paz e cuidado. Para quem valoriza experiência tranquila.",
    emoji: "✅",
  },
  {
    id: "vitrine",
    name: "Vitrine de Destinos",
    badge: "DESTINO",
    badgeColor: "purple",
    description: "Foto impactante do destino com título 'CONHEÇA [DESTINO]' irresistível.",
    emoji: "🏝️",
  },
  {
    id: "matriz",
    name: "Matriz de Solução",
    badge: "SOLUÇÃO",
    badgeColor: "green",
    description: "Layout direto ao ponto e limpo com 2 fotos + lista de benefícios (Aéreo + Hotel).",
    emoji: "🎁",
  },
  {
    id: "gancho",
    name: "Gancho Dor → Solução",
    badge: "EMOCIONAL",
    badgeColor: "red",
    description: "Alto contraste emocional, foco em segurança e facilidade. Focado em dor e solução.",
    emoji: "😍",
  },
];
