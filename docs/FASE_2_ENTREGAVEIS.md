# Fase 2 — Entregáveis Prontos

> Duração: ~20 minutos
> Objetivo: Entregar tudo pronto para o cliente publicar hoje

---

## O Que É Entregue

Com base no diagnóstico da Fase 1, o sistema entrega automaticamente:

1. **Vídeos recomendados** — filtrados pelo nicho/carro-chefe (banco de 150)
2. **Legendas personalizadas** — filtradas pelo destino/estilo (banco de 200+)
3. **Ofertas prontas** — por nicho, prontas para WhatsApp e feed
4. **Checklist 30 dias** — tarefas organizadas por semana
5. **Plano de ação** — o que postar cada dia

---

## Banco de Vídeos (150 vídeos)

### Estrutura de Cada Vídeo
```json
{
  "id": "N01",
  "titulo": "POV: você acabou de chegar em Maceió e a praia está assim",
  "meta": "Reel 15s | Alta viralização",
  "badge": "badge-praia",
  "categoria": "nordeste"
}
```

### Categorias Disponíveis

#### 🏖️ Nordeste (10 vídeos base)
| ID | Título | Formato |
|----|--------|---------|
| N01 | POV: você acabou de chegar em Maceió | Reel 15s |
| N02 | 3 praias de Natal que ninguém te conta | Reel 30s |
| N03 | Por que Fortaleza é o destino favorito das famílias | Reel 30s |
| N04 | Porto de Galinhas: tudo que você precisa saber | Reel 45s |
| N05 | Maragogi: o Caribe Brasileiro que cabe no bolso | Reel 20s |
| N06 | João Pessoa em 48h — roteiro completo | Reel 30s |
| N07 | Recife + Porto de Galinhas: o pacote perfeito | Reel 30s |
| N08 | Jericoacoara: como chegar e quanto custa TUDO | Reel 45s |
| N09 | Salvador histórico + praias — 5 dias que valem | Reel 30s |
| N10 | Preço real de uma semana em Natal com tudo incluído | Reel 20s |

#### 🌲 Sul/Sudeste (5 vídeos base)
| ID | Título | Formato |
|----|--------|---------|
| S01 | Gramado no inverno: prepare-se para isso | Reel 20s |
| S02 | Florianópolis: qual praia escolher segundo o perfil | Reel 30s |
| S03 | Rio de Janeiro em 4 dias — roteiro completo | Reel 45s |
| S04 | Balneário Camboriú: o que fazer além de ir à praia | Reel 30s |
| S05 | Búzios para casais: o guia que você queria ter | Reel 30s |

#### ✈️ Internacional (10 vídeos base)
| ID | Título | Formato |
|----|--------|---------|
| I01 | Orlando com crianças: quanto custa TUDO de verdade | Reel 45s |
| I02 | Cancún em março: praia + preço + dicas reais | Reel 30s |
| I03 | Buenos Aires: o que fazer com R$500 por dia | Reel 30s |
| I04 | Miami em 5 dias — do básico ao luxo | Reel 30s |
| I05 | Lisboa em 7 dias: roteiro completo para brasileiros | Reel 45s |
| I06 | Paris: o que NINGUÉM te conta antes de ir | Reel 30s |
| I07 | Punta Cana all-inclusive: vale ou não vale? | Reel 30s |
| I08 | Dubai em 6 dias: o que você pode fazer | Reel 30s |
| I09 | Nova York pela primeira vez: roteiro de sobrevivência | Reel 45s |
| I10 | Japão para brasileiros: quanto custa e como ir | Reel 45s |

#### ⛴️ Cruzeiros (5 vídeos base)
| ID | Título | Formato |
|----|--------|---------|
| C01 | Cruzeiro pela primeira vez: o que levar e o que não fazer | Reel 45s |
| C02 | Cruzeiro Mediterrâneo: preço real e o que inclui | Reel 30s |
| C03 | Cruzeiro Brasil: cabines a partir de R$X — como funciona | Reel 30s |
| C04 | Diferença entre cruzeiro all-inclusive e básico | Reel 30s |
| C05 | Como fazer cruzeiro economizando na excursão | Reel 30s |

#### 🌿 Aventura/Ecoturismo (4 vídeos base)
| ID | Título | Formato |
|----|--------|---------|
| A01 | Bonito MS: o destino de ecoturismo mais incrível do Brasil | Reel 30s |
| A02 | Foz do Iguaçu: como aproveitar as 3 fronteiras | Reel 30s |
| A03 | Chapada Diamantina: trekking, cachoeiras e trilhas | Reel 45s |
| A04 | Lençóis Maranhenses: o melhor período para visitar | Reel 20s |

#### 📣 Marketing para Agências (7 vídeos base)
| ID | Título | Formato |
|----|--------|---------|
| M01 | Por que sua agência não aparece no Instagram (e como mudar) | Reel 30s |
| M02 | A diferença entre agência que vende e agência que luta | Reel 20s |
| M03 | Como responder um orçamento no WhatsApp para fechar mais | Reel 30s |
| M04 | 5 tipos de post que toda agência de viagem deveria fazer | Reel 30s |
| M05 | Como conseguir depoimentos em vídeo dos seus clientes | Reel 20s |
| M06 | Você está perdendo cliente para o concorrente? Veja por quê | Reel 30s |
| M07 | Como criar uma oferta que vende em 24h | Reel 30s |

### Regra de Seleção de Vídeos
```javascript
// Seleciona 5 vídeos do nicho principal + 3 de marketing
videos = [...CATALOGO[nicho].slice(0, 5), ...CATALOGO.mkt.slice(0, 3)]
```

---

## Banco de Legendas (200+ captions)

### Estrutura de Cada Legenda
```json
{
  "dest": "Natal - RN",
  "text": "Busca praia de verdade em Natal - RN? 🌅🏖️ Piscinas naturais...",
  "hashtags": "#NatalRN #PacotesViagem #AgenteDeViagem"
}
```

### Legendas por Nicho

#### Nordeste
```
NATAL - RN
Busca praia de verdade em Natal - RN? 🌅🏖️ Piscinas naturais, dunas cor de rosa 
e aquelas jangadas que todo mundo quer subir. Nossos pacotes incluem ✈️ passagens 
+ 🏨 hotel, parcelado em até 12x sem juros.
✔️ Vagas limitadas — fale agora!
📲 [WhatsApp]: (99) 99999-9999
#NatalRN #PacotesViagem #AgenteDeViagem

MACEIÓ - AL
Quer ver o mar que parece aquário? 🐟🌊 Maceió tem as piscinas naturais mais 
lindas do Brasil. Pacotes com aéreo + hotel a partir de 10x de R$180.
✔️ Reserve sua vaga antes que esgote!
📲 [WhatsApp]: (99) 99999-9999
#Maceio #CaribeBrasileiro #ViagemDeSonho

PORTO DE GALINHAS - PE
🐠 Porto de Galinhas te esperando! Piscinas naturais com peixinhos coloridos, 
areia branca e mar verde-esmeralda. Pacotes com passagem + hotel + passeio de jangada.
📲 [WhatsApp]: (99) 99999-9999
Parcelamos em até 12x!
#PortoDeGalinhas #Nordeste #FeriasPerfetas
```

#### Sul/Sudeste
```
GRAMADO - RS
❄️ Gramado em julho é uma experiência única. Chocolates, fondue, pinheiros e um 
frio gostoso. Pacotes com hotel boutique + café da manhã colonial.
📲 [WhatsApp]: (99) 99999-9999
✔️ Garante o seu antes do inverno
#Gramado #SulDoBrasil #ViagemRomantica

FLORIANÓPOLIS - SC
🌴 Florianópolis tem 42 praias. QUARENTA E DUAS. Tem praia pra todo perfil: 
família, surfe, agito e isolamento total. Pacotes com passagem + hotel.
📲 [WhatsApp]: (99) 99999-9999
#Florianopolis #IlhaDaMagia #ViagemBrasil
```

#### Internacional
```
ORLANDO - EUA
🎢 Orlando com crianças é inesquecível. Walt Disney World, Universal Studios, 
SeaWorld — tudo em um roteiro organizado por especialista. Pacotes com passagem 
+ hotel + ingressos.
📲 [WhatsApp]: (99) 99999-9999
Parcelamos em até 12x sem juros!
#Orlando #Disney #ViagemInternacional

CANCÚN - MÉXICO
🌺 Cancún em março: praia de água turquesa, sol garantido e pacotes com 
all-inclusive disponíveis. Cuida do seu descanso que a gente cuida de tudo mais.
📲 [WhatsApp]: (99) 99999-9999
#Cancun #Mexico #ViagemDeSonho

LISBOA - PORTUGAL
🚋 Lisboa é aquela cidade que você vai e quer ficar. Pastéis de nata, bondinhos, 
sol e o Atlântico. Pacotes com passagem + hotel 7 noites.
📲 [WhatsApp]: (99) 99999-9999
✔️ Parcelamos em até 12x
#Lisboa #Portugal #EuropaBrasileiro
```

#### Cruzeiros
```
CRUZEIROS
⛴️ Cruzeiro é a viagem que faz tudo: destino + hotel + comida + entretenimento. 
Tudo incluso, tudo no mesmo lugar. Consulte nossas datas e cabines disponíveis.
📲 [WhatsApp]: (99) 99999-9999
Parcelamos em até 12x!
#Cruzeiro #ViagemDeSonho #TodosIncluso
```

### Regras das Legendas
- Sempre incluir emoji relevante no início
- Sempre incluir CTA claro
- Sempre incluir placeholder de WhatsApp: `(99) 99999-9999`
- Sempre incluir parcelamento quando aplicável
- Máximo 300 caracteres para post, 30s para vídeo
- Hashtags: 3–5 por legenda, específicas do destino

---

## Banco de Ofertas

### Estrutura de Cada Oferta
```json
{
  "titulo": "🌊 Oferta Nordeste — Caribe Brasileiro",
  "text": "📍 NATAL + PISCINAS NATURAIS | 5 NOITES\n💰 A partir de R$ 1.800/pessoa\n..."
}
```

### Ofertas por Nicho

#### Nordeste
```
🌊 OFERTA NORDESTE — CARIBE BRASILEIRO
📍 NATAL + PISCINAS NATURAIS | 5 NOITES
💰 A partir de R$ 1.800/pessoa
✈️ Passagem aérea + 🏨 Hotel beira-mar + Café da manhã
🪸 Passeio de buggy nas dunas INCLUSO
💳 10x sem juros | Pix: 5% desconto
📲 Garanta sua vaga: [WhatsApp]

🐠 PORTO DE GALINHAS + MACEIÓ — COMBO NORDESTE
📍 COMBO NORDESTE | 7 NOITES
💰 A partir de R$ 2.400/pessoa
✈️ Passagens + 🏨 2 hotéis + Café da manhã
🪸 Jangada piscinas naturais INCLUÍDA
💳 12x sem juros
📲 Consulte disponibilidade: [WhatsApp]
```

#### Sul/Sudeste
```
❄️ GRAMADO ROMÂNTICO — INVERNO COMPLETO
📍 GRAMADO | 4 NOITES
💰 A partir de R$ 1.800/pessoa
🏔️ Hotel boutique + Café da manhã colonial
✈️ Transfer incluso | Chegada Porto Alegre
💳 10x sem juros
📲 Reserve agora: [WhatsApp]
```

#### Internacional
```
🎢 ORLANDO — A VIAGEM DOS SONHOS DA FAMÍLIA
📍 ORLANDO | 7 NOITES
💰 A partir de R$ 6.500/pessoa
✈️ Passagem aérea + 🏨 Hotel perto da Disney
🎡 Ingressos disponíveis
💳 12x sem juros
📲 Monte seu pacote: [WhatsApp]

🌺 CANCÚN ALL-INCLUSIVE — SOL E MAR GARANTIDOS
📍 CANCÚN | 7 NOITES ALL-INCLUSIVE
💰 A partir de R$ 5.500/pessoa
✈️ Passagem aérea + 🏨 Resort all-inclusive
🍹 Alimentação + bebidas incluídas
💳 12x sem juros
📲 Reserve sua vaga: [WhatsApp]
```

#### Cruzeiros
```
⛴️ CRUZEIRO — TUDO INCLUSO EM UM LUGAR SÓ
📍 CRUZEIRO | A partir de 7 NOITES
💰 Cabines a partir de R$ 2.900/pessoa
⛴️ Navio + Refeições + Entretenimento
🌊 Múltiplos destinos em uma só viagem
💳 10x sem juros
📲 Consulte datas: [WhatsApp]
```

---

## Checklist 30 Dias

### Semana 1 — Fundação
- [ ] Poste o 1º vídeo do pack hoje (use vídeo #01 recomendado)
- [ ] Configure a bio do Instagram (foto + descrição + CTA + link WhatsApp)
- [ ] Envie oferta para sua lista de WhatsApp
- [ ] Programe 5 posts para a semana (vídeos + legendas prontas)
- [ ] Poste 2 Reels esta semana (10x mais alcance que fotos)

### Semana 2 — Prova Social
- [ ] Peça 1 depoimento para um cliente (print ou vídeo)
- [ ] Organize 3 destaques no Instagram (Destinos, Depoimentos, Promoções)
- [ ] Crie sua primeira oferta da semana (feed + stories + WhatsApp)
- [ ] Faça 1 enquete nos Stories ("Qual destino você quer visitar?")
- [ ] Defina o destino-foco do mês

### Semana 3 — Engajamento
- [ ] Compartilhe 1 resultado de cliente (print, foto de viagem)
- [ ] Coloque link do WhatsApp na bio com mensagem pré-definida
- [ ] Faça 1 stories com CTA direto ("Manda DM com a palavra QUERO")
- [ ] Monte calendário de posts da semana 4
- [ ] Analise qual post performou melhor

### Semana 4 — Escala
- [ ] Suba campanha de tráfego pago com vídeo que mais performou
- [ ] Crie página de vendas para pacote mais vendido
- [ ] Implemente resposta automática no Instagram Direct
- [ ] Faça live de 20 min mostrando destino + tirando dúvidas
- [ ] Crie grupo VIP de WhatsApp para clientes antigos

---

## Plano de Conteúdo Semanal

### Estrutura Ideal por Semana
```
Segunda:   Reel educativo (dica de destino)
Terça:     Post de oferta (pacote com preço)
Quarta:    Stories (enquete ou bastidores)
Quinta:    Reel de testemunho (história de cliente)
Sexta:     Post de engajamento (pergunta, ranking)
Sábado:    Stories de urgência (oferta relâmpago)
Domingo:   Reel inspiracional (destino dos sonhos)
```

### Mix de Conteúdo Mensal
| Tipo | Quantidade | Objetivo |
|------|-----------|---------|
| Reels educativos | 5 | Alcance orgânico |
| Posts de oferta | 5 | Conversão direta |
| Testemunhos | 4 | Prova social |
| Engajamento | 4 | Algoritmo |
| Bastidores | 4 | Conexão |
| Stories diários | 20+ | Presença constante |

---

## Regras de Personalização

O sistema filtra os entregáveis com base em:

```javascript
const nicho = dadosCliente.carroChefe  // nordeste, sul, internacional, etc.
const destinos = dadosCliente.destinosNac + dadosCliente.destinosIntl
const querVender = dadosCliente.querVender

// Prioridade de seleção:
// 1. Vídeos do nicho principal (5 vídeos)
// 2. Vídeos de marketing (3 vídeos)
// 3. Legendas do destino mais vendido
// 4. Ofertas do nicho principal
// 5. Checklist baseado no score
```
