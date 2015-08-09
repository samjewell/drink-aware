## README

Check out these sites for info on using appcache:
http://alistapart.com/article/application-cache-is-a-douchebag
http://www.html5rocks.com/en/tutorials/appcache/beginner/

http://www.marcotroisi.com/make-your-website-available-offline-with-html5/

http://manifesto.ericdelabar.com/

And of course

chrome://appcache-internals/



ToDo

- [X] try with multiple URLs (just no params)
- [X] get it onto Github pages
- [ ] get the 'save to home screen' icon working
- [ ] learn how to clear the cache on iOS. By removing the browser (last resort)?


Notes

- put every file under NETWORK as well as under CACHED
- once the html file is cached, how can I get it to reload changes to that html file?


Angular

- the component that gets repeated is the ( ! ) ... This should be the `directive` so it can be repeated easily.
- the content that needs to be switched in/out is the text and image on the right. This should be in an array (of objects) on the controller!