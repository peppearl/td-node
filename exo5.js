const fs = require('fs')
const path = require('path')

const [_node, _path, directoryPath, ext] = process.argv

fs.readdir(directoryPath, (error, fileNames) => {

  if (error) return console.error(error)

  const checkExtension = fileName => path.extname(fileName) === `.${ext}`
  const logFileName = fileName => console.log(fileName)

  fileNames.filter(checkExtension).forEach(logFileName)
})
