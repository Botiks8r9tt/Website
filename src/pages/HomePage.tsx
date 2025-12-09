export default function HomePage() {
  return (
    <div className="flex flex-col justify-center min-h-[500px]">
      <div className="space-y-6">
        <div className="inline-block">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Welcome
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
          Your Full Name
        </h1>

        <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-light">
          Professional Title / Role
        </h2>

        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          A brief introduction about who you are and what you do. This is your
          elevator pitch that captures your professional essence and what makes
          you unique in your field.
        </p>
      </div>
    </div>
  );
}
