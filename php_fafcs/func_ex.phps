//(connect to the database)

//print input prior to sanitation
var_dump($_GET);

function sanitize(&$data, $key){
    $data = mysql_real_escape_string(trim($data));
}

array_walk_recursive($_GET, sanitize); //or $_POST, etc.

//print sanitized input
var_dump($_GET);
