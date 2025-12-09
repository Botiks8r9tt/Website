import { Mail, Phone, MapPin, Github } from 'lucide-react';

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
        <p className="text-slate-900 dark:text-white font-semibold">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl">
      {content}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Mail className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Contact</h1>
      </div>

      <div className="h-1 w-20 bg-blue-600 rounded-full"></div>

      <p className="text-lg text-slate-600 dark:text-slate-400">
        Let's connect! Feel free to reach out through any of the following channels.
      </p>

      <div className="grid gap-4 mt-8">
        <ContactItem
          icon={Mail}
          label="Email"
          value="your.email@example.com"
          href="mailto:your.email@example.com"
        />

        <ContactItem
          icon={Phone}
          label="Phone"
          value="+1 (555) 123-4567"
          href="tel:+15551234567"
        />

        <ContactItem
          icon={MapPin}
          label="Location"
          value="Your City, Country"
        />

        <ContactItem
          icon={Github}
          label="GitHub"
          value="github.com/yourusername"
          href="https://github.com/yourusername"
        />
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-blue-100 dark:border-slate-600">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Available for</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-600">
            Consulting
          </span>
          <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-600">
            Collaborations
          </span>
          <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-600">
            Speaking Engagements
          </span>
        </div>
      </div>
    </div>
  );
}
