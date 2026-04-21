# Fase 1 — Diagnóstico de Perfil

> Duração: ~15 minutos
> Objetivo: Identificar onde a agência está e quais são os gargalos reais

---

## Fluxo

```
Formulário (5 blocos)
        ↓
Scoring Engine (cálculo automático)
        ↓
Score 0–100 por dimensão
        ↓
Nível 1–5 da agência
        ↓
Gargalos dinâmicos (vermelho/amarelo/verde)
        ↓
Checklist de ação em 3 fases
        ↓
Planos recomendados
```

---

## Formulário — 5 Blocos

### Bloco 1 — Dados da Agência
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Nome da agência | texto | ✅ |
| Nome do responsável | texto | ✅ |
| Cidade / Estado | texto | ✅ |
| @ Instagram | texto | ❌ |
| Tempo de mercado | select | ❌ |
| Tipo de agência | select | ❌ |

**Tipos de agência:** Autônoma/Freelancer, Pequena (até 3), Média (4–10), Franquia, Consolidadora

---

### Bloco 2 — Presença Digital
| Campo | Opções (valor 0–4) |
|-------|-------------------|
| Seguidores Instagram | <500 (0) / 500–1k (1) / 1k–5k (2) / 5k–15k (3) / 15k+ (4) |
| Frequência de posts | Raramente (0) / 1–2x/sem (1) / 3–5x/sem (2) / Todo dia (3) |
| Usa Reels/Vídeos | Não (0) / Raramente (1) / Regularmente (2) |
| Usa Stories | Não (0) / Às vezes (1) / Todo dia (2) |
| Tem site/landing page | Não (0) / Fraco (1) / Funcional (2) |
| Bio otimizada | Não (0) / Básica (1) / Com CTA e link (2) |
| Depoimentos de clientes | Não (0) / Poucos 1–3 (1) / Vários 4+ (2) / Muitos + vídeo (3) |

---

### Bloco 3 — Vendas e Tráfego
| Campo | Opções (valor 0–3) |
|-------|-------------------|
| Investe em anúncio pago | Não (0) / Até R$500 (1) / R$500–2k (2) / Acima R$2k (3) |
| Origem dos clientes | Indicação (0) / Orgânico (1) / Pago (2) / Misto (3) |
| Orçamentos por semana | 0–3 (0) / 4–10 (1) / 11–20 (2) / 20+ (3) |
| Ticket médio | Até R$3k (0) / R$3–8k (1) / R$8–20k (2) / R$20k+ (3) |
| Lista WhatsApp | Não (0) / Até 50 (1) / 50–200 (2) / 200+ (3) |
| Taxa de fechamento | <10% (0) / 10–25% (1) / 25–50% (2) / 50%+ (3) |

---

### Bloco 4 — Pacotes e Nicho
| Campo | Tipo |
|-------|------|
| Carro-chefe (o que mais vende) | select |
| O que quer vender mais | select |
| Tipos de pacote oferecidos | checkboxes múltiplos |
| Destinos nacionais (até 3) | tags clicáveis |
| Destinos internacionais (até 3) | tags clicáveis |

**Carro-chefe options:**
- `nordeste` — Praia Nordeste
- `sul` — Praia Sul/Sudeste
- `internacional` — Internacional
- `cruzeiro` — Cruzeiros
- `aventura` — Ecoturismo/Aventura
- `religioso` — Turismo religioso
- `misto` — Misto/Vários

**Destinos nacionais disponíveis:**
Maceió, Natal, Fortaleza, Porto de Galinhas, Salvador, Florianópolis, Rio de Janeiro, Gramado, Foz do Iguaçu, João Pessoa, Recife, Jericoacoara, Bonito, Balneário Camboriú

**Destinos internacionais disponíveis:**
Orlando, Cancún, Buenos Aires, Punta Cana, Miami, Lisboa, Paris, Dubai, Bali, Tailândia, Nova York, Santiago

---

### Bloco 5 — Gargalos e Desafios
| Campo | Tipo |
|-------|------|
| Maior desafio hoje | select |
| Problemas observados no perfil | checkboxes múltiplos |
| Objeção mais comum dos clientes | select |
| Observações livres | textarea |

**Desafios:**
- Falta de tempo para criar conteúdo
- Não consigo atrair clientes novos
- Recebo mensagens mas não consigo fechar
- Quero escalar mas não sei como
- Concorrência muito forte / guerra de preço
- Não consigo ser consistente nas redes
- Já invisto em anúncio mas não converte

---

## Scoring Engine

### Fórmula de Cálculo

```javascript
// PRESENÇA DIGITAL (0–20 pontos)
presenca = (seguidores/4 * 5) + (posts/3 * 5) + (bio/2 * 4) + (site/2 * 3) + (depoimentos/3 * 3)

// CONTEÚDO (0–20 pontos)
conteudo = (reels/2 * 8) + (stories/2 * 6) + (posts/3 * 6)

// VENDAS (0–25 pontos)
vendas = (orcamentos/3 * 10) + (ticket/3 * 8) + (fechamento/3 * 7)

// TRÁFEGO (0–20 pontos)
trafego = (anuncio/3 * 10) + (origem/3 * 6) + (whatsapp/3 * 4)

// CONVERSÃO (0–15 pontos)
conversao = (fechamento/3 * 8) + (depoimentos/3 * 4) + (site/2 * 3)

// TOTAL (0–100)
total = presenca + conteudo + vendas + trafego + conversao
```

### Dimensões Exibidas (escala 0–100)
| Dimensão | Multiplicador |
|----------|--------------|
| Presença | × 5 |
| Conteúdo | × 5 |
| Vendas | × 4 |
| Tráfego | × 5 |
| Conversão | × 6.67 |

---

## Níveis da Agência

| Score | Nível | Label | Cor |
|-------|-------|-------|-----|
| 0–25 | 1 | Iniciante Digital | 🔴 Vermelho |
| 26–45 | 2 | Em Desenvolvimento | 🟡 Amarelo |
| 46–62 | 3 | Em Crescimento | 🔵 Azul |
| 63–80 | 4 | Estabelecida | 🟢 Verde |
| 81–100 | 5 | Referência no Mercado | 🟢 Verde |

---

## Gargalos Dinâmicos

### Regras de Geração
- Máximo 5 gargalos por diagnóstico
- Tipos: `red` (crítico), `amber` (moderado), `green` (melhoria)
- Variação por `hashVariation(score + seed, date)` — nunca repete

### Gatilhos de Gargalo Crítico (vermelho)
| Condição | Gargalo Gerado |
|----------|---------------|
| `conteudo < 40` | Zero constância de conteúdo / Ausência de vídeos |
| `trafego < 30` | Dependência de indicação / Sem canal ativo |
| `sem_anuncio + orcamentos < 1` | Sem anúncios = sem escala |

### Gatilhos de Gargalo Moderado (amarelo)
| Condição | Gargalo Gerado |
|----------|---------------|
| `conversao < 50` | Taxa de fechamento abaixo do potencial |
| `depoimentos < 1` | Falta de prova social |
| `site < 1` | Sem landing page para capturar leads |

### Gatilhos de Melhoria (verde)
| Condição | Gargalo Gerado |
|----------|---------------|
| `presenca > 40 && conteudo < 60` | Presença existe, conteúdo precisa evoluir |
| `vendas > 50 && trafego < 50` | Boa conversão, falta volume de leads |

---

## Checklist de Ação

### Fase 1 — Prioridade Imediata (vermelho)
Gerado quando `conteudo < 50` ou `presenca < 40` ou `trafego < 30`:
- Poste 1 Reel (15–30s) com destino do carro-chefe hoje
- Otimize a bio: foto + descrição + CTA + link
- Poste 3 stories hoje: destino + depoimento + pergunta
- Escolha 5 vídeos do pack e programe para a semana
- Crie campanha de R$10/dia no Instagram

### Fase 2 — Próximos 15 dias (amarelo)
- Sequência de follow-up: dia 1, 3 e 7 após orçamento
- Grave 1 depoimento em vídeo com cliente
- Monte oferta completa: destino + datas + preço + parcelamento + CTA
- Reorganize destaques: Destinos, Depoimentos, Promoções
- Calendário semanal: 2 vídeos + 3 fotos + stories diários

### Fase 3 — Mês 2 em diante (verde)
- Campanha de tráfego pago com vídeo que mais performou
- Página de vendas para pacote mais vendido
- Resposta automática no Instagram Direct
- Live de 20 min mostrando destino
- Grupo VIP de WhatsApp para clientes antigos

---

## Variação de Respostas

Para garantir que o diagnóstico nunca seja igual:

```javascript
function hashVariation(seed, max) {
  let h = 0;
  const str = String(seed) + new Date().getDate(); // muda por dia
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % max;
}
```

- Descrições de nível: 3 variações por nível
- Gargalos: 2–3 variações por gatilho
- Objetivo identificado: 3 variações por nicho
- Checklist: dinâmico baseado no score real

---

## Output Final da Fase 1

```
┌─────────────────────────────────────────┐
│  DIAGNÓSTICO — [Nome da Agência]        │
│  Responsável: [Nome] · [Cidade]         │
│  Analisado em: [Data] às [Hora]         │
├─────────────────────────────────────────┤
│  SCORE TOTAL: [0–100] / 100             │
│  Nível [1–5] — [Label]                  │
│  [Descrição personalizada]              │
├─────────────────────────────────────────┤
│  Presença: [X]  Conteúdo: [X]           │
│  Vendas: [X]    Tráfego: [X]            │
│  Conversão: [X]                         │
├─────────────────────────────────────────┤
│  🎯 Objetivo Identificado               │
│  🔍 Gargalos (até 5)                    │
│  ✅ Plano de Ação (3 fases)             │
│  📦 Ferramentas Recomendadas            │
└─────────────────────────────────────────┘
```
