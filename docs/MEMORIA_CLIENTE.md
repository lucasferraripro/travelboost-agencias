# Memória por Cliente

> Cada cliente tem sua conta. Nada se perde entre sessões.

---

## Sistema de Contas

### Login
```
Email: contato@agencia.com.br
Senha: definida no cadastro
```

### O Que Fica Salvo

```json
{
  "clienteId": "uuid-unico",
  "email": "contato@agencia.com.br",
  "criadoEm": "2026-04-21T10:00:00Z",
  "ultimoAcesso": "2026-04-21T15:30:00Z",
  
  "perfil": {
    "nome": "Mundo Viagens",
    "responsavel": "Maria Silva",
    "cidade": "Fortaleza - CE",
    "instagram": "@mundoviagens",
    "whatsapp": "(85) 99999-9999",
    "tipoAgencia": "pequena",
    "tempoMercado": "2",
    "logoUrl": "https://s3.amazonaws.com/travelboost/clientes/uuid/logo.png",
    "corPrimaria": "#FF6B35",
    "corSecundaria": "#004E89"
  },
  
  "diagnostico": {
    "dataAnalise": "21/04/2026",
    "scoreTotal": 42,
    "dimensoes": {
      "presenca": 35,
      "conteudo": 20,
      "vendas": 60,
      "trafego": 15,
      "conversao": 45
    },
    "nivel": 2,
    "nivelLabel": "Em Desenvolvimento",
    "carroChefe": "nordeste",
    "querVender": "nordeste",
    "destinosNac": ["natal", "maceio", "porto-galinhas"],
    "destinosIntl": ["cancun"],
    "desafio": "tempo",
    "problemas": ["sem_reels", "sem_posts", "sem_anuncio"]
  },
  
  "progresso": {
    "fase1Completa": true,
    "fase2Completa": false,
    "fase3Completa": false,
    "fase4Completa": false,
    "checklistConcluidos": ["cl-abc123", "cl-def456"],
    "percentualGeral": 25
  },
  
  "site": {
    "subdominio": "mundoviagens",
    "url": "https://mundoviagens.travelboost.io",
    "deployStatus": "published",
    "ultimaAtualizacao": "2026-04-21T16:00:00Z"
  },
  
  "pacotes": [
    {
      "id": "pac-001",
      "nome": "Natal Inesquecível",
      "destino": "Natal - RN",
      "preco": 1800,
      "descricao": "5 noites com aéreo + hotel beira-mar + café da manhã",
      "ativo": true,
      "destaque": true
    }
  ]
}
```

---

## Sistema de Progresso

### Indicador Visual
```
FASE 1 ████████████████████ 100% ✅
FASE 2 ████████░░░░░░░░░░░░  40% 🔄
FASE 3 ░░░░░░░░░░░░░░░░░░░░   0% ⏳
FASE 4 ░░░░░░░░░░░░░░░░░░░░   0% ⏳
```

### Cálculo do Progresso
```javascript
function calcularProgresso(cliente) {
  let pontos = 0
  
  // Fase 1 — Diagnóstico (25 pontos)
  if (cliente.progresso.fase1Completa) pontos += 25
  
  // Fase 2 — Entregáveis (25 pontos)
  const totalChecklist = 15 // total de itens
  const concluidos = cliente.progresso.checklistConcluidos.length
  pontos += Math.round((concluidos / totalChecklist) * 25)
  
  // Fase 3 — Artes (25 pontos)
  if (cliente.progresso.fase3Completa) pontos += 25
  
  // Fase 4 — Site (25 pontos)
  if (cliente.progresso.fase4Completa) pontos += 25
  
  return pontos // 0–100
}
```

---

## Banco de Dados

### Estrutura (PostgreSQL)

```sql
-- Tabela de clientes
CREATE TABLE clientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW(),
  ultimo_acesso TIMESTAMP
);

-- Tabela de perfis
CREATE TABLE perfis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID REFERENCES clientes(id),
  nome VARCHAR(255),
  responsavel VARCHAR(255),
  cidade VARCHAR(255),
  instagram VARCHAR(100),
  whatsapp VARCHAR(20),
  tipo_agencia VARCHAR(50),
  tempo_mercado VARCHAR(10),
  logo_url TEXT,
  cor_primaria VARCHAR(7),
  cor_secundaria VARCHAR(7),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

-- Tabela de diagnósticos
CREATE TABLE diagnosticos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID REFERENCES clientes(id),
  data_analise DATE DEFAULT CURRENT_DATE,
  score_total INTEGER,
  score_presenca INTEGER,
  score_conteudo INTEGER,
  score_vendas INTEGER,
  score_trafego INTEGER,
  score_conversao INTEGER,
  nivel INTEGER,
  carro_chefe VARCHAR(50),
  dados_raw JSONB,
  criado_em TIMESTAMP DEFAULT NOW()
);

-- Tabela de progresso
CREATE TABLE progresso (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID REFERENCES clientes(id),
  fase1_completa BOOLEAN DEFAULT FALSE,
  fase2_completa BOOLEAN DEFAULT FALSE,
  fase3_completa BOOLEAN DEFAULT FALSE,
  fase4_completa BOOLEAN DEFAULT FALSE,
  checklist_concluidos TEXT[] DEFAULT '{}',
  atualizado_em TIMESTAMP DEFAULT NOW()
);

-- Tabela de pacotes
CREATE TABLE pacotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID REFERENCES clientes(id),
  nome VARCHAR(255),
  destino VARCHAR(255),
  preco DECIMAL(10,2),
  descricao TEXT,
  foto_url TEXT,
  ativo BOOLEAN DEFAULT TRUE,
  destaque BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMP DEFAULT NOW()
);

-- Tabela de sites
CREATE TABLE sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cliente_id UUID REFERENCES clientes(id),
  subdominio VARCHAR(100) UNIQUE,
  url TEXT,
  deploy_status VARCHAR(50),
  ultima_atualizacao TIMESTAMP DEFAULT NOW()
);
```

---

## Cache (Redis)

```javascript
// Sessão do cliente (24h)
redis.set(`session:${sessionId}`, JSON.stringify(clienteData), 'EX', 86400)

// Diagnóstico em cache (evita recalcular)
redis.set(`diagnostico:${clienteId}`, JSON.stringify(scoreData), 'EX', 3600)

// Entregáveis gerados (cache por nicho)
redis.set(`entregaveis:${nicho}`, JSON.stringify(entregaveis), 'EX', 86400)
```

---

## Autenticação

### Fluxo de Login
```javascript
// 1. Cliente entra com email + senha
// 2. Sistema verifica hash da senha (bcrypt)
// 3. Gera JWT token (24h de validade)
// 4. Carrega todos os dados do cliente
// 5. Redireciona para onde parou (fase atual)

async function login(email, senha) {
  const cliente = await db.clientes.findOne({ email })
  if (!cliente) throw new Error('Email não encontrado')
  
  const senhaValida = await bcrypt.compare(senha, cliente.senhaHash)
  if (!senhaValida) throw new Error('Senha incorreta')
  
  const token = jwt.sign({ clienteId: cliente.id }, JWT_SECRET, { expiresIn: '24h' })
  
  // Carrega dados completos
  const dados = await carregarDadosCliente(cliente.id)
  
  return { token, dados }
}
```

### Recuperação de Senha
- Email com link de reset (válido por 1h)
- Novo hash gerado após reset

---

## Múltiplos Diagnósticos

O cliente pode fazer o diagnóstico mais de uma vez (ex: após melhorias).

- Cada diagnóstico é salvo com data/hora
- Sistema mostra evolução do score ao longo do tempo
- Gráfico de progresso: score atual vs score anterior
- Respostas NUNCA são iguais (variação por hash + data)

```javascript
// Histórico de diagnósticos
const historico = await db.diagnosticos.findAll({
  where: { clienteId },
  order: [['criado_em', 'DESC']]
})

// Mostra evolução
// Diagnóstico 1 (01/04): 28 pontos
// Diagnóstico 2 (21/04): 42 pontos (+14 pontos ↑)
```
