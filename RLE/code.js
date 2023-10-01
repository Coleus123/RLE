let fs = require('fs')

fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    m = ''
    d = data.toString()
    for (i = 0, p = 1; i < d.length;) {
        while (d.charAt(i) == d.charAt(i + p)) {
            p++
        }
        let b = d.charAt(i)
        let u = p
        if (u > 3 || d.charAt(i) == '#') {
                m += '#' + String.fromCharCode(u) + b
        }
        else {
            m += b.repeat(u)
        }
        i += u
        p = 1

    }
    fs.writeFile('code.txt', m, (err) => {
        if (err) {
            console.error(err)
            return
        }
    }) 
}
)