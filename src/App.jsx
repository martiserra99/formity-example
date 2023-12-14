import { useState } from "react";

import { Formity } from "formity";

import Center from "./components/center";
import Card from "./components/card";
import Result from "./components/result";

import form from "./form.json";

export default function App() {
  const [result, setResult] = useState(null);

  function handleSubmit(result) {
    setResult(result);
  }

  return (
    <Center>
      <Card>
        {result ? (
          <Result result={result} />
        ) : (
          <Formity json={form} onSubmit={handleSubmit} />
        )}
      </Card>
    </Center>
  );
}
