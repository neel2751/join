// confetti.start();

//   console.log("start");
const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000);
};

const end = () => {
  setTimeout(function () {
    confetti.stop();
  }, 2000);
};

start();
end();
