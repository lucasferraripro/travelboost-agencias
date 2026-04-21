# Roadmap Técnico

---

## Status Atual

| Componente | Status | Arquivo |
|-----------|--------|---------|
| Formulário de diagnóstico (Fase 1) | ✅ Pronto | `sistema-agencia.html` |
| Scoring engine | ✅ Pronto | `sistema-agencia.html` |
| Gargalos dinâmicos | ✅ Pronto | `sistema-agencia.html` |
| Checklist de ação | ✅ Pronto | `sistema-agencia.html` |
| Banco de vídeos (Fase 2) | ✅ Pronto | `sistema-agencia.html` |
| Banco de legendas | ✅ Pronto | `sistema-agencia.html` |
| Banco de ofertas | ✅ Pronto | `sistema-agencia.html` |
| Checklist 30 dias | ✅ Pronto | `sistema-agencia.html` |
| Landing page de vendas | ✅ Pronto | `arquivos/landing_page_travelboost.html` |
| Script de live | ✅ Pronto | `arquivos/SCRIPT_LIVE_TRAVELBOOST.md` |
| Backend Python + Claude API | ✅ Pronto | `arquivos/travelboost_system.py` |
| Criação de artes (Fase 3) | ⏳ Pendente | — |
| Site do cliente (Fase 4) | ⏳ Pendente | — |
| Sistema de login/memória | ⏳ Pendente | — |
| Dashboard admin | ⏳ Pendente | — |
| Deploy automático | ⏳ Pendente | — |

---

## MVP — O Que Já Funciona

O `sistema-agencia.html` já entrega as Fases 1 e 2 completas:

1. Formulário em 5 blocos com navegação
2. Scoring engine com 5 dimensões
3. Resultado com score + nível + gargalos + checklist
4. Fase 2 com vídeos + legendas + ofertas + checklist 30 dias
5. Botões de copiar texto, compartilhar no WhatsApp, imprimir PDF

**Problema atual:** encoding UTF-8 quebrado nos comentários do JS (caracteres `Ã©`, `â€"` etc.) — precisa corrigir.

---

## Próximas Implementações

### Sprint 1 — Correções e Melhorias (Semana 1–2)
- [ ] Corrigir encoding UTF-8 no `sistema-agencia.html`
- [ ] Remover `"""` Python do topo da landing page
- [ ] Unificar branding: "Canva Viagem" → "TravelBoost"
- [ ] Adicionar mais variações de gargalos e respostas
- [ ] Expandir banco de vídeos (150 total)
- [ ] Expandir banco de legendas (200+ total)

### Sprint 2 — Login e Memória (Semana 3–4)
- [ ] Sistema de cadastro/login (email + senha)
- [ ] Banco de dados PostgreSQL
- [ ] Salvar diagnóstico por cliente
- [ ] Histórico de diagnósticos (evolução do score)
- [ ] Sistema de progresso por fase

### Sprint 3 — Fase 3: Artes (Semana 5–6)
- [ ] Upload de logo do cliente
- [ ] Integração Banana Pro API
- [ ] Templates de feed quadrado (3 modelos)
- [ ] Templates de story vertical (2 modelos)
- [ ] Download direto das artes geradas

### Sprint 4 — Fase 4: Site (Semana 7–8)
- [ ] Formulário de coleta de dados do site
- [ ] Template HTML base com variáveis
- [ ] Sistema de substituição de variáveis
- [ ] Deploy automático (Vercel API)
- [ ] Dashboard admin básico (editar pacotes)

### Sprint 5 — Campanhas e Polimento (Semana 9–10)
- [ ] Tutorial de campanhas dentro da plataforma
- [ ] Copy gerado automaticamente por campanha
- [ ] Checklist de lançamento de campanha
- [ ] Analytics básico (visitas ao site)
- [ ] Notificações por email (progresso)

---

## Stack Técnico Detalhado

### Frontend
```
HTML5 + CSS3 + JavaScript (vanilla)
→ Zero dependências externas
→ Mobile-first (375px base)
→ Funciona offline (dados em localStorage)
```

### Backend (quando implementar login)
```
Node.js + Express
→ ou Python + FastAPI
→ JWT para autenticação
→ bcrypt para senhas
```

### Banco de Dados
```
PostgreSQL (dados principais)
Redis (cache de sessões e entregáveis)
AWS S3 (logos e imagens dos clientes)
```

### APIs Externas
```
Claude API (Anthropic) → Geração de copy personalizado
Banana Pro API → Geração de artes
Vercel API → Deploy automático de sites
Twilio → WhatsApp automático
```

### Deploy
```
Frontend: Vercel / Netlify
Backend: Railway / Render
Banco: Supabase (PostgreSQL gerenciado)
Storage: AWS S3 / Cloudflare R2
```

---

## Correções Urgentes no Código Atual

### 1. Encoding UTF-8 Quebrado
O arquivo `sistema-agencia.html` tem caracteres corrompidos nos comentários e strings JS. Causa: arquivo foi salvo/editado com encoding errado.

**Solução:** Reescrever as strings afetadas com os caracteres corretos.

### 2. Landing Page com Sintaxe Python
O arquivo `arquivos/landing_page_travelboost.html` começa com:
```python
"""
LANDING PAGE TRAVELBOOST
...
"""
```
Isso não é HTML válido. Remover as 6 primeiras linhas.

### 3. Branding Inconsistente
- `sistema-agencia.html` usa "Canva Viagem"
- Demais arquivos usam "TravelBoost"

**Decisão necessária:** Qual nome usar? Sugestão: TravelBoost como marca principal, "Canva Viagem" como nome do produto/ferramenta.
