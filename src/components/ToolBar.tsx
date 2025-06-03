
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bold, Italic, List, Plus, Subscript, Superscript, AlignLeft, AlignCenter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ToolBarProps {
  onInsertText: (text: string) => void;
  onInsertAtCursor: (before: string, after?: string) => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({ onInsertText, onInsertAtCursor }) => {
  const insertBold = () => onInsertAtCursor('\\textbf{', '}');
  const insertItalic = () => onInsertAtCursor('\\textit{', '}');
  const insertSection = () => onInsertText('\n\\section{Nova Seção}\n');
  const insertSubsection = () => onInsertText('\n\\subsection{Nova Subseção}\n');
  const insertItemize = () => onInsertText('\n\\begin{itemize}\n\\item Primeiro item\n\\item Segundo item\n\\end{itemize}\n');
  const insertEnumerate = () => onInsertText('\n\\begin{enumerate}\n\\item Primeiro item\n\\item Segundo item\n\\end{enumerate}\n');
  const insertMathInline = () => onInsertAtCursor('$', '$');
  const insertMathBlock = () => onInsertText('\n$$\n\n$$\n');
  const insertFraction = () => onInsertAtCursor('\\frac{', '}{denominador}');
  const insertSuperscript = () => onInsertAtCursor('^{', '}');
  const insertSubscript = () => onInsertAtCursor('_{', '}');

  return (
    <div className="bg-white border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 flex-wrap gap-y-2">
          {/* Formatação de texto */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={insertBold}
              className="hover:bg-blue-50 hover:text-blue-600"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertItalic}
              className="hover:bg-blue-50 hover:text-blue-600"
            >
              <Italic className="h-4 w-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Estrutura */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={insertSection}
              className="hover:bg-green-50 hover:text-green-600 text-xs"
            >
              H1
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertSubsection}
              className="hover:bg-green-50 hover:text-green-600 text-xs"
            >
              H2
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Listas */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={insertItemize}
              className="hover:bg-purple-50 hover:text-purple-600"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertEnumerate}
              className="hover:bg-purple-50 hover:text-purple-600 text-xs"
            >
              1.
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Matemática */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={insertMathInline}
              className="hover:bg-orange-50 hover:text-orange-600 text-xs font-mono"
            >
              $x$
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertMathBlock}
              className="hover:bg-orange-50 hover:text-orange-600 text-xs font-mono"
            >
              $$
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertFraction}
              className="hover:bg-orange-50 hover:text-orange-600 text-xs"
            >
              a/b
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertSuperscript}
              className="hover:bg-orange-50 hover:text-orange-600"
            >
              <Superscript className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertSubscript}
              className="hover:bg-orange-50 hover:text-orange-600"
            >
              <Subscript className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
