export default function BaseContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`border border-black p-4 ${className}`}>{children}</div>;
}
