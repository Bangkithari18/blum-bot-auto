function displayScreen() {
  process.stdout.write("\x1Bc");
  console.log(
    "================================================================".cyan
  );
  console.log(
    `===    BBBB   L       U   U  M   M      BBBB   OOO  TTTTT    ===`.yellow
  );
  console.log(
    `===    B   B  L       U   U  MM MM      B   B O   O   T      ===`.yellow
  );
  console.log(
    `===    BBBB   L       U   U  M M M      BBBB  O   O   T      ===`.yellow
  );
  console.log(
    `===    B   B  L       U   U  M   M      B   B O   O   T      ===`.yellow
  );
  console.log(
    `===    BBBB   LLLLLL   UUU   M   M      BBBB   OOO    T      ===`.yellow
  );
  console.log();
  console.log(
    `===    Created By : Mas Beng                                 ===`.yellow
  );
  console.log(
    "================================================================".cyan
  );
}

module.exports = { displayScreen };
