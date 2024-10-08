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

            function filterByAuthor(){
                return '1';
            }

            filterByAuthor();
        ?>

        <ul>
            <?php foreach ($books as $book) : ?>
                <?php if($book['author'] == 'Andy Weir') : ?>
                    <a href="<?= $book['purchaseUrl'] ?>">
                        <li> <?= $book['name'] . " " . $book['author']?> </li>
                    </a>
                <?php endif ?>
            <?php endforeach; ?>
        </ul>

        <p> <?= filterByAuthor(); ?></p>
    </body>

</html>
