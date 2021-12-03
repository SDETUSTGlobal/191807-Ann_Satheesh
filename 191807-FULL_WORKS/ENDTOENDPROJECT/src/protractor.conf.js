exports.config = {
    framework: 'jasmine', //Type of Framework used
    directConnect:true,
    specs: ['spec.js'], //Name of the Specfile
    onPrepare() {
          require('ts-node').register({
          project: require('C:\end-to-end project').join(__dirname, './tsconfig.json') //Relative path of tsconfig.json file
            });
  }
}