import { Layers, X, Trash2, FolderOpen } from 'lucide-react';
import React from 'react';
import type { Technology } from '../types/tech.ts';

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
            <Layers size={20} />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Your Stack</h2>
            <p className="text-xs text-gray-500 font-medium">
              {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>
          </div>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Trash2 size={13} />
            <span>Remove All</span>
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="py-12 text-center flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mb-3 border border-dashed border-gray-200">
            <FolderOpen size={28} />
          </div>
          <p className="font-semibold text-gray-700 text-sm">Your stack is empty</p>
          <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
            Explore tech items on the left and click "Add to Stack" to select.
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-7 h-7 object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                    e.currentTarget.src = 'https://techicons.dev/icons/javascript.svg'; 
                  }}
                />
                <div>
                  <h4 className="font-bold text-sm text-gray-800 leading-tight">{item.name}</h4>
                  <span className="text-[11px] font-medium text-purple-600">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white rounded-lg transition-all cursor-pointer"
                title="Remove item"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}