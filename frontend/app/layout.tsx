export const metadata = {
  title: 'UWE MSc AI Platform',
  description: 'Platform for research, collaboration, and innovation.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
