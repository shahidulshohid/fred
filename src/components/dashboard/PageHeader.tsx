

// components/PageHeader.tsx
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  userName?: string;
  className?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  userName,
  className = "" 
}: PageHeaderProps) {
  const displayTitle = userName ? `Welcome back, ${userName}` : title;
  
  return (
    <div className={`mb-2 ${className}`}>
      <h1 className="text-2xl font-bold text-[#252525] mb-1">
        {displayTitle}
      </h1>
      {subtitle && (
        <p className="text-[#5C5C5C] text-[16px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}