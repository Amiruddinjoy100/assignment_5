import React from 'react';
import { Star, Check } from 'lucide-react';
import type { Technology } from '../types/tech.ts';

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-200/50">
            {tech.badge}
          </span>
          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-700">{tech.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-8 h-8 object-contain" 
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                e.currentTarget.src = 'https://techicons.dev/icons/javascript.svg'; 
              }} 
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
              {tech.name}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-600">
                {tech.category}
              </span>
              <span className="text-xs text-gray-500">• {tech.difficulty}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">
          {tech.description}
        </p>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
          isAdded
            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
            : 'btn-gradient shadow-md hover:shadow-lg active:scale-95'
        }`}
      >
        {isAdded ? (
          <>
            <Check size={16} />
            <span>Added to Stack</span>
          </>
        ) : (
          <span>Add to Stack</span>
        )}
      </button>
    </div>
  );
}