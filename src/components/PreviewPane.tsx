
import React, { useMemo } from 'react';
import 'katex/dist/katex.min.css';

interface PreviewPaneProps {
  content: string;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ content }) => {
  const processedContent = useMemo(() => {
    // Simplified LaTeX to HTML conversion for preview
    let processed = content;
    
    // Remove document class and preamble
    processed = processed.replace(/\\documentclass\{[^}]*\}/g, '');
    processed = processed.replace(/\\usepackage\{[^}]*\}/g, '');
    processed = processed.replace(/\\title\{([^}]*)\}/g, '<h1 class="text-2xl font-bold mb-4">$1</h1>');
    processed = processed.replace(/\\author\{([^}]*)\}/g, '<p class="text-gray-600 mb-2">Por: $1</p>');
    processed = processed.replace(/\\date\{[^}]*\}/g, '');
    processed = processed.replace(/\\begin\{document\}/g, '');
    processed = processed.replace(/\\end\{document\}/g, '');
    processed = processed.replace(/\\maketitle/g, '');
    
    // Sections
    processed = processed.replace(/\\section\{([^}]*)\}/g, '<h2 class="text-xl font-semibold mt-6 mb-3 text-gray-800">$1</h2>');
    processed = processed.replace(/\\subsection\{([^}]*)\}/g, '<h3 class="text-lg font-medium mt-4 mb-2 text-gray-700">$1</h3>');
    
    // Text formatting
    processed = processed.replace(/\\textbf\{([^}]*)\}/g, '<strong>$1</strong>');
    processed = processed.replace(/\\textit\{([^}]*)\}/g, '<em>$1</em>');
    
    // Lists
    processed = processed.replace(/\\begin\{itemize\}/g, '<ul class="list-disc list-inside my-3 space-y-1">');
    processed = processed.replace(/\\end\{itemize\}/g, '</ul>');
    processed = processed.replace(/\\begin\{enumerate\}/g, '<ol class="list-decimal list-inside my-3 space-y-1">');
    processed = processed.replace(/\\end\{enumerate\}/g, '</ol>');
    processed = processed.replace(/\\item\s/g, '<li>');
    
    // Math (simplified - just preserve the math for now)
    processed = processed.replace(/\$\$([^$]*)\$\$/g, '<div class="math-block my-4 p-3 bg-blue-50 rounded text-center font-mono">$$$1$$</div>');
    processed = processed.replace(/\$([^$]*)\$/g, '<span class="math-inline bg-blue-50 px-1 rounded font-mono">$1</span>');
    
    // Line breaks
    processed = processed.replace(/\n\n/g, '</p><p class="mb-3">');
    processed = '<p class="mb-3">' + processed + '</p>';
    
    return processed;
  }, [content]);

  return (
    <div className="h-full bg-white">
      <div className="p-4 border-b border-gray-100 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-700">Preview</h3>
      </div>
      <div className="h-full p-6 overflow-auto" style={{ minHeight: 'calc(100vh - 300px)' }}>
        <div className="max-w-none prose prose-sm">
          <div 
            dangerouslySetInnerHTML={{ __html: processedContent }}
            className="leading-relaxed text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};
