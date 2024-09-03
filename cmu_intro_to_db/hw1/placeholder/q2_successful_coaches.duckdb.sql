SELECT winner_code, code, code_1, concat(country_code, a_country_code) AS country_code FROM (SELECT teams.country_code, teams.code, subquery.* FROM teams RIGHT JOIN (SELECT athletes.code, athletes.country_code AS a_country_code, medals.winner_code FROM athletes RIGHT JOIN medals ON athletes.code = medals.winner_code) AS subquery ON subquery.winner_code = teams.code);

