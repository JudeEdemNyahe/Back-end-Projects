SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

SELECT * FROM pg_Indexes WHERE tablename='customers';

CREATE INDEX marketing_customer_idx ON orders(customer_id);
CREATE INDEX marketing_book_idx ON orders(book_id);

EXPLAIN ANALYZE SELECT original_language, title, sales_in_millions FROM books WHERE original_language ='FRENCH';

SELECT pg_size_pretty (pg_total_relation_size('books'));

CREATE INDEX language_trans_idx ON books(original_language,title,sales_in_millions);

SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

SELECT * FROM pg_Indexes WHERE tablename='customers';

SELECT pg_size_pretty (pg_total_relation_size('books'));

DROP INDEX language_trans_idx ;
DROP INDEX marketing_customer_idx;
DROP INDEX marketing_book_idx;
SELECT NOW();
 
\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;
 
SELECT NOW();
CREATE INDEX marketing_customer_idx ON orders(customer_id);
CREATE INDEX marketing_book_idx ON orders(book_id);