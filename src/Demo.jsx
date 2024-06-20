const Demo = () => {
  throwError();
  return (
    <div>
      <h1> Simulate a component</h1>
    </div>
  );
};
export default Demo;

function throwError() {
  throw new Error("It was an error");
}
