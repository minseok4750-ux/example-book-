import BookCard from './BookCard';

export default function Section({label, books}) {
    return (
        <section>
            <h2>{label}({books.length})</h2>

            {books.length === 0 ? (
                <p className="notice"> 아직 등록된 책이 없습니다. </p>
            ) : ( 
                <div className="book-grid">
                    {books.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>
            )}
        </section>
    );
} 