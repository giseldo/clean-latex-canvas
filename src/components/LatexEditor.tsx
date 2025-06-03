
import React, { useState, useCallback } from 'react';
import { ToolBar } from './ToolBar';
import { EditorPane } from './EditorPane';
import { PreviewPane } from './PreviewPane';
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";

const LatexEditor = () => {
  const [content, setContent] = useState(`\\documentclass{article}
\\usepackage{amsmath}
\\usepackage{amsfonts}
\\title{Meu Documento LaTeX}
\\author{Autor}
\\date{\\today}

\\begin{document}
\\maketitle

\\section{Introdução}
Este é um exemplo de documento LaTeX. Você pode editar o texto aqui e ver o resultado em tempo real.

\\subsection{Fórmulas Matemáticas}
Aqui está uma fórmula inline: $E = mc^2$

E aqui está uma fórmula em bloco:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

\\subsection{Listas}
\\begin{itemize}
\\item Primeiro item
\\item Segundo item
\\item Terceiro item
\\end{itemize}

\\end{document}`);

  const insertText = useCallback((text: string) => {
    setContent(prev => prev + text);
  }, []);

  const insertAtCursor = useCallback((before: string, after: string = '') => {
    // Simplified insertion - in a real implementation, we'd track cursor position
    setContent(prev => prev + before + after);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-xl font-semibold text-gray-900">Editor LaTeX</h1>
        </div>
      </div>
      
      <ToolBar onInsertText={insertText} onInsertAtCursor={insertAtCursor} />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-200px)] rounded-lg border border-gray-200 overflow-hidden">
          <ResizablePanel defaultSize={50} minSize={30}>
            <EditorPane content={content} onChange={setContent} />
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-gray-200 hover:bg-gray-300 transition-colors" />
          <ResizablePanel defaultSize={50} minSize={30}>
            <PreviewPane content={content} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default LatexEditor;
