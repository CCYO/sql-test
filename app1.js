const mysql = require('mysql')

const serverHandle = (req, res) => {
    const url = req.url;
    req.path = url.split('?')[0]
    if(req.path === '/'){
        console.log('db_test running...')
        let con = mysql.createConnection({
            //host: '/cloudsql/docker-vm-0816:asia-east1:root',
            //host: '35.229.229.2',
            user: 'root',
            password: 'tt309091238',
            database: 'guestbook',
            socketPath: '/cloudsql/docker-vm-0816:asia-east1:root'
        });
        con.connect(function(error) {
            console.log('db connecting....')
            if (error) {
                return console.error("Error: Cannot connect to server: 35.229.229.2, result: ", error);
            }
            return console.log('connect OKOK')
        });
        con.query('SELECT * FROM entries', (err, result) => {
            if(err){
                return console.error('讀取資料失敗,原因是: ', err)
            }
            console.log('讀取資料成功!!')
            con.end()
            res.end('this is homePage, and dbData:'+ JSON.stringify(result))
            return 
        })
    
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('404 Not Found-----')
        res.end()

    }
}

module.exports = serverHandle