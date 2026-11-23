import "./globals.css";


export const metadata = {
  title: "나의 책장",
  description: "리액트 실습",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
