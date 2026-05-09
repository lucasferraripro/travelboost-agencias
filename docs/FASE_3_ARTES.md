# Fase 3 — Criação de Artes

> Duração: ~15 minutos
> Objetivo: Gerar artes com identidade visual do cliente sem sair da plataforma

---

## Visão Geral

O cliente sobe a logo dele, escolhe um template e o sistema gera as artes automaticamente via **Banana Pro API**. Tudo dentro da ferramenta, sem precisar abrir Canva, Photoshop ou qualquer outra plataforma.

---

## Fluxo

```
Cliente sobe logo (PNG/JPG)
        ↓
Sistema salva no perfil do cliente
        ↓
Cliente escolhe template (feed quadrado / story)
        ↓
Sistema envia para Banana Pro API
        ↓
Arte gerada com logo + cores do cliente
        ↓
Download direto na plataforma
```

---

## Integração Banana Pro API

### Configuração
```javascript
// Chave API fornecida pelo Lucas
const BANANA_API_KEY = process.env.BANANA_API_KEY

// Endpoint base
const BANANA_BASE_URL = 'https://api.banana.dev'
```

### Chamada de Geração
```javascript
async function gerarArte(templateId, clienteData) {
  const payload = {
    apiKey: BANANA_API_KEY,
    modelKey: templateId,
    modelInputs: {
      logo_url: clienteData.logoUrl,
      cor_primaria: clienteData.corPrimaria,
      cor_secundaria: clienteData.corSecundaria,
      nome_agencia: clienteData.nome,
      texto_oferta: clienteData.textoOferta,
      destino: clienteData.destino,
      preco: clienteData.preco,
      whatsapp: clienteData.whatsapp
    }
  }
  
  const response = await fetch(`${BANANA_BASE_URL}/start/v4/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  
  return response.json()
}
```

---

## Templates Disponíveis

### Feed Quadrado (1080×1080px)

#### Template 1 — Oferta de Destino
```
┌─────────────────────────────┐
│  [LOGO]              [NOME] │
│                             │
│  [FOTO DO DESTINO]          │
│                             │
│  DESTINO                    │
│  A partir de R$ X.XXX       │
│  Parcelamos em 12x          │
│                             │
│  📲 [WHATSAPP]              │
└─────────────────────────────┘
```

#### Template 2 — Depoimento
```
┌─────────────────────────────┐
│  [LOGO]                     │
│                             │
│  "Texto do depoimento       │
│   do cliente aqui..."       │
│                             │
│  ⭐⭐⭐⭐⭐                    │
│  [Nome do Cliente]          │
│  [Destino visitado]         │
│                             │
│  [NOME DA AGÊNCIA]          │
└─────────────────────────────┘
```

#### Template 3 — Dica de Viagem
```
┌─────────────────────────────┐
│  [LOGO]                     │
│                             │
│  💡 DICA DE VIAGEM          │
│                             │
│  [Título da dica]           │
│                             │
│  • Ponto 1                  │
│  • Ponto 2                  │
│  • Ponto 3                  │
│                             │
│  [NOME DA AGÊNCIA]          │
└─────────────────────────────┘
```

### Story Vertical (1080×1920px)

#### Template 4 — Oferta Story
```
┌──────────────┐
│  [LOGO]      │
│              │
│  [FOTO]      │
│  [DESTINO]   │
│              │
│  🔥 OFERTA   │
│  ESPECIAL    │
│              │
│  R$ X.XXX    │
│  12x sem     │
│  juros       │
│              │
│  👆 ARRASTA  │
│  PRA CIMA    │
│              │
│  [WHATSAPP]  │
└──────────────┘
```

#### Template 5 — Enquete Story
```
┌──────────────┐
│  [LOGO]      │
│              │
│  Qual seu    │
│  próximo     │
│  destino?    │
│              │
│  🏖️ PRAIA   │
│  ✈️ EUROPA  │
│              │
│  [ENQUETE]   │
└──────────────┘
```

---

## Upload de Logo

### Especificações Aceitas
- Formatos: PNG (preferencial), JPG, SVG
- Tamanho máximo: 5MB
- Resolução mínima: 300×300px
- Fundo: transparente (PNG) ou branco

### Armazenamento
```javascript
// Logo salva no perfil do cliente
// Caminho: /clientes/{clienteId}/logo.png
// Backup: AWS S3 bucket

async function uploadLogo(file, clienteId) {
  const formData = new FormData()
  formData.append('logo', file)
  formData.append('clienteId', clienteId)
  
  const response = await fetch('/api/upload-logo', {
    method: 'POST',
    body: formData
  })
  
  const { logoUrl } = await response.json()
  
  // Salva no perfil do cliente
  await atualizarPerfil(clienteId, { logoUrl })
  
  return logoUrl
}
```

---

## Cores do Cliente

### 🎨 Modelos de Artes (Prompts Engenharia)

O sistema utiliza 3 modelos mestres de prompts para gerar anúncios de alta conversão. Estes prompts são dinâmicos e adaptam-se às cores e destinos da agência:

#### 1. Modelo: Painéis Divididos (Horizontal/Vertical)
Focado em comparação visual e lista de destinos. Ideal para "Ofertas de Temporada".

#### 2. Modelo: Alta Conversão (Texto Superior + Foto Inferior)
Design limpo com foco em um destino principal e call-to-action clara.

#### 3. Modelo: Layout Gráfico Profissional (Duas Colunas)
Layout de revista/catálogo, com precisão técnica em espaçamento e tipografia.

```html
<div class="field">
  <label>Cor principal da sua marca</label>
  <input type="color" id="cor-primaria" value="#FF6B35">
  <span id="cor-primaria-hex">#FF6B35</span>
</div>

<div class="field">
  <label>Cor secundária</label>
  <input type="color" id="cor-secundaria" value="#004E89">
  <span id="cor-secundaria-hex">#004E89</span>
</div>
```

### Paletas Sugeridas por Nicho
| Nicho | Cor Principal | Cor Secundária | Estilo |
|-------|--------------|----------------|--------|
| Praia/Nordeste | `#FF6B35` laranja | `#004E89` azul | Vibrante |
| Luxo | `#1A1A1A` preto | `#D4AF37` ouro | Elegante |
| Aventura | `#2D6A4F` verde | `#F59E0B` amarelo | Natural |
| Internacional | `#3B82F6` azul | `#FFFFFF` branco | Moderno |
| Cruzeiro | `#1E3A5F` azul escuro | `#C0C0C0` prata | Sofisticado |

---

## Área de Templates (Para Colar Prompts)

> ⚠️ Esta área é reservada para Lucas colar os prompts/modelos prontos de arte.
> O sistema vai usar esses prompts como base para gerar as artes via Banana Pro API.

```
[ÁREA RESERVADA — PROMPTS DE ARTE]

Template Feed Quadrado — Oferta:
[COLAR PROMPT AQUI]

Template Feed Quadrado — Depoimento:
[COLAR PROMPT AQUI]

Template Story — Oferta:
[COLAR PROMPT AQUI]

Template Story — Enquete:
[COLAR PROMPT AQUI]
```

---

## Alternativa: Tutorial de Criação Manual

Caso a integração com Banana Pro API não esteja disponível, o sistema oferece um tutorial passo a passo para o cliente criar as artes no Canva:

### Tutorial Canva — Feed Quadrado
1. Acesse canva.com e crie design 1080×1080px
2. Escolha template de viagem
3. Substitua logo pelo seu (arraste o arquivo)
4. Troque as cores para as suas cores da marca
5. Cole a legenda gerada pelo sistema
6. Baixe em PNG (alta qualidade)
7. Publique no Instagram

### Tutorial Canva — Story
1. Acesse canva.com e crie design 1080×1920px
2. Escolha template de story de viagem
3. Substitua logo e cores
4. Adicione texto da oferta
5. Adicione link do WhatsApp
6. Baixe e publique

---

## Próximos Passos Após Artes

Após gerar as artes, o sistema direciona para:
1. Publicar no Instagram (feed + stories)
2. Usar como criativo nos anúncios (Meta Ads)
3. Enviar pelo WhatsApp para lista de clientes
4. Salvar no banco de criativos para reutilizar
