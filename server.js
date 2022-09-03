const FAV_TEACHER = process.env.NAME;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock! ",FAV_TEACHER);
    await sleep(5000);
  }
}

main();
