const url = 'mongodb+srv://guest:dannesl123@cluster0.xkexe8b.mongodb.net/test';

const dbName = 'tennis'
let db

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)

    // Storing a reference to the database so you can use it later
    db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)
})