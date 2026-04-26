import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { User, Crown, Calendar, LogOut, ExternalLink, Loader2, Factory, Trash2, FileDown } from "lucide-react";
import { useDiagnosticos, useDeleteDiagnostico } from "@/hooks/useFabricaDiagnosticos";
import { generateDiagnosticoPDF } from "@/lib/fabrica-pdf";

interface ProfileData {
  name: string | null;
  email: string | null;
}

export default function MinhaConta() {
  const { user, subscription, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileData>({ name: null, email: null });
  const [loadingPortal, setLoadingPortal] = useState(false);
  const { data: diagnosticos = [] } = useDiagnosticos();
  const deleteDiag = useDeleteDiagnostico();

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("name, email")
        .eq("user_id", user.id)
        .maybeSingle();
      setProfile({
        name: (data as { name?: string | null; email?: string | null } | null)?.name || null,
        email: (data as { name?: string | null; email?: string | null } | null)?.email || user.email || null,
      });
    };
    fetchProfile();
  }, [user]);

  const handleManageSubscription = async () => {
    setLoadingPortal(true);
    try {
      const { data, error } = await supabase.functions.invoke("stripe-dashboard", {});
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch {
      // fallback: redirect to plans page
      navigate("/planos");
    } finally {
      setLoadingPortal(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  const displayName = profile.name || user?.email?.split("@")[0] || "Usuário";
  const displayEmail = profile.email || user?.email || "";

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null;
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">Minha Conta</h1>

        {/* Perfil */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Meu Perfil
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold flex-shrink-0">
              {avatarLetter}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-foreground truncate">{displayName}</p>
              <p className="text-sm text-muted-foreground truncate">{displayEmail}</p>
            </div>
          </CardContent>
        </Card>

        {/* Plano */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Crown className="h-4 w-4 text-primary" />
              Meu Plano
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subscription.loading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Verificando plano...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  {subscription.subscribed ? (
                    <Badge className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-3 py-1">
                      PRO
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      Gratuito
                    </Badge>
                  )}
                  {subscription.subscribed && (
                    <span className="text-sm text-muted-foreground">Acesso ilimitado</span>
                  )}
                </div>

                {subscription.subscribed && subscription.subscriptionEnd && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Acesso até: {formatDate(subscription.subscriptionEnd)}</span>
                  </div>
                )}

                {subscription.subscribed ? (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleManageSubscription}
                    disabled={loadingPortal}
                  >
                    {loadingPortal ? (
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : (
                      <ExternalLink className="h-4 w-4 mr-2" />
                    )}
                    Gerenciar Assinatura
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => navigate("/planos")}
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    Ver Planos PRO
                  </Button>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Diagnósticos da Fábrica */}
        {diagnosticos.length > 0 && (
          <Card className="mb-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Factory className="h-4 w-4 text-primary" />
                Meus Diagnósticos da Fábrica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {diagnosticos.map((d) => (
                <div key={d.id} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/30">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">{d.agency_name}</p>
                    <p className="text-xs text-muted-foreground">
                      Score {d.digital_score}/100 · Nível {d.level} {d.level_name ? `— ${d.level_name}` : ""}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {new Date(d.updated_at).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => generateDiagnosticoPDF(d.state_snapshot as any)} title="Baixar PDF">
                    <FileDown className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => navigate("/fabrica")} title="Continuar">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      if (confirm(`Remover diagnóstico de ${d.agency_name}?`)) deleteDiag.mutate(d.id);
                    }}
                    className="text-destructive hover:text-destructive"
                    title="Remover"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Sair */}
        <Card>
          <CardContent className="pt-6">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair da conta
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
