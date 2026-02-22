import { createClient } from "@/lib/supabase/server";
import DashboardContent from "./DashboardContent";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // TODO: re-enable auth check once login is wired up
  // if (!user) redirect("/login");

  return <DashboardContent email={user?.email ?? "demo@brightsmile.com"} />;
}
