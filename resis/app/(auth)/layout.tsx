export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark"> 
      <div className="bg-background min-h-screen">
        {children}
      </div>
    </div>
  );
}