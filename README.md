# Maverick Appium Tests for use on AWS Device Farm

https://docs.aws.amazon.com/devicefarm/latest/developerguide/test-types-android-appium-node.html#test-types-android-appium-node-prerequisites

http://appium.io/docs/en/about-appium/getting-started/?lang=en
- npm install -g appium
- appium
	
#### To zip up the tests to upload to AWS
- npm install npm-pack-all
- node node_modules/npm-pack-all
- add 7zip to enviroment variables
- 7z a maverick-appium-tests-1.0.0.zip maverick-appium-tests-1.0.0.tgz
