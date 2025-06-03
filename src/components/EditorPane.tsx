
import React from 'react';

interface EditorPaneProps {
  content: string;
  onChange: (content: string) => void;
}

export const EditorPane: React.FC<EditorPaneProps> = ({ content, onChange }) => {
  return (
    <div className="h-full bg-white">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-700">Código LaTeX</h3>
      </div>
      <div className="h-full p-4">
        <textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full resize-none border-none outline-none font-mono text-sm leading-relaxed"
          style={{ minHeight: 'calc(100vh - 300px)' }}
          placeholder="Digite seu código LaTeX aqui..."
        />
      </div>
    </div>
  );
};
