module.exports = {
  pages:{
    home:{
      entry: "./src/home",
      template: "./tpl/index.html",
      filename: "index.html",
      title: "Home Page",
      // chunks: ['chunk-vendors',"chunk-common",'home']
    },
    space:{
      entry: "./src/space",
      template: "./tpl/space.html",
      filename: "space.html",
      title: "Space Page",
      // chunks: ['chunk-vendors', "chunk-common", 'space']
    }
  }
}