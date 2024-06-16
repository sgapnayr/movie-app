export default function BaseContainer({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`border border-black p-4 ${className}`}>
      {children}
    </div>
  );
}
