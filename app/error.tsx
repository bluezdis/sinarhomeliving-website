"use client";

import { useEffect } from "react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <Container>
        <div className="text-center space-y-6 max-w-md mx-auto">
          <div className="text-8xl">⚠️</div>
          <h1 className="text-4xl font-bold text-foreground">
            Terjadi Kesalahan
          </h1>
          <p className="text-lg text-foreground/80">
            Maaf, terjadi kesalahan tidak terduga. Silakan coba lagi atau hubungi support kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} variant="primary" size="lg">
              Coba Lagi
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Kembali ke Beranda
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
