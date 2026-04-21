# TravelBoost — Skills de Marketing para Agências de Viagens

## Contexto do Projeto

Sistema completo de transformação digital para agências de viagens.
Produto: **TravelBoost / Canva Viagem**
Criador: Lucas Ferrari (@lucasferrari.pro)
Stack: HTML/CSS/JS puro (frontend), Python + Claude API (backend), Banana Pro API (geração de artes)

## Identidade do Sistema

- Nome do produto: **TravelBoost**
- Nome da ferramenta interna: **Canva Viagem**
- Cores principais: `#FF6B35` (laranja), `#004E89` (azul), `#F7B801` (amarelo), `#10B981` (verde)
- Público-alvo: Agentes de viagem autônomos e pequenas agências brasileiras
- Proposta: Diagnóstico + Identidade + Conteúdo + Campanhas em 1 hora

## Fluxo Completo do Sistema (4 Fases)

### FASE 1 — Diagnóstico de Perfil
- Formulário com 5 blocos: Dados, Presença Digital, Vendas, Pacotes/Nicho, Gargalos
- Score 0–100 por dimensão: Presença, Conteúdo, Vendas, Tráfego, Conversão
- Nível 1–5: Iniciante → Em Desenvolvimento → Em Crescimento → Estabelecida → Referência
- Gargalos dinâmicos (vermelho/amarelo/verde) baseados no score
- Checklist de ação em 3 fases (imediata, 15 dias, mês 2+)
- Respostas NUNCA podem ser iguais — usar variação por hash + data

### FASE 2 — Entregáveis Prontos
- Vídeos recomendados filtrados por nicho/carro-chefe (banco de 150 vídeos)
- Legendas personalizadas filtradas por destino/estilo (banco de 200+ captions)
- Ofertas prontas por nicho (nordeste, sul, internacional, cruzeiro, aventura)
- Checklist 30 dias organizado por semana
- Plano de ação com tarefas priorizadas

### FASE 3 — Criação de Artes (Banana Pro API)
- Upload de logo do cliente (salvo no perfil)
- Templates pré-definidos: feed quadrado + story vertical
- Geração via Banana Pro API com logo + cores do cliente
- Download direto sem sair da plataforma
- Área reservada para colar prompts/templates de arte

### FASE 4 — Site do Cliente
- Formulário coleta: cores, logo, pacotes, nome, cidade, WhatsApp
- Gera site completo com identidade visual do cliente
- Dashboard admin para o cliente editar sozinho (login/senha)
- Adiciona pacotes e ofertas dentro do site
- Deploy automático (Vercel/GitHub Pages)

## Memória por Cliente
- Login simples (email + senha)
- Perfil salvo com todos os dados do diagnóstico
- Sistema de "progresso" — mostra em qual fase ele está
- Nada se perde entre sessões

## Nichos Suportados
- `nordeste` — Praia Nordeste (Natal, Maceió, Fortaleza, Porto de Galinhas...)
- `sul` — Praia Sul/Sudeste (Floripa, Rio, Gramado, Búzios...)
- `internacional` — Europa, EUA, Cancún, Dubai, Bali...
- `cruzeiro` — Cruzeiros nacionais e internacionais
- `aventura` — Ecoturismo, Bonito, Chapada, Foz do Iguaçu
- `religioso` — Turismo religioso
- `misto` — Múltiplos destinos

## Regras de Geração de Conteúdo
- Respostas variam por hash(score + nome + data) — nunca repetir
- Gargalos: máximo 5, priorizados por criticidade
- Checklist: fase 1 (urgente), fase 2 (15 dias), fase 3 (mês 2+)
- Legendas: sempre incluir CTA + WhatsApp placeholder `(99) 99999-9999`
- Ofertas: sempre incluir parcelamento + urgência

## Objetivo Final do Cliente
Ter em 1 hora:
1. Diagnóstico do perfil com score real
2. Vídeos prontos para postar hoje
3. Legendas prontas para copiar-colar
4. Ofertas prontas para WhatsApp e feed
5. Checklist de 30 dias para seguir
6. Artes com identidade visual própria
7. Site profissional com dashboard
8. Direcionamento para campanhas pagas

## Métricas de Sucesso
- Leads/dia: de 0–2 → 10–15 (primeira semana)
- Engagement: +300% em 30 dias
- Taxa de fechamento: +35%
- Tempo de setup: 1 hora (vs 4–6 semanas manual)
