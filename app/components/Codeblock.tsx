import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeblockProps = {
  language: string;
  value: string;
};

const Codeblock = ({ language, value }: CodeblockProps) => {
  return (
    <SyntaxHighlighter language={language} style={oneDark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Codeblock;