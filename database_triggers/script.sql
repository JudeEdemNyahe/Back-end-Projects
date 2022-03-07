SELECT * FROM customers ORDER BY customer_id;
--UPDATE TRIGGER
CREATE TRIGGER update_name
    BEFORE UPDATE ON customers
    FOR EACH ROW
    EXECUTE PROCEDURE log_customers_change();

    UPDATE customers SET first_name='Jude' WHERE last_name='Lewis';
    SELECT * FROM customers ORDER BY customer_id;
    SELECT * FROM customers_log;

UPDATE customers SET years_old=15 WHERE last_name='Lewis';
     SELECT * FROM customers ORDER BY customer_id;
     SELECT * FROM customers_log;

     --INSERT TRIGGER
CREATE TRIGGER customer_insert
    AFTER INSERT ON customers
    FOR EACH STATEMENT
    EXECUTE PROCEDURE log_customers_change();

    INSERT INTO customers(first_name,last_name,email_address,	home_phone,city,state_name,years_old) VALUES ('Jeffrey','Cook','Jeffrey.Cook@example.com','202-555-0398','Jersey city','New Jersey',66),('Samuel','Appiah','Samuel.Opera@example.com','203-256-0812','California','Miami',26),('Kwaku','Amaoh','Kwaku.Sampson@example.com','201-452-0018','Ohio','New York',46);

     SELECT * FROM customers ORDER BY customer_id;

     SELECT * FROM customers_log;


-- Conditionals on Triggers
CREATE TRIGGER customer_min_age
    BEFORE UPDATE ON customers
    FOR EACH ROW
    WHEN (NEW.years_old < 13)
    EXECUTE PROCEDURE override_with_min_age();
    UPDATE customers SET years_old=12 WHERE last_name='Appiah';
    UPDATE customers SET years_old=24 WHERE last_name='Cook';

   SELECT * FROM customers ORDER BY customer_id;
    SELECT * FROM customers_log;

    UPDATE customers SET years_old = 9,first_name = 'Dennis' WHERE  last_name= 'Hall';
      SELECT * FROM customers ORDER BY customer_id;
    SELECT * FROM customers_log;
 
 --Trigger Cleanup
 DROP TRIGGER IF EXISTS  customer_min_age ON customers;
SELECT * FROM information_schema.triggers;
    