"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="mb-8 text-4xl font-bold">Installation</h1>

          <div className="space-y-12">
            {/* NPM Installation */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Install with npm</h2>
              <div className="relative">
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code className="text-foreground">
                    npm install @EchoLive/echocount-js
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        "npm install @EchoLive/echocount-js",
                        "npm",
                      )
                    }
                  >
                    {copied === "npm" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </section>

            {/* CDN Installation */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Install via CDN</h2>
              <div className="relative">
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code className="text-foreground">{`<script src="https://cdn.jsdelivr.net/npm/@EchoLive/echocount-js"></script>
// or
<script src="https://unpkg.com/@EchoLive/echocount-js@2"></script>`}</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        `<script src="https://cdn.jsdelivr.net/npm/@EchoLive/echocount-js"></script>`,
                        "cdn",
                      )
                    }
                  >
                    {copied === "cdn" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </section>

            {/* JSR Usage */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Use with JSR</h2>
              <div className="relative">
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code className="text-foreground">
                    <code className="text-foreground">
                      import countPresence from
                      &apos;jsr:@EchoLive/echocount-js@2&apos;
                    </code>
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        "import { countPresence } from 'jsr:@EchoLive/echocount-js@2'",
                        "jsr",
                      )
                    }
                  >
                    {copied === "jsr" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </section>

            {/* Usage Example */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
              <p className="text-muted-foreground mb-4">
                After installation, initialize the counter in your application:
              </p>
              <div className="relative">
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <code className="text-foreground">{`// Initialize the counter
const counter = countPresence({
  siteId: 'your-site-id',
  element: '#visitor-count'
});

// Start tracking
counter.start();`}</code>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() =>
                      copyToClipboard(
                        `const counter = countPresence({
  siteId: 'your-site-id',
  element: '#visitor-count'
});

counter.start();`,
                        "usage",
                      )
                    }
                  >
                    {copied === "usage" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
