#!/usr/bin/env python3
"""
TRAVELBOOST - Sistema Completo de Transformação para Agências de Viagens
Diagnóstico + Identidade Visual + Conteúdo + Campanhas
Gerado em 1 HORA com IA
"""

import json
import os
from typing import Optional
import anthropic

client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

# ============================================================================
# FASE 1: DIAGNÓSTICO INTELIGENTE
# ============================================================================

def diagnose_agency(agency_data: dict) -> dict:
    """Analisa agência e gera scorecard de diagnóstico."""
    
    prompt = f"""
Você é um especialista em marketing digital para agências de viagem. 
Analise os dados da agência e gere um diagnóstico completo.

DADOS DA AGÊNCIA:
- Nome: {agency_data.get('name', 'Agência XYZ')}
- Localização: {agency_data.get('location', 'Brasil')}
- Faturamento mensal: {agency_data.get('revenue', 'Desconhecido')}
- Nichos: {agency_data.get('niches', 'Geral')}
- Canais atuais: {agency_data.get('channels', 'Desconhecido')}
- Problemas principais: {agency_data.get('problems', 'Genéricos')}
- Equipe: {agency_data.get('team', 'Solo')}

Gere:
1. SCORECARD (0-100 para cada métrica):
   - Presença Online
   - Monetização
   - Mobile Experience
   - Identidade Visual
   - Marketing Ativo
   - Automação
   - Conteúdo

2. TOP 7 PONTOS DE MELHORIA (por prioridade)

3. RECOMENDAÇÃO PERSONALIZADA (2-3 linhas)

Formato JSON:
{{
  "scorecard": {{"métrica": pontuação}},
  "improvements": ["ponto1", "ponto2"],
  "recommendation": "texto"
}}
"""

    message = client.messages.create(
        model="claude-opus-4-20250805",
        max_tokens=1500,
        messages=[{"role": "user", "content": prompt}]
    )
    
    # Parse resposta
    response_text = message.content[0].text
    # Extrai JSON
    try:
        json_start = response_text.find('{')
        json_end = response_text.rfind('}') + 1
        diagnosis = json.loads(response_text[json_start:json_end])
    except:
        diagnosis = {"raw": response_text}
    
    return diagnosis

# ============================================================================
# FASE 2: IDENTIDADE VISUAL MARCANTE
# ============================================================================

def generate_brand_identity(agency_data: dict) -> dict:
    """Gera 5 direções de marca visual."""
    
    prompt = f"""
Você é um designer de marca especializado em viagens. 
Crie 5 DIREÇÕES COMPLETAMENTE DIFERENTES de identidade visual para a agência:

Nome: {agency_data.get('name', 'Agência')}
Nichos: {agency_data.get('niches', 'Geral')}
Público: {agency_data.get('target', 'Brasileiros 25-50 anos')}
Valores: {agency_data.get('values', 'Confiança, Inovação, Qualidade')}

Para CADA direção, crie:

DIREÇÃO 1: [NOME CRIATIVO]
- Conceito: [Ideia central]
- Logo: [Descrição visual]
- Cores Principais (hex): [#XXXXXX, #XXXXXX, #XXXXXX]
- Tipografia: [Font 1 para headers, Font 2 para body]
- Estilo Fotográfico: [Descrição]
- Tom de Voz: [Formal/Casual/Aventureiro]
- Aplicação: [Instagram Story, Website, Anúncio]

[Repita para direções 2-5]

Garanta que cada direção seja TOTALMENTE diferente.
Formato: Markdown estruturado.
"""

    message = client.messages.create(
        model="claude-opus-4-20250805",
        max_tokens=2500,
        messages=[{"role": "user", "content": prompt}]
    )
    
    brand_directions = message.content[0].text
    
    return {
        "directions": brand_directions,
        "note": "Escolha uma direção ou peça para fusionar elementos de 2-3 direções"
    }

# ============================================================================
# FASE 3: PLANO DE AÇÃO (30 DIAS)
# ============================================================================

def generate_action_plan(agency_data: dict) -> dict:
    """Gera plano de ação estruturado."""
    
    prompt = f"""
Você é um stratega de marketing digital. 
Crie um plano de ação específico para: {agency_data.get('name', 'Agência')}

Nicho: {agency_data.get('niches', 'Viagens em geral')}
Público: {agency_data.get('target', 'Brasileiro 25-50')}

Gere:

# PLANO DE AÇÃO - 30 DIAS

## SEMANA 1: Brand Rollout + Setup
### Tarefas Imediatas (prioridade máxima)
- [ ] [Tarefa 1] - [Tempo estimado]
- [ ] [Tarefa 2]
- [ ] [Tarefa 3]
[Continue...]

### Documentos Necessários
- [Documento 1]: Descrição
- [Documento 2]: Descrição
[Continue...]

## SEMANA 2-4: Conteúdo + Campanhas
[Similar estrutura]

## MÉTRICAS ESPERADAS (Dia 1 vs Dia 30)
- Leads/dia: X → Y
- Engagement: X% → Y%
[Continue...]

Estrutura em Markdown. Seja específico e actionable.
"""

    message = client.messages.create(
        model="claude-opus-4-20250805",
        max_tokens=2000,
        messages=[{"role": "user", "content": prompt}]
    )
    
    action_plan = message.content[0].text
    return {"action_plan": action_plan}

# ============================================================================
# FASE 4: CONTEÚDO 30 DIAS
# ============================================================================

def generate_content_calendar(agency_data: dict) -> dict:
    """Gera 30 posts prontos para publicar."""
    
    prompt = f"""
Você é um criador de conteúdo para agências de viagem.
Gere um CALENDÁRIO DE CONTEÚDO com 30 POSTS ÚNICOS para:

Agência: {agency_data.get('name', 'Agência')}
Nichos: {agency_data.get('niches', 'Praia, Aventura')}
Público: {agency_data.get('target', 'Mulheres 25-45, Classe A/B')}
Tom: {agency_data.get('tone', 'Inspirador, Confiável, Aventureiro')}

ESTRUTURA PARA CADA POST:
DIA [N]
TIPO: [Instagram Post | Reel | Story | TikTok]
TEMA: [Tema principal]
COPY: [Texto exato para publicar - máx 300 caracteres para post, máx 30 seg para vídeo]
VISUAL: [Descrição do visual/vídeo]
CTA: [Call-to-action específico]
---

Inclua variedade:
- 5 Posts Educativos (Dicas de viagem)
- 5 Posts Testemunho (Histórias de clientes)
- 5 Posts Promocionais (Ofertas, pacotes)
- 5 Posts Engagement (Enquetes, perguntas)
- 4 Reels Curtos (15-30s)
- 1 Por dia no padrão abaixo

Seja criativo, específico e pronto para copiar-colar.
Formato: Markdown estruturado, fácil de ler.
"""

    message = client.messages.create(
        model="claude-opus-4-20250805",
        max_tokens=4000,
        messages=[{"role": "user", "content": prompt}]
    )
    
    calendar = message.content[0].text
    return {"calendar": calendar}

# ============================================================================
# FASE 5: CAMPANHAS ONLINE
# ============================================================================

def generate_campaigns(agency_data: dict) -> dict:
    """Gera 5 campanhas pré-estruturadas."""
    
    prompt = f"""
Você é um especialista em tráfego pago para agências de viagem.
Crie 5 CAMPANHAS PRONTAS para Meta Ads, Google Ads e TikTok Ads:

Agência: {agency_data.get('name', 'Agência')}
Nicho: {agency_data.get('niches', 'Viagens')}
Público: {agency_data.get('target', 'Mulheres 25-50')}
Budget estimado: {agency_data.get('budget', 'R$500-1000/mês')}

Para CADA CAMPANHA:

## CAMPANHA [N]: [NOME]

**Objetivo:** [Awareness | Consideration | Conversion]
**Público-alvo:** [Descrição demográfica e de interesse]
**Duração:** [X dias | Contínua]
**Budget Recomendado:** R$XXX/mês

### Copy Principal (Headline)
[Texto para Meta Ads - máx 30 caracteres]

### Copy Secundário (Body)
[Texto descritivo - máx 300 caracteres]

### Copy Terciário (CTA)
[Call-to-action botão]

### Estratégia de Público
- Frio: [Descrição]
- Morno: [Descrição]
- Quente: [Descrição]

### Assets Necessários
- [Vídeo 1]: [Descrição]
- [Imagem 1]: [Descrição]

### Sequência de Follow-up
[Email ou WhatsApp automático]

---

Seja ESPECÍFICO, PRONTO PARA EXECUTAR, com copy que CONVERTE.
5 campanhas, cada uma diferente em objetivo e público.
"""

    message = client.messages.create(
        model="claude-opus-4-20250805",
        max_tokens=3500,
        messages=[{"role": "user", "content": prompt}]
    )
    
    campaigns = message.content[0].text
    return {"campaigns": campaigns}

# ============================================================================
# ORQUESTRADOR PRINCIPAL
# ============================================================================

def run_travelboost(agency_data: dict) -> dict:
    """Executa todo o sistema TravelBoost em sequência."""
    
    print("\n" + "="*70)
    print("🚀 TRAVELBOOST - SISTEMA COMPLETO EM EXECUÇÃO")
    print("="*70)
    
    # FASE 1: Diagnóstico
    print("\n📊 FASE 1: Analisando agência...")
    diagnosis = diagnose_agency(agency_data)
    print("✅ Diagnóstico completo")
    
    # FASE 2: Brand
    print("\n🎨 FASE 2: Gerando identidade visual...")
    brand = generate_brand_identity(agency_data)
    print("✅ 5 direções de marca criadas")
    
    # FASE 3: Plano
    print("\n📋 FASE 3: Criando plano de ação...")
    plan = generate_action_plan(agency_data)
    print("✅ Plano 30 dias estruturado")
    
    # FASE 4: Conteúdo
    print("\n📱 FASE 4: Gerando calendário de conteúdo...")
    content = generate_content_calendar(agency_data)
    print("✅ 30 posts prontos para publicar")
    
    # FASE 5: Campanhas
    print("\n📢 FASE 5: Estruturando campanhas...")
    campaigns = generate_campaigns(agency_data)
    print("✅ 5 campanhas pré-estruturadas")
    
    # Retorno final
    result = {
        "agency": agency_data.get('name', 'Agência'),
        "execution_status": "✅ COMPLETO",
        "phases": {
            "1_diagnosis": diagnosis,
            "2_brand_identity": brand,
            "3_action_plan": plan,
            "4_content_calendar": content,
            "5_campaigns": campaigns
        },
        "next_steps": [
            "1. Escolha a direção de marca que mais gostou",
            "2. Copie os 30 posts para seu Canva/Buffer",
            "3. Crie as 5 campanhas no Meta Ads Manager",
            "4. Configure automações WhatsApp/Email",
            "5. Comece a receber leads HOJE"
        ]
    }
    
    return result

# ============================================================================
# EXEMPLO DE USO
# ============================================================================

if __name__ == "__main__":
    
    # Dados de exemplo (você pode trocar por outra agência)
    example_agency = {
        "name": "Mundo Viagens - Fortaleza",
        "location": "Fortaleza, Ceará",
        "revenue": "R$ 15.000/mês",
        "niches": "Praia, Aventura, Luxo",
        "channels": "Instagram, WhatsApp",
        "problems": "Sem conteúdo, falta de leads, concorrência forte",
        "team": "Solo (proprietária)",
        "target": "Mulheres 30-50, Classe A/B, amam viajar",
        "values": "Confiança, Qualidade, Inovação",
        "tone": "Inspirador, Amigável, Profissional",
        "budget": "R$ 500-1000/mês"
    }
    
    # Executa o sistema
    results = run_travelboost(example_agency)
    
    # Exibe resultados
    print("\n" + "="*70)
    print("📤 RESULTADOS FINAIS")
    print("="*70)
    
    # Diagnóstico
    print("\n1️⃣  DIAGNÓSTICO:")
    if "scorecard" in results["phases"]["1_diagnosis"]:
        for metric, score in results["phases"]["1_diagnosis"]["scorecard"].items():
            print(f"   {metric}: {score}/100")
    else:
        print(results["phases"]["1_diagnosis"]["raw"][:500] + "...")
    
    # Brand
    print("\n2️⃣  IDENTIDADE VISUAL:")
    print(results["phases"]["2_brand_identity"]["note"])
    print("\nPrimeira direção:")
    print(results["phases"]["2_brand_identity"]["directions"][:400] + "...\n")
    
    # Plano
    print("\n3️⃣  PLANO DE AÇÃO (Primeiras linhas):")
    plan_text = results["phases"]["3_action_plan"]["action_plan"]
    print(plan_text[:500] + "...\n")
    
    # Conteúdo
    print("\n4️⃣  CALENDÁRIO DE CONTEÚDO (Primeiros dias):")
    calendar = results["phases"]["4_content_calendar"]["calendar"]
    print(calendar[:500] + "...\n")
    
    # Campanhas
    print("\n5️⃣  CAMPANHAS ONLINE (Primeira campanha):")
    campaigns = results["phases"]["5_campaigns"]["campaigns"]
    print(campaigns[:500] + "...\n")
    
    # Próximos passos
    print("\n" + "="*70)
    print("✅ PRÓXIMOS PASSOS:")
    for step in results["next_steps"]:
        print(f"   {step}")
    
    print("\n" + "="*70)
    print("🎉 SISTEMA EXECUTADO COM SUCESSO!")
    print("="*70 + "\n")
    
    # Salva resultado completo em JSON
    with open("travelboost_result.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print("📁 Resultado salvo em: travelboost_result.json")
