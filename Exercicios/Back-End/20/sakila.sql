USE sakila;

SELECT * FROM customer
WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";
SELECT * FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> "KENNETH";

SELECT title, description, release_year, replacement_cost FROM film
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(*) FROM customer WHERE store_id = 1 AND active = 1;

SELECT * FROM customer WHERE store_id = 1 AND active = 0;

-- Encontra qualquer resultado finalizando com "don"
SELECT * FROM sakila.film
WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

SELECT * FROM film WHERE title LIKE "%ace%";

SELECT * FROM film WHERE description LIKE "%china";

SELECT * FROM film WHERE description LIKE "%girl%" AND title LIKE "%lord";

SELECT * FROM film WHERE title LIKE "___gon%";

SELECT * FROM film WHERE title LIKE "___gon%" and description LIKE "%Documentary%";

SELECT * FROM film WHERE title LIKE "%academy" OR title LIKE "mosquito%";

SELECT * FROM film WHERE description LIKE "%monkey%" and description like "%sumo%";

-- SELECT * FROM banco_de_dados
-- WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);

-- SELECT * FROM banco_de_dados
-- WHERE coluna IN (expressão);

SELECT * FROM payment WHERE payment_id IN (269, 239, 126, 399, 142);

SELECT * FROM address WHERE district IN ('Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;