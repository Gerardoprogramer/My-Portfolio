import React, { useState, useEffect } from "react";
import { FileCode, Folder, ChevronRight, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomTitle } from "@/components/custom/CustomTitle";
import { codeFiles } from "../codeFiles/codeFiles";


export const CodeEditor = () => {
  const [activeFile, setActiveFile] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const code = codeFiles[activeFile].code;
    const lines = code.split("\n");

    setDisplayedCode("");
    setCurrentLine(0);

    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < lines.length) {
          setDisplayedCode(lines.slice(0, prev + 1).join("\n"));
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [activeFile]);

  return (
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="space-y-12">
        <CustomTitle
          title="Tech"
          markedTitle="Stack"
          subtitle="Explorá mis habilidades navegando por los archivos"
          type="centered"
          zone="Skills & Tecnologías"
        />
        <div className="flex flex-col lg:flex-row gap-6">
          {/* File Explorer */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm h-fit w-full lg:w-[300px] flex-shrink-0 p-0 gap-0">
            <div className="p-4 border-b border-primary">
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold">SKILLS</span>
              </div>
            </div>
            <CardContent className="p-2">
              <div className="space-y-1">
                {codeFiles.map((file, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFile(index)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left transition-all duration-200 group ${activeFile === index
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "hover:bg-card/70 text-foreground/80 hover:text-foreground"
                      }`}
                  >
                    <span className="text-lg">{file.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <FileCode className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">
                          {file.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {file.language}
                      </span>
                    </div>
                    {activeFile === index && (
                      <Circle className="w-2 h-2 fill-primary text-primary animate-glow flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Editor */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm shadow-[var(--shadow-card)] overflow-hidden flex-1 p-0 gap-0">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3  border-b  border-primary">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium flex items-center gap-2">
                  <span className="text-lg">{codeFiles[activeFile].icon}</span>
                  {codeFiles[activeFile].name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-2 h-2 fill-accent text-accent animate-glow" />
                <span className="text-xs text-muted-foreground">
                  {codeFiles[activeFile].language}
                </span>
              </div>
            </div>

            {/* Code Content */}
            <CardContent className="p-0">
              <div className="relative h-[500px] overflow-auto">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-card border-r border-border flex flex-col items-center py-4 text-xs text-muted-foreground space-y-[1.4rem]">
                  {displayedCode.split("\n").map((_, index) => (
                    <span key={index} className="select-none">
                      {index + 1}
                    </span>
                  ))}
                </div>

                <pre className="pl-16 pr-6 py-4 text-sm leading-relaxed ">
                  <code className="language-typescript">
                    {displayedCode.split("\n").map((line, index) => (
                      <div
                        key={index}
                        className={`${index === currentLine - 1
                            ? "bg-primary/10 -mx-2 px-2 animate-pulse"
                            : ""
                          }`}
                      >
                        {highlightSyntax(line)}
                      </div>
                    ))}
                    {currentLine < codeFiles[activeFile].code.split("\n").length && (
                      <span className="inline-block w-2 h-4 bg-primary animate-blink ml-1" />
                    )}
                  </code>
                </pre>
              </div>
            </CardContent>

            {/* Status Bar */}
            <div className="px-4 py-2 border-primary border-t flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  Línea {currentLine}, Col 0
                </span>
                <span className="text-muted-foreground">
                  {codeFiles[activeFile].language}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Circle className="w-2 h-2 fill-accent text-accent" />
                <span className="text-accent">Cargando skills...</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-2xl text-primary font-bold">
            💡 Click en los archivos para ver diferentes tecnologías
          </p>
        </div>
      </div>
    </div>


  );
};

// Syntax highlighting helper
function highlightSyntax(line: string): React.ReactElement {
  const keywords = ["import", "export", "const", "let", "var", "function", "class", "return", "async", "await", "from", "require", "new", "if", "else", "for", "while", "constructor", "public", "private", "pragma", "solidity", "contract", "mapping", "echo"];
  const strings = line.match(/(["'`])(?:(?=(\\?))\2.)*?\1/g) || [];
  const comments = line.match(/\/\/.*|\/\*[\s\S]*?\*\/|#.*/g) || [];

  let highlighted = line;

  // Comments (verde)
  comments.forEach((comment) => {
    highlighted = highlighted.replace(
      comment,
      `<span class="text-accent">${comment}</span>`
    );
  });

  // Strings (amarillo/secondary)
  strings.forEach((str) => {
    if (!highlighted.includes(`<span`)) {
      highlighted = highlighted.replace(
        str,
        `<span class="text-secondary">${str}</span>`
      );
    }
  });

  // Keywords (cyan/primary)
  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "g");
    highlighted = highlighted.replace(
      regex,
      `<span class="text-primary font-semibold">${keyword}</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}
