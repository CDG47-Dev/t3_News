<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "t3_news".
 *
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/
$EM_CONF[$_EXTKEY] = array(
    'title' => 'news',
    'description' => 'Extension news',
    'category' => 'fe',
    'constraints' => array(
        'depends' => array(
            'bootstrap_package' => '9.1.0 - 9.99.99',
            'typo3' => '8.7.0 - 8.99.99',
			'news' => '7.0.0 - 7.99.99',
	    
        ),
        'conflicts' => array(),
    ),
    'state' => 'stable',
    'uploadfolder' => 1,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'OLK',
    'author_email' => 'olivier.pommaret@cdg47.fr',
    'author_company' => 'CDG47',
    'version' => '0.0.2',
);
?>
