import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className="text-slate-900 font-semibold">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all duration-200"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-xl">
      {content}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Mail className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-slate-900">Contact</h1>
      </div>

      <div className="h-1 w-20 bg-blue-600 rounded-full"></div>

      <p className="text-lg text-slate-600">
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
          icon={Linkedin}
          label="LinkedIn"
          value="linkedin.com/in/yourprofile"
          href="https://linkedin.com/in/yourprofile"
        />

        <ContactItem
          icon={Github}
          label="GitHub"
          value="github.com/yourusername"
          href="https://github.com/yourusername"
        />

        <ContactItem
          icon={Globe}
          label="Website"
          value="www.yourwebsite.com"
          href="https://www.yourwebsite.com"
        />
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100">
        <h3 className="font-semibold text-slate-900 mb-2">Available for</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
            Consulting
          </span>
          <span className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
            Collaborations
          </span>
          <span className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
            Speaking Engagements
          </span>
        </div>
      </div>
    </div>
  );
}
