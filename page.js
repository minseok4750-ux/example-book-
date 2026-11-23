import books from '@/app/data/menus';
import BookShelf from '@/components/BookShelf';

export default function Home() {
  // R6. 통계
  const readBooks = books.filter((book) => book.isRead);
  const percent = Math.round((readBooks.length / books.length) * 100);

  // 도전. 별점 5점 책
  const topBooks = books.filter((book) => book.rating === 5);

  return (
    <main>
      <h1>📚 나의 책장</h1>

      <div className="stats">
        <div className="stat">전체 <b>{books.length}</b>권</div>
        <div className="stat">다 읽은 책 <b>{readBooks.length}</b>권</div>
        <div className="stat">독서 진행률 <b>{percent}</b>%</div>
      </div>
      <div className="bar">
        <div style={{ width: `${percent}%` }} />
      </div>

      {topBooks.length > 0 && (
        <p className="notice">
          ⭐ 별점 5점 추천: {topBooks.map((book) => book.title).join(', ')}
        </p>
      )}

      {/* W1-1: 책 데이터를 Props로 전달 */}
      <BookShelf books={books} />
    </main>
  );
}