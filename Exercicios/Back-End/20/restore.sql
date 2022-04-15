SELECT * FROM `Pecas` WHERE name LIKE 'gr%';
SELECT * FROM `Fornecimentos` WHERE peca = 2 ORDER BY Fornecedor;

SELECT peca, Preco, Fornecedor from `Fornecimentos` WHERE Fornecedor LIKE '%n%';

SELECT * FROM `Fornecedores` WHERE name LIKE '%ltda%';

SELECT COUNT(*) FROM `Fornecedores` WHERE code LIKE '%f%';

SELECT * FROM `Fornecimentos` WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco;

SELECT * FROM `Vendas`
WHERE HOUR(order_date) BETWEEN '11:28:36' AND '15:51:36' ORDER BY HOUR(order_date);

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo