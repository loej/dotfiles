/* Welcome to ~/Jarvis!. A Simple startup page for chrome. The html/css/js files will be commented thoroughly. */

/* Allows .dev to link to Github  */
function linkFunction() {
    let search = 'dev'
    document.getElementById('dev').innerHTML = search.link('https://github.com/loej')
}

/* Function that displays text after 4 seconds.*/

function showTree() {
    /* Value is inline text by default. */

    document.getElementById('treeText').style.display = ''
}

setTimeout(showTree, 4100)