const http=require("node:http"),fs=require("node:fs"),path=require("node:path");
const root=path.join(__dirname,"public");
const routes={"/":["index.html","text/html; charset=utf-8"],"/app.js":["app.js","text/javascript; charset=utf-8"],"/styles.css":["styles.css","text/css; charset=utf-8"],"/assets/icon.svg":["../assets/icon.svg","image/svg+xml"]};
http.createServer((req,res)=>{const p=new URL(req.url,"http://localhost").pathname,e=routes[p];if(!e){res.writeHead(404);return res.end("Not found");}
fs.readFile(path.join(root,e[0]),(err,data)=>{if(err){res.writeHead(500);return res.end("Local asset unavailable");}res.writeHead(200,{"Content-Type":e[1],"X-Content-Type-Options":"nosniff"});res.end(data);});}).listen(4173,"127.0.0.1",()=>console.log("OG Meta Preview: http://127.0.0.1:4173"));
