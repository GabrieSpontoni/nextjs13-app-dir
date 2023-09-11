interface SnippetCommingSoonProps {}

export function SnippetCommingSoon({}: SnippetCommingSoonProps) {
  return (
    <div className="mockup-code">
      <pre>
        <code className="text-code-gray">
          __tests__/CardWithImageOverlay.test.tsx
        </code>
      </pre>
      <pre className="text-code-purple">
        <code>it</code>
        <code className="text-code-gray">(</code>
        <code className="text-code-blue-1">
          {`"render Card without href and return Em breve"`}
        </code>
        <code className="text-code-gray">,</code>
        <code className="text-code-gray">()</code>
        <code className="text-code-red">{" => "}</code>
        <code className="text-code-gray">{"{"}</code>
      </pre>

      <pre className="ml-code-left-sm">
        <code className="text-code-purple">renderWithProviders</code>
        <code className="text-code-gray">(</code>
      </pre>
      <pre className="ml-code-left-md">
        <code className="text-code-gray">{"<"}</code>
        <code className="text-code-green">{`CardWithImageOverlay`}</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-blue-2">src</code>
        <code className="text-code-red">=</code>
        <code className="text-code-blue-1">{`""`}</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-blue-2">alt</code>
        <code className="text-code-red">=</code>
        <code className="text-code-blue-1">{`""`}</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-blue-2">title</code>
        <code className="text-code-red">=</code>
        <code className="text-code-blue-1">{`""`}</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-blue-2">description</code>
        <code className="text-code-red">=</code>
        <code className="text-code-blue-1">{`""`}</code>
      </pre>
      <pre className="ml-code-left-md">
        <code className="text-code-gray">{`/>`}</code>
      </pre>
      <pre className="ml-code-left-sm">
        <code className="text-code-gray">)</code>
        <code className="text-code-gray">;</code>
      </pre>
      <pre className="ml-code-left-sm">
        <code className="text-code-red">const</code>
        <code className="text-code-blue-2"> commingSoonText </code>
        <code className="text-code-red">=</code>
        <code className="text-code-blue-2"> screen</code>
        <code>.</code>
        <code className="text-code-purple">getByText</code>
        <code className="text-code-gray">(</code>
        <code className="text-code-blue-1">{`"Em breve"`}</code>
        <code className="text-code-gray">)</code>
        <code className="text-code-gray">;</code>
      </pre>
      <br />
      <pre className="ml-code-left-sm">
        <code className="text-code-purple">expect</code>
        <code className="text-code-gray">(</code>
        <code className="text-code-blue-2">commingSoonText</code>
        <code className="text-code-gray">).</code>
        <code className="text-code-purple">toBeVisible</code>
        <code className="text-code-gray">(</code>
        <code className="text-code-gray">)</code>
        <code className="text-code-gray">;</code>
      </pre>

      <pre>
        <code className="text-code-gray">{`}`}</code>
        <code className="text-code-gray">)</code>
        <code className="text-code-gray">;</code>
      </pre>
    </div>
  );
}
