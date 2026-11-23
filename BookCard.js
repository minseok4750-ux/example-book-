'use client';

import { useState } from 'react';

export default function BookCard({
  title,
  author,
  rating = 0,
  isRead: initialIsRead = false,
  isBest = false,
}) {
  // W1-4: 각 카드가 기억하는 읽음 상태
  const [isRead, setIsRead] = useState(initialIsRead);

  // 별점 문자열: rating이 4면 ★★★★☆
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="book-card">
      <h3>
        {title}
        {isBest && <span className="best">BEST</span>}
      </h3>
      <p className="author">{author}</p>
      <p className="stars">{stars}</p>

      <button
        className="status-btn"
        onClick={() => setIsRead(!isRead)}
      >
        {isRead ? '✅ 다 읽음' : '📖 읽는 중'}
      </button>
    </div>
  );
}