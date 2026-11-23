'use client';

import { useState } from 'react';
import BookCard from '@/components/BookCard';
import Section from '@/components/Section';

const genres = [
  { key: 'all', label: '전체' },
  { key: 'novel', label: '📖 소설' },
  { key: 'essay', label: '✍️ 에세이' },
  { key: 'it', label: '💻 IT' },
  { key: 'poem', label: '🌸 시' },
];

export default function BookShelf({ books }) {
  const [keyword, setKeyword] = useState('');
  const [genre, setGenre] = useState('all');

  
  const filtered = books
    .filter((book) => genre === 'all' || book.genre === genre)
    .filter((book) => book.title.includes(keyword.trim()));

  return (
    <section>
      {/* 책 제목 검색창 */}
      <input
        className="search"
        type="text"
        placeholder="책 제목을 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* 장르 탭 */}
      <div className="tabs">
        {genres.map((item) => (
          <button
            key={item.key}
            className={genre === item.key ? 'tab active' : 'tab'}
            onClick={() => setGenre(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 결과 권수 표시 */}
      <p>검색 결과 {filtered.length}권</p>

      {/* 조건에 따른 화면 출력 */}
      {filtered.length === 0 ? (
        <p className="empty">“{keyword}”에 해당하는 책이 없습니다.</p>
      ) : genre === 'all' && keyword.trim() === '' ? (
        genres
          .filter((item) => item.key !== 'all')
          .map((item) => (
            <Section
              key={item.key}
              label={item.label}
              books={books.filter((book) => book.genre === item.key)}
            />
          ))
      ) : (
        <div className="book-grid">
          {filtered.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </section>
  );
}