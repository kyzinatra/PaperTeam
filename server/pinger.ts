import https from "http";

const options = {
  hostname: "paperteam.herokuapp.com",
  path: "/",
  method: "get",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

function ping() {
  const req = https.request(options, res => {
    res.setEncoding("utf8");
    res.on("data", chunk => {});
    res.on("end", () => {
      console.log(
        `stauts: ${res.statusCode} 
				\nComplete: ${res.complete}
				\nDate: ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()} \n\n\n`
      );
    });
  });

  req.on("error", e => {
    console.log(
      `ERROR: ${e.message} \n\n
			Date: ${new Date().toLocaleTimeString()}  ${new Date().toLocaleDateString()}
			\nStart ping() again...`
    );
    ping();
  });

  req.end();
}

export function start() {
  setInterval(ping, 900000);
}
