import type { Niche } from "@/hooks/useFabricaContext";

export interface OfertaTemplate {
  title: string;
  text: string;
}

const OFERTAS: Record<string, OfertaTemplate[]> = {
  nordeste: [
    {
      title: "Pacote Maceió 5 Dias com Tudo Incluído",
      text: "✈️ Aéreo + Hotel 4★ + Café da manhã + Transfer\n📅 Saídas semanais\n💸 6x sem juros no cartão\n🔥 R$ 1.997 por pessoa (era R$ 2.580)\n📲 Chame no WhatsApp e garanta sua vaga.",
    },
    {
      title: "Porto de Galinhas Família",
      text: "🐠 Pacote 4 dias / 3 noites\n🏨 Resort all-inclusive\n👨‍👩‍👧 Crianças até 6 anos GRÁTIS\n💸 De R$ 3.200 por R$ 2.490\n⏰ Apenas 8 vagas disponíveis.",
    },
    {
      title: "Natal Romântico - Lua de Mel",
      text: "💕 5 noites no Pipa Privilege\n🍾 Jantar especial + Spa para o casal\n🚐 Passeios incluídos\n💸 R$ 4.890 o casal\n📲 Reserva com 10% de entrada.",
    },
  ],
  sul: [
    {
      title: "Gramado no Inverno - 4 Dias",
      text: "❄️ Hotel charme no centro\n🍷 Tour da uva + chocolate\n🧀 Café colonial inclusso\n💸 De R$ 2.890 por R$ 2.290\n📲 Saídas garantidas em julho.",
    },
    {
      title: "Floripa Verão Premium",
      text: "🏖️ 7 dias no Norte da Ilha\n✈️ Aéreo + transfer privativo\n🏨 Pousada pé na areia\n💸 R$ 3.490 por pessoa\n🔥 Últimas vagas para janeiro.",
    },
  ],
  internacional: [
    {
      title: "Disney Orlando Família",
      text: "🏰 7 dias com 4 parques inclusos\n✈️ Aéreo + Hotel oficial Disney\n🍔 Plano de refeições\n💸 12x de R$ 1.290\n📲 Consulte saídas e datas.",
    },
    {
      title: "Cancún All Inclusive",
      text: "🌊 5 noites em resort 5★\n🍹 Bebidas e comida liberadas\n✈️ Aéreo + transfer\n💸 De R$ 7.900 por R$ 6.490\n🔥 Promo válida até sexta.",
    },
    {
      title: "Europa em 10 dias",
      text: "🇫🇷🇮🇹🇪🇸 Paris + Roma + Barcelona\n✈️ Aéreo + trens + 3★\n🍝 Café da manhã todos os dias\n💸 12x de R$ 1.490\n📲 Vagas para março/abril.",
    },
  ],
  cruzeiro: [
    {
      title: "Cruzeiro Costa Brasileira 7 Noites",
      text: "🚢 Cabines internas, externas ou com varanda\n🍾 Pensão completa + bebidas inclusas\n💸 A partir de R$ 2.890 por pessoa\n🔥 Embarques de Santos e Itajaí.",
    },
    {
      title: "Cruzeiro Caribe MSC",
      text: "🌴 7 noites pelas Antilhas\n🚢 Cabine com varanda\n✈️ Aéreo + transfer + cruzeiro\n💸 12x de R$ 990\n📲 Última saída do ano.",
    },
  ],
  aventura: [
    {
      title: "Chapada Diamantina 5 Dias",
      text: "⛰️ Trilhas + cachoeiras + Poço Azul\n🏨 Pousada + guia local\n🥾 Equipamentos inclusos\n💸 R$ 2.190 por pessoa\n📲 Grupo pequeno (máx 12).",
    },
    {
      title: "Bonito Ecoaventura",
      text: "🐠 Flutuação + Gruta do Lago Azul\n🏨 4 noites + transfer\n🥥 Café da manhã\n💸 De R$ 3.190 por R$ 2.690\n🔥 Saídas mensais.",
    },
  ],
  luademel: [
    {
      title: "Maldivas Lua de Mel",
      text: "🏝️ 7 noites em bangalô sobre o mar\n🍾 Jantar romântico + Spa\n✈️ Aéreo + transfer marítimo\n💸 12x de R$ 2.490 por pessoa\n📲 Ofertas exclusivas para casais.",
    },
    {
      title: "Paris Romântico",
      text: "🇫🇷 5 noites no centro de Paris\n🍷 Cruzeiro pelo Sena + Torre Eiffel\n☕ Café da manhã + transfer\n💸 R$ 8.990 o casal\n🔥 Inclui surpresa romântica no quarto.",
    },
  ],
};

export function getOfertasByNiche(niche: Niche): OfertaTemplate[] {
  if (!niche || !(niche in OFERTAS)) {
    return Object.values(OFERTAS).flat().slice(0, 4);
  }
  return OFERTAS[niche];
}
