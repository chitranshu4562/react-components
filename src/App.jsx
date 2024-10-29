import Container from "./components/container/Container.jsx";
import Button from "./components/button/Button.jsx";
import MyForm from "./components/my-form/MyForm.jsx";

function App() {
    const handleClick = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
    }

  return (
    <>
        <Container>
            <h2 className="text-center">React Components</h2>
            <MyForm/>
        </Container>
    </>
  )
}

export default App
