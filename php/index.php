<!DOCTYPE html>
<html>
    <head>
        <title>PHP Test</title>
    </head>

    <body>
        <?php
            $books = [
                [
                    'name' => 'Do Androids Dream of Electric Sheep',
                    'author' => 'Phillip K. Dick',
                    'purchaseUrl' => 'https://example.com'
                ],
                [
                    'name' => 'Project Hail Mary',
                    'author' => 'Andy Weir',
                    'purchaseUrl' => 'https://example.com'
                ],
                [
                    'name' => 'The Martian',
                    'author' => 'Andy Weir',
                    'purchaseUrl' => 'https://example.org'
                ]
            ];

            function filterByAuthor($books, $author){
                $filteredBooks = [];
                foreach ($books as $book){
                    if($book['author'] == $author){
                        $filteredBooks[] = $book;
                    }
                }
                return $filteredBooks;
            }
        ?>

        <ul>
            <?php foreach (filterByAuthor($books, 'Andy Weir') as $book) : ?>
                <li> <?= $book['name'] . " " . $book['author']?> </li>
            <?php endforeach; ?>
        </ul>

        <p>There is nothing</p>

    </body>

</html>
