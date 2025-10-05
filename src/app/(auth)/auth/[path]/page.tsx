import { AuthView } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

export default function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  return (
    <main className="container flex grow flex-col items-center justify-center self-center p-4 md:p-6">
      <AuthViewWrapper params={params} />
    </main>
  );
}

async function AuthViewWrapper({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;
  
  return <AuthView path={path} redirectTo="/dashboard" />;
}