import Card from "./components/Card"

function App() {
  return(
    <div>
      <Card title="Serviço 1" description="Fazer Web Site" amount={2000} />
      <Card title="Serviço 2" description="Fazer App Mobile" amount={3000} />
      <Card title="Serviço 3" description="Fazer App Mobile" amount={3000} />
      <Card title="Serviço 4" description="Fazer App Mobile" amount={3000} />
      <Card title="Serviço 5" description="Fazer App Mobile" amount={3000} />
    </div>
  )
}

export default App
