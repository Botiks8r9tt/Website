import { BookOpen } from 'lucide-react';

export default function BiographyPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Biography</h1>
      </div>

      <div className="h-1 w-20 bg-blue-600 rounded-full"></div>

      <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="text-lg">
          Your comprehensive biography goes here. Share your professional journey,
          educational background, and the experiences that have shaped your career.
        </p>

        <p>
          Describe your early interests and how they led you to your current field.
          Include details about your educational achievements, certifications, and
          any significant milestones in your professional development.
        </p>

        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 border-l-4 border-blue-600">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Key Highlights</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>• Educational background and qualifications</li>
            <li>• Professional certifications and achievements</li>
            <li>• Areas of expertise and specialization</li>
            <li>• Personal interests and values</li>
          </ul>
        </div>

        <p>
          Continue with more details about your professional philosophy, what drives
          your work, and what you hope to achieve in your career. This is your space
          to tell your story in your own words.
        </p>
      </div>
    </div>
  );
}
