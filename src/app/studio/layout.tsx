export const metadata = {
  title: 'Dream World CMS',
  description: 'Backend Admin Dashboard for Dream World',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
