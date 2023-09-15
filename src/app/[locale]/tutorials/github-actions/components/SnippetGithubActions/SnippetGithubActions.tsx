interface SnippetGithubActionsProps {}

export function SnippetGithubActions({}: SnippetGithubActionsProps) {
  return (
    <div className="mockup-code">
      <pre>
        <code className="text-code-gray">.github/workflows/tests.yml</code>
      </pre>
      <pre>
        <code className="text-code-green">name: </code>
        <code className="text-code-blue-2">Run Tests</code>
      </pre>
      <br />
      <pre>
        <code className="text-code-blue-2">on: </code>
      </pre>
      <pre className="ml-code-left-sm">
        <code className="text-code-green">pull_request: </code>
      </pre>
      <pre className="ml-code-left-md">
        <code className="text-code-green">branches: </code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-blue-2">- dev</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-blue-2">- main</code>
      </pre>
      <br />
      <pre>
        <code className="text-code-blue-2">jobs: </code>
      </pre>
      <pre className="ml-code-left-sm">
        <code className="text-code-green">jest: </code>
      </pre>
      <pre className="ml-code-left-md">
        <code className="text-code-green">runs-on: </code>
        <code className="text-code-blue-2">ubuntu-latest</code>
      </pre>
      <br />
      <pre className="ml-code-left-md">
        <code className="text-code-green">steps: </code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- name: </code>
        <code className="text-code-blue-2">Checkout code</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- uses: </code>
        <code className="text-code-blue-2">actions/checkout@v2</code>
      </pre>
      <br />
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- name: </code>
        <code className="text-code-blue-2">Set up Node.js</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- uses: </code>
        <code className="text-code-blue-2">actions/setup-node@v2</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- with: </code>
      </pre>
      <pre className="ml-code-left-xl">
        <code className="text-code-green">node-version: </code>
        <code className="text-code-blue-2">18</code>
      </pre>
      <br />
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- name: </code>
        <code className="text-code-blue-2">Install dependencies</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- run: </code>
        <code className="text-code-blue-2">yarn install</code>
      </pre>
      <br />
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- name: </code>
        <code className="text-code-blue-2">Run tests</code>
      </pre>
      <pre className="ml-code-left-lg">
        <code className="text-code-green">- run: </code>
        <code className="text-code-blue-2">yarn test</code>
      </pre>
    </div>
  );
}
