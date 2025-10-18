interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage?: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent -z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
