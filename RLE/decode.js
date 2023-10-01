let fs = require('fs')

fs.readFile('code.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    m = ''
    d = data.toString()
    for (y = 0; y < d.length;) {
        if (d.charAt(y) !== '#') {
            m += d.charAt(y)
            y += 1
        }
        else {
            m += d.charAt(y + 2).repeat(d.charAt(y + 1).charCodeAt())
            y += 3
        }
    }
    fs.writeFile('decode.txt', m, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    })
}
)