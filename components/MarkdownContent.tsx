'use client'
import { code, poppins } from '@/app/fonts';
import "highlight.js/styles/atom-one-dark.css";
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const MarkdownContent = ({ content, className = '' }: MarkdownContentProps) => {
  return (
    <ReactMarkdown
      // className={`prose prose-lg dark:prose-invert max-w-none blog ${code.variable} ${poppins.variable} ${className}`}
      rehypePlugins={[rehypeHighlight]}
      components={{
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <div className="relative group">
              <pre className={`${className} rounded-lg p-4 bg-gray-900 overflow-x-auto`}>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(String(children))}
                className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Copy code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          ) : (
            <code className="px-1.5 py-0.5 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100" {...props}>
              {children}
            </code>
          );
        },
        a: ({ node, ...props }) => (
          <a
            {...props}
            className="text-primaryColor hover:text-primaryColor/80 transition-colors duration-200 underline decoration-primaryColor/30 hover:decoration-primaryColor/60"
            target="_blank"
            rel="noopener noreferrer"
          />
        ),
        img: ({ node, ...props }) => (
          <Image
            // {...props}
            src={props.src ?? ""}
            alt={props.alt ?? ""}
            className="rounded-lg shadow-lg my-8 w-full object-cover"
            loading="lazy"
          />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-4 border-primaryColor pl-4 italic my-6 text-gray-700 dark:text-gray-300"
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
