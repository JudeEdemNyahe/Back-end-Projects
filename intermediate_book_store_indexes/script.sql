
SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

SELECT * FROM pg_indexes WHERE tablename='customers';

SELECT * FROM pg_indexes WHERE tablename='books';

SELECT * FROM pg_indexes WHERE tablename='orders';
EXPLAIN ANALYZE SELECT customers.customer_id,orders.quantity FROM customers INNER JOIN orders ON customers.customer_id =orders.customer_id WHERE orders.quantity >18;

CREATE INDEX customer_over_eighteen_idx ON orders(quantity) WHERE orders.quantity > 18;

SELECT * FROM pg_indexes WHERE tablename='orders';
EXPLAIN ANALYZE SELECT customers.customer_id,orders.quantity FROM customers INNER JOIN orders ON customers.customer_id =orders.customer_id WHERE orders.quantity >18;

ALTER TABLE customers ADD CONSTRAINT customers_pkey PRIMARY KEY(customer_id);

EXPLAIN ANALYZE SELECT * FROM customers WHERE customer_id < 100;
CLUSTER customers USING customers_pkey ;

SELECT * FROM customers ORDER BY customer_id LIMIT 10;

--No secondary lookup

CREATE INDEX customer_and_book_id_idx ON orders(customer_id,book_id);

DROP INDEX customer_and_book_id_idx;

SELECT * FROM pg_indexes WHERE tablename='orders';

CREATE INDEX customer_and_book_id_idx ON orders(customer_id,book_id,quantity);

--Combining Indexes
DROP INDEX books_author_idx;
DROP INDEX books_title_idx;
CREATE INDEX author_title_fused_idx ON books(author,title);

-- An Ounce of Prevention is worth a Pound of Cure
EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base) >100;
CREATE INDEX orders_total_price_idx ON orders ((quantity * price_base));
EXPLAIN ANALYZE SELECT * FROM orders WHERE (quantity * price_base) >100;
