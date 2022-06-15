const childProcess = require("child_process");
const encodingJP = require("encoding-japanese");

const spawn = childProcess.spawn;
const pythonProcess = spawn(
  "python",
  ["handwritten-japanese-ocr-touch-panel-demo.py"],
  {
    cwd: "./handwritten-japanese-ocr",
  }
);

const main = async () => {
  pythonProcess.stderr.on("data", (data) => {
    console.error("err: " + data.toString().replaceAll("'", '"'));
  });

  pythonProcess.stdout.on("data", async (data) => {
    const arr = await JSON.parse(await data.toString());
    console.log(arr);
  });
};

main();
