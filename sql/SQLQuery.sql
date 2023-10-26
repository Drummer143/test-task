SET STATISTICS TIME ON;
WITH RecursiveSubdivisions AS (
    SELECT s.id, s.name, s.parent_id, 0 AS depth
    FROM subdivisions s
    WHERE s.id = (SELECT subdivision_id FROM collaborators WHERE name = 'Сотрудник 1' AND id = 710253)

    UNION ALL

    SELECT s.id, s.name, s.parent_id, r.depth + 1
    FROM subdivisions s
    INNER JOIN RecursiveSubdivisions r ON s.parent_id = r.id
)

SELECT c.id, c.name, c.subdivision_id, c.age
FROM collaborators c
INNER JOIN RecursiveSubdivisions r ON c.subdivision_id = r.id
WHERE c.age < 40
AND LEN(c.name) > 11
AND c.subdivision_id NOT IN (100055, 100059)
ORDER BY r.depth;
