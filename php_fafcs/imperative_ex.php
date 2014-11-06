<?php
require 'data.php';
//(connect to database)
$keys = array_keys($_GET);
$size = sizeof($keys);

//print input prior to sanitation
var_dump($_GET);


for($i = 0; $i < $size; ++$i){
    $_GET[$keys[$i]]=mysql_real_escape_string(trim($_GET[$keys[$i]]));
}

//print data after sanitation
var_dump($_GET);
?>
