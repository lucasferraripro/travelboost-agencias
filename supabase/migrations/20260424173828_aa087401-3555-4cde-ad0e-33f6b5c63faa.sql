-- Tabela para salvar diagnósticos da Fábrica
CREATE TABLE public.fabrica_diagnosticos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  agency_name TEXT NOT NULL,
  digital_score INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  level_name TEXT,
  state_snapshot JSONB NOT NULL,
  checklist_progress JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.fabrica_diagnosticos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own diagnosticos"
ON public.fabrica_diagnosticos FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own diagnosticos"
ON public.fabrica_diagnosticos FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own diagnosticos"
ON public.fabrica_diagnosticos FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own diagnosticos"
ON public.fabrica_diagnosticos FOR DELETE
USING (auth.uid() = user_id);

CREATE INDEX idx_fabrica_diagnosticos_user_id ON public.fabrica_diagnosticos(user_id);

CREATE TRIGGER update_fabrica_diagnosticos_updated_at
BEFORE UPDATE ON public.fabrica_diagnosticos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();